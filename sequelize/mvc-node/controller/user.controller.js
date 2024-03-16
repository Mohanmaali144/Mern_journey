import { Op } from "sequelize";

import User from "../models/user.model.js";

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password, contact } = req.body;

    raw: true;
    if (!username || !email || !password || !contact) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { username }],
      },
      raw: true,
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email or username already exists" });
    }

    const newUser = new User({
      username,
      email,
      password,
      contact,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// soin ----- - - - - - - - - - - - - - nup

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    raw: true;
    if (!email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await User.findOne({
      where: { email: email, password: password },
    });

    if (existingUser) {
      return res.status(201).json({ message: "Sign ii SuccessFully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
