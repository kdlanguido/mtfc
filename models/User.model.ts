import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    _id: string;
    email?: string;
    password?: string;
    profileUrl?: string;
    userType?: string;
    fullName?: string;
    gender?: string;
    fitnessGoal?: string;
    subscriptions: Array<{
        subscriptionId: mongoose.Types.ObjectId;
        pricingId: mongoose.Types.ObjectId;
    }>;
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: false, unique: false },
    password: { type: String, required: false },
    profileUrl: { type: String, required: false },
    userType: { type: String, required: false },
    fullName: { type: String, required: false },
    gender: { type: String, required: false },
    fitnessGoal: { type: String, required: false },
    subscriptions: {
        type: [
            {
                subscriptionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' },
                pricingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pricing' }
            }
        ],
        default: []
    }
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
