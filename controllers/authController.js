const users = require('../db/models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

const signup = catchAsync(async (req, res, next) => {
  const body = req.body;

  const newUser = await users.create({
    username: body.username,
    password: body.password,
    confirmPassword: body.confirmPassword,
  });

  if (!newUser) {
    return next(new AppError("Failed to create user",400));
  };
  const result = newUser.toJSON();

  delete result.password;
  delete result.deletedAt;

  result.token = generateToken({
    userID: result.userID,
  });

  return res.status(201).json({
    status: "Success",
    data: result,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new AppError("Please provide login information",400));
  };
  const result = await users.findOne({ where: { username } });
  if (!result || !(await bcrypt.compare(password, result.password))) {
      return next(new AppError("Incorrect username or password", 401));
  };

  const token = generateToken({
    userID: result.userID,
  });

  return res.json({
    status: "success",
    token,
  });

});

const authentication = catchAsync(async (req, res, next) => {
  let idToken = "";
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    idToken = req.headers.authorization.split(' ')[1];
  };

  if (!idToken) {
    return next(new AppError("Please login to get access",401));
  };
  const tokenDetail = jwt.verify(idToken, process.env.JWT_SECRET);
  const freshUser = await users.findByPk(tokenDetail.userID);

  if (!freshUser) {
    return next(new AppError("User no longer exists", 400));
  }
  req.users = freshUser;
  return next();
});
module.exports = { signup, login, authentication };