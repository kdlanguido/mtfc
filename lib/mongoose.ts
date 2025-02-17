import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to the database ");
    return;
  }
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to the database " + process.env.MONGODB_URI);
};

export default connectDb;
