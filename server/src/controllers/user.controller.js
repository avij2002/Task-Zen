import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ENDUSER_COOKIES } from "../utils/userUtils.js";

const generateJWTToken = async (userID) => {
  try {
    const user = await User.findById(userID);
    const token = user.generateJWTToken();
    return token;
  } catch (error) {
    throw new ApiError(500, "Something went wrong while creating Token", error);
  }
};

const cookieOptions = {
  httpOnly: true,
  secure: true,
};

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "Email and Password are required");
  }

  const isUserAlreadyExist = await User.findOne({ email });
  if (isUserAlreadyExist) {
    throw new ApiError(
      409,
      "User already exist in the database. Please use a different or email"
    );
  }

  const user = await User.create({
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select("-password");
  if (!createdUser) {
    throw new ApiError(500, "Internal server Error");
  }

  res
    .status(201)
    .json(new ApiResponse(201, "User Registered Successfully", createdUser));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    throw new ApiError(400, "Email and Password both are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User doesn't exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const token = await generateJWTToken(user._id);

  const loggedInUser = await User.findById(user._id).select("-password");

  return res.status(200)
    .cookie(ENDUSER_COOKIES.TASK_ZEN_TOKEN, token, cookieOptions)
    .json(
      new ApiResponse(200, "User Logges in Successfully", {
        user: loggedInUser,
      })
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  const user = req.user;

  return res.status(200)
    .cookie(ENDUSER_COOKIES.TASK_ZEN_TOKEN, '', cookieOptions)
    .json(new ApiResponse(200, "User Logged out successfully", {}));
});

export { registerUser, loginUser, logoutUser };
