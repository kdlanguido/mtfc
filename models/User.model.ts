import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    profileUrl: string;
    userType: string;
    fullName: string;
    gender: string;
    fitnessGoal: string;
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileUrl: { type: String, required: false },
    userType: { type: String, required: false },
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
    fitnessGoal: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
