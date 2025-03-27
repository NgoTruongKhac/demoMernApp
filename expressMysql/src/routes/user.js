const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const registervalidation = require("../middlewares/validations/registerValidation");

router.get("/refeshToken", UserController.refeshToken);
router.post("/login", UserController.login);
router.get("/", UserController.getAllUsers);
router.post("/", registervalidation, UserController.createUser);

module.exports = router;
