const { body, validationResult } = require("express-validator");

const studentValidationDetails = [
  body("name").notEmpty().withMessage("khong duoc trong"),
  body("birthday").isDate().withMessage("phai la ngay thang"),
  body("grade").isFloat({ min: 0, max: 10 }).withMessage("tu o den 10"),
];

const responseValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const studentValidation = [studentValidationDetails, responseValidation];

module.exports = studentValidation;
