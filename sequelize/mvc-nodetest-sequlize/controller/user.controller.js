import User from "../model/user.model.js";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export const register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password, contact } = req.body;
  console.log(req.body);

  const userExists = await User.findOne({
    where: {
      [Op.or]: [{ email }, { contact }],
    },
  });

  if (userExists) return res.status(401).json({ msg: "User allready exists" });
  await User.create({
    name,
    email,
    password,
    contact,
  })
    .then((result) =>
      res.status(201).json({ massage: "Signup Success", data: result })
    )
    .catch((error) => {
      console.log(error);
      res.status(500).json({ err: "Internal server error" });
    });
};

export const signin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      let password = req.body.password;
      if (User.checkPassword(password, user.password)) {
        let payload = { subject: user.email };
        let token = jwt.sign(payload, "AMBOCHDAENFMGAHAILJI");
        return res
          .status(200)
          .json({ message: "Sign in success...", user, token });
      } else {
        return res.status(500).json({ message: "Incorrect password..." });
      }
    } else {
      return res.status(401).json({ message: "Unauthorized user...." });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Internal server error" });
  }
};
