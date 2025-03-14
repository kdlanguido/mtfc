import mongoose, { Schema, } from "mongoose";

export interface SubscriptionI {
    pricingId: string;
    status: string;
    endDate: Date;
    startDate: Date;
    qrCodeUrl: string;
}

const subscriptionSchema = new Schema<SubscriptionI>({
    pricingId: { type: String },
    status: { type: String },
    endDate: { type: Date },
    startDate: { type: Date },
    qrCodeUrl: { type: String },
});

const Subscription = mongoose.models.Subscription || mongoose.model<SubscriptionI>("Subscription", subscriptionSchema);

export default Subscription;
