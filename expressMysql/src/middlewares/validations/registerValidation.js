const { body, validationResult } = require("express-validator");

const registervalidationDetails = [
  body("name")
    .notEmpty()
    .withMessage("khong duoc trong")
    .isLength({ max: 10 })
    .withMessage("toi da 10 ky tu"),
  body("pass").notEmpty().withMessage("khong duoc trong"),
  body("confirmPass")
    .notEmpty()
    .withMessage("khong duoc trong")
    .custom((value, { req }) => {
      if (value !== req.body.pass) {
        throw new Error("mat khau khong trung khop");
      }
      return true;
    }),
];

const responseValidation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const registervalidation = [registervalidationDetails, responseValidation];

module.exports = registervalidation;
