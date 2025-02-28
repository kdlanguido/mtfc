import mongoose, { Schema, Document, Model } from "mongoose";

interface Pricing extends Document {
    _id: string;
    name: string;
    inclusions: string[];
    price: Number;
    sport: string;
}

const priceSchema = new Schema<Pricing>({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    inclusions: { type: [String], required: true },
    price: { type: Number, required: true },
    sport: { type: String, required: true },
});

const PricingModel = mongoose.models.Pricing || mongoose.model<Pricing>("Pricing", priceSchema);

export default PricingModel;
