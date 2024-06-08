const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.development);

const testConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("CONNECTION SUCCESSFUL");

    await sequelize.sync({ alter: true });
  }
  catch (err) {
    console.error("FAILED TO CONNECT TO DATABASE:", err);
  }
};

testConnect();

module.exports = sequelize;
