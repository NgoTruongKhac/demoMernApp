const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/StudentController");
const studentValidation = require("../middlewares/validations/studentValidation");

router.get("/", StudentController.listStudent);
router.get("/search", StudentController.findStudentByName);
router.get("/:id", StudentController.findStudentById);
router.post("/", studentValidation, StudentController.createStudent);
router.patch("/:id", studentValidation, StudentController.updateStudent);
router.delete("/:id", StudentController.deleteStudent);
module.exports = router;
