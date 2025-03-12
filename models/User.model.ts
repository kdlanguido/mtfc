import { IUser, SubscriptionI } from '@/constants/interfaces';
import mongoose, { Schema, Document, Types } from 'mongoose';


const subscriptionSchema = new Schema<SubscriptionI>({
    subscriptionName: { type: String, required: false },
    subscriptionType: { type: String, required: false },
    subscriptionStatus: { type: String, required: false },
    subscriptionEnd: { type: Date, required: false },
    subscriptionStart: { type: Date, required: false },
    qrCodeUrl: { type: String, required: false }
});


const userSchema = new Schema<IUser>({
    email: { type: String, required: false, unique: false },
    password: { type: String, required: false },
    profileUrl: { type: String, required: false },
    userType: { type: String, required: false },
    fullName: { type: String, required: false },
    gender: { type: String, required: false },
    fitnessGoal: { type: String, required: false },
    subscriptionInformation: { type: subscriptionSchema, required: false },
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
