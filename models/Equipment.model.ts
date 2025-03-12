import mongoose from "mongoose";

const vendorDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  datePurchased: { type: Date, required: false },
  qty: { type: Number, required: false },
  vendorDetails: vendorDetailsSchema,
});

const Equipment = mongoose.models.Equipment || mongoose.model("Equipment", schema);

export default Equipment;
