import { TrainerI } from "@/constants/interfaces";
import mongoose, { Document, Schema } from "mongoose";

const trainerSchema = new Schema<TrainerI>({
    profileUrl: { type: String, required: false },
    fullName: { type: String, required: false },
    gender: { type: String, required: false },
    email: { type: String, required: false, unique: true },
    phone: { type: String, required: false },
    shortIntro: { type: String, required: false },
    instructorSchedule: { type: String, required: false },
    hourlyRate: { type: Number, required: false },
    specialization: { type: String, required: false },
    instructorFor: { type: String, required: false },
});

const Trainer = mongoose.models.Trainer || mongoose.model<TrainerI>("Trainer", trainerSchema);

export default Trainer;
