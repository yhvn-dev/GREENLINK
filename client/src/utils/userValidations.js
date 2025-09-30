
const usernameInp = document.querySelector("input[name='username']")
const fullnameInp = document.querySelector("input[name='fullname']")
const emailInp = document.querySelector("input[name='email']")
const passwordInp = document.querySelector("input[name='password']")
const statusInp = document.querySelector("input[name='status']")
const roleInp = document.querySelector("input[name='roles']")


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



export const underOutlineInput = (input) => {
  input.style.border = "1px solid hsl(353, 40%, 90%)";
}
export const removeErrorUndeline = (input) =>{
  input.style.border = "1px solid hsl(180, 2%, 43%)";
}

 


export const validateUserEmptyFields = (payload, password, mode = "insert") => {
  let errors = {};

  const requireFields = mode === "insert";
  // Username
  if (payload.username && payload.username.trim() !== "") {
     payload.username = payload.username.trim();
     removeErrorUndeline(usernameInp)
  } else if (requireFields) {
    errors.username = "Username is required";
    underOutlineInput(usernameInp)
  }

  // Fullname
  if (payload.fullname && payload.fullname.trim() !== "") {
    payload.fullname = payload.fullname.trim();
  } else if (requireFields) {
    errors.fullname = "Fullname is required";
    underOutlineInput(document.querySelector("input[name='fullname']"))
  }

  // Email
  if (payload.email && payload.email.trim() !== "") {
    payload.email = payload.email.trim();
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      errors.email = "Invalid email format";
      underOutlineInput(document.querySelector("input[name='email']"))
    }
  } else if (requireFields) {
     errors.email = "Email is required";
     underOutlineInput(document.querySelector("input[name='email']"))
  }
  


  // Password rules
  if (mode === "insert") {
    if (!password || password.trim() === "") {
      errors.password = "Password is required";
      underOutlineInput(document.querySelector("input[name='password']"))
    } else if (password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
      underOutlineInput(document.querySelector("input[name='password']"))
    } else {
      payload.password = password.trim();
    }

  } else if (mode === "update" && password && password.trim() !== "") {
    if (password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
      underOutlineInput(document.querySelector("input[name='password']"))
    } else {
      payload.password = password.trim();
    }
  }


  if (mode === "insert") {

  // insert: both required
    if (!payload.role || payload.role.trim() === "" || 
        !payload.status || payload.status.trim() === "") {
      errors.role = "Role is required";
      errors.status = "Status is required";
      underOutlineInput(document.querySelector("select[name='status']"))
      underOutlineInput(document.querySelector("select[name='roles']"))
    } else {
      payload.role = payload.role.trim();
      payload.status = payload.status.trim();
    }

} else if (mode === "update") {

  // update: only validate if provided
    if (payload.role && payload.role.trim() === "") {
      errors.role = "Role is required";
      underOutlineInput(document.querySelector("select[name='roles']"))
    }
    if (payload.status && payload.status.trim() === "") {
      errors.status = "Status is required";
       underOutlineInput(document.querySelector("select[name='status']"))
    }

  }


  return { payload, errors };

};
