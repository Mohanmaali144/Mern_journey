import { Router } from "express";
import { register, signin } from "../controller/user.controller.js";
import { body, validationResult } from "express-validator";
const router = Router();
router.post(
  "/signup",
  body("usernmae", "username required..").notEmpty(),
  body("email", "invalid email ").isEmail(),
  body("email", "email is requird").notEmpty(),
  body("contact", "Contact must be digit only ").isNumeric(),
  body("contact", "contact requird").notEmpty(),
  body("password", "password requird").notEmpty(),
  body("password", "Password atleast 6 character ").isLength({ min: 6 }),
  register
);
router.post(
  "/signin",
  body("email", "email requerd").notEmpty(),
  body("password", "password is requird").notEmpty(),
  signin
);
export default router;
