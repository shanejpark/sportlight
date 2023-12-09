import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    dob: String,
    bio: String,
    pronouns: String,
    phoneNumber: Number,
    followers: [Number],
    following: [Number],
    highlights: [Number],
    matches: [Number],
    teams: [Number],
    leagues: [Number],
  },
  { collection: "users" }
);
export default userSchema;
