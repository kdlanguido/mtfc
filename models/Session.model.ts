import mongoose, { Schema, Document, Model } from "mongoose";

interface GymSession extends Document {
    userId: String;
    fullName: String;
    time: String;
    date: Date;
    status: String;
}

const GymSessionSchema = new Schema<GymSession>({
    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    time: { type: String, required: false },
    date: { type: Date, required: true },
    status: { type: String, required: true },
});

const GymSession = mongoose.models.GymSession || mongoose.model<GymSession>("GymSession", GymSessionSchema);

export default GymSession;
