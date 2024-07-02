const express = require("express");
const cors = require("cors");
// require('dotenv').config({path: `${process.cwd()}/.env`});
require('dotenv').config();
//Route files
const authRouter = require("./routes/authRoute");
const exerciseRouter = require("./routes/exerciseRoute")
//Error Handling files
const AppError = require("./utils/appError");
const catchAsync = require("./utils/catchAsync");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
const PORT = process.env.PORT;

// Cors setup
let corsOptions = {
  origin: `http://localhost:${PORT}`,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/exercises", exerciseRouter);

app.use(
  "*",
  catchAsync(async (req, res, next) => {
    throw new AppError(`Could not find ${req.originalUrl}`, 404);
  })
);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});