const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

let corsOptions = {
  origin: `http://localhost:${PORT}`,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
