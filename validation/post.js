const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "post must be between 10 and 30 characters";
  }

  if (validator.isEmpty(data.text)) {
    errors.text = "text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
