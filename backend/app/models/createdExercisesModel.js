const sequelize = require("../utils/sequelize");
const { DataTypes } = require("sequelize");

const createdExercises = sequelize.define("createdExercises", {
    exerciseName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    exerciseType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exerciseMeasurement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

export default createdExercises;
