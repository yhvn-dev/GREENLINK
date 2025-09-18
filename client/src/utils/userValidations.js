export const loginValidation = ({ loginInput, password }) => {
  let errors = {};

  if (loginInput.length <= 0 && password.length <= 0) {
    errors.loginInput = "All fields are required";
  } else {
    if (loginInput.length <= 0) {
      errors.loginInput = "Username or Email is required";
    }
    if (password.length <= 0) {
      errors.password = "Password is required";
    }
  }

  return errors;
};
