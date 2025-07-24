import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import User from "../models/User.js";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

export const signup = async (req, res) => {
  const { name, email, password, phonenumber } = req.body;
  try {
    if (!name || !email || !password || !phonenumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!/^[0-9]{10}$/.test(phonenumber)) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    // }else{
    //     return res.status(400).json({ message: "User created successfully " });
    // }

    const user = await User.create({ name, email, password, phonenumber });
    const token = generateToken(user._id);

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phonenumber: user.phonenumber,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(400).json({ message: "Both fields required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Incorrect password" });

    const token = generateToken(user._id);
    res.status(200).json({
      user: { id: user._id, name: user.name, email: user.email,phonenumber:user.phonenumber },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
