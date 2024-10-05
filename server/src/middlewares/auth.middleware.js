import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

const verifyLoggedInUser = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.task_zen_token ||
            req.header("Authorization").replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id);
        if (!user) {
            throw new ApiError(401, "Invalid token");
        }

        req.user = user;
        next();
    } catch (error) {
        new ApiError(401, error?.message || "Invalid access Token");
    }
});

export { verifyLoggedInUser };