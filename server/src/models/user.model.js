import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = model("user", userSchema);
