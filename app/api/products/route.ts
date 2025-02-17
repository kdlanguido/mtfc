import { ObjectId } from "mongodb";
import Product from "@/models/Product";
import connectDb from "@/lib/mongoose";

export async function GET(
  request: Request
) {
  try {

    await connectDb();
    const product = await Product.find();

    if (!product) {
      return new Response(
        JSON.stringify({ message: "Product not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response("Failed to connect to the database", { status: 500 });
  }
}
