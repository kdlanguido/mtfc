import mongoose from "mongoose";

const schema = {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    message: { type: String, required: true },
    subject: { type: String, required: true },
};

const ContactUs = mongoose.models.ContactUs || mongoose.model("ContactUs", new mongoose.Schema(schema));

export default ContactUs;
