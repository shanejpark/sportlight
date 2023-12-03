import mongoose from "mongoose";
const teamSchema = new mongoose.Schema(
  {
    id: Number,
    logo: Object,
    name: String,
  },
  { collection: "teams" }
);
export default teamSchema;
