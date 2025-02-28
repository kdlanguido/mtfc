import Product from "@/models/Product.model";
import connectDb from "@/lib/mongoose";

export async function GET() {
  try {
    await connectDb();
    const product = await Product.find().sort({ ratingScore: -1 }); // Sort by ratingScore in descending order

    if (!product || product.length === 0) {
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
