import {body, validationResult} from "express-validator"

export const loginValidation = [

    body("loginInput")
         .notEmpty().withMessage("Username Or Email is Required")
         .custom((value) =>{

         // If it looks like email validate email format
         if(value.includes("@")){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                throw new Error("Invalid Email Format");
            }    
         } 
            return true;

         }),

         
    body("password_hash")
        .notEmpty().withMessage("Password is Required")
        .isLength({min:6}).withMessage("Password Must Be At Least 6 Characters"),
        
    (req,res,next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
    
        next();

    }

]