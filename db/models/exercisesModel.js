const sequelize = require("../../config/database");
const { DataTypes } = require("sequelize");

/* 
The validation error isnt working correctly; It prints out validation err no matter what I put in
*/

module.exports = sequelize.define(
  "exercises",
  {
    exerciseID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    exerciseName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Name can't be null",
        },
        notEmpty: {
          msg: "Name can't be empty",
        },
      },
    },
    exerciseType: {
      type: DataTypes.ENUM("Strength", "Cardio", "Sport"),
      allowNull: false,
      // validate: {
      //   isIn: {
      //     arg: [["Cardio", "Strength", "Sport"]],
      //     msg: "Value must be Cardio, Strength, or Sport",
      //   },
      // },
    },
    exerciseMeasurement: {
      type: DataTypes.ENUM("Weight", "Distance", "Time"),
      allowNull: false,
      // validate: {
      //   isIn: {
      //     arg: [["Weight", "Distance", "Time"]],
      //     msg: "Value must be Weight, Distance, and/or Time",
      //   },
      // },
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "userID",
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

