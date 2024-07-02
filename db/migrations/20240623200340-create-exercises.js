'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("exercises", {
      exerciseID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      exerciseName: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      exerciseType: {
        allowNull: false,
        type: Sequelize.ENUM("Cardio", "Strength", "Sport"),
      },
      exerciseMeasurement: {
        allowNull: false,
        type: Sequelize.ENUM("Weight", "Distance", "Time"),
      },
      createdBy: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "userID",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('exercises');
  }
};