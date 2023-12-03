import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("teams", schema);
export default model;
