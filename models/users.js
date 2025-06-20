import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    imageUrl: { type: String, require: true },
    cartItems: { type: Object, default: {} },
  },
  { minimize: false }
);

const User = mongoose.model.user || mongoose.model("user", userSchema);
export default User;
