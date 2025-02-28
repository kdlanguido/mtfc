import mongoose, { Schema, Document, Model } from "mongoose";

interface Subscription extends Document {
    userId: String;
    pricingId: String;
    subscriptionStatus: String;
    subscriptionEnd: Date;
    subscriptionStart: Date;
}

const subscriptionSchema = new Schema<Subscription>({
    userId: { type: String, required: true },
    pricingId: { type: String, required: true },
    subscriptionStatus: { type: String, required: true },
    subscriptionEnd: { type: Date, required: false },
    subscriptionStart: { type: Date, required: false },
});

const SubscriptionModel = mongoose.models.Subscription || mongoose.model<Subscription>("Subscription", subscriptionSchema);

export default SubscriptionModel;
