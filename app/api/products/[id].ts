import { ObjectId } from "mongodb";
import Product from "@/models/Product.model";
import connectDb from "@/lib/mongoose";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return new Response(
        JSON.stringify({ message: "Invalid product ID" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await connectDb();
    const product = await Product.findOne({ _id: new ObjectId(id) });

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
