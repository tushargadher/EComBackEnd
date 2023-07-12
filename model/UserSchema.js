import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  
  },
});

const User = mongoose.model("user", UserSchema);
export default User;
