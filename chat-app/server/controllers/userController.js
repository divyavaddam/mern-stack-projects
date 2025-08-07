import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// SIGNUP A NEW USER
export const signup = async (req, res) => {
  const { fullName, email, password, bio } = req.body;

  try {
    if (!fullName || !email || !password || !bio) {
      return res.json({ success: false, message: "Missing Details" });
    }
    const user = await User.findOne({ email });

    if (user) {
      return res.json({ success: false, message: "Account already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      bio,
    });
    const token = generateToken(newUser._id);
    res.json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      userData: newUser,
      message: error.message,
    });
  }
};

// CONTROLLER TO LOGIN USER
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, userData.password);

    if (!isPasswordCorrect) {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const token = generateToken(userData._id);

    res.json({
      success: true,
      userData,
      token,
      message: "Login successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// CONTROLLER TO CHECK IF USER IS AUTHENTICATED

export const checkAuth = (req, res) => {
  res.json({ success: true, user: req.user });
};

// CONTROLLER TO UPDATE USER PROFILE DETAILS
export const updateProfile = async (req, res) => {
  try {
    const { profilePic, bio, fullName } = req.body;
    const userId = req.user._id;
    let updatedUser;
    if (!profilePic) {
      updatedUser = await User.findByIdAndUpdate(
        userId,
        { bio, fullName },
        { new: true }
      );
    } else {
      try {
        const upload = await cloudinary.uploader.upload(profilePic);
        console.log("Cloudinary upload result:", upload);
        updatedUser = await User.findByIdAndUpdate(
          userId,
          { profilePic: upload.secure_url, bio, fullName },
          { new: true }
        );
      } catch (err) {
        console.log("Upload failed", err.message);
        return res.json({
          success: false,
          message: "Cloudinary upload failed",
        });
      }
    }
    res.json({ success: true, user: updatedUser });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
