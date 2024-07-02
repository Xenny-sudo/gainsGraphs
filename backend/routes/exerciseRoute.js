const { authentication } = require("../controllers/authController");
const { createExercise } = require("../controllers/exerciseController");
const router = require("express").Router();

router.route("/").post(authentication, createExercise);

module.exports = router;
