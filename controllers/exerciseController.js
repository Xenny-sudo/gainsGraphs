const exercises = require("../db/models/exercisesModel");
const catchAsync = require("../utils/catchAsync");

const createExercise = catchAsync(async (req, res, next) => {
    const body = req.body;
    const userID = req.users.userID;

  const newExercise = await exercises.create({
    exerciseName: body.exerciseName,
    exerciseType: body.exerciseType,
    exerciseMeasurement: body.exerciseMeasurement,
    createdBy: userID,
  });

  return res.status(201).json({
    status: "success",
    data: newExercise,
  });
});

module.exports = { createExercise };
