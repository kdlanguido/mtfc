import mongoose from "mongoose";

const schema = {
    username: { type: String, required: true },
    password: { type: String, required: true },
    profileUrl: { type: String, required: true },
    userType: { type: String, required: true },
    fullName: { type: String, required: true },
};

const User = mongoose.models.User || mongoose.model("User", new mongoose.Schema(schema));

export default User;
