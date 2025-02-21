import mongoose from "mongoose";

const schema = {
    email: { type: String, required: true },
    code: { type: Number, required: true },
    status: { type: String, required: true },
};

const VerificationCodeChangePassword = mongoose.models.VerificationCodeChangePassword || mongoose.model("VerificationCodeChangePassword", new mongoose.Schema(schema));

export default VerificationCodeChangePassword;
