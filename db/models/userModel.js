const sequelize = require('../../config/database');
const { DataTypes } = require("sequelize");
const bcryptjs = require('bcryptjs');
const AppError = require('../../utils/appError');

module.exports = sequelize.define(
  "users",
  {
    userID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Username can't be null",
        },
        notEmpty: {
          msg: "Username can't be empty",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password can't be null",
        },
      },
    },
    confirmPassword: {
      type: DataTypes.VIRTUAL,
      set(enteredPassword) {
        const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!regex.test(enteredPassword)) {
          throw new AppError(
            `Password must be greater than 8 characters 
            and contain a uppercase, lowercase, and symbol character(!,@,#,$,%,^,&,*)`,
            400
          );
        }
        if (enteredPassword === this.password) {
          const hashPassword = bcryptjs.hashSync(enteredPassword, 10);
          this.setDataValue("password", hashPassword);
        } else {
          throw new AppError("Password does not match", 400);
        }
      },
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    paranoid: true,
    modelName: "users",
  }
);
