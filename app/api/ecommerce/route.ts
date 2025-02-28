import Product from "@/models/Product.model";
import connectDb from "@/lib/mongoose";
import CartModel from "@/models/Cart.model";

export async function GET() {
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

export async function newCart(userId: string) {
  try {

    const newCart = new CartModel({
      userId,
      cartStatus: "pending",
      cartItems: [],
    });

    const cart = await newCart.save()

    return cart;
  } catch (error) {
    console.error("Error creating new cart:", error);
    throw new Error("Could not create cart.");
  }
}


export async function DisposeCurrentCart(userId: string) {
  try {

    const existingCart = await CartModel.findOne({
      userId,
      cartStatus: "pending",
    });

    if (!existingCart) {
      throw new Error("Cart not found or already completed.");
    }

    existingCart.cartStatus = "completed";

    await existingCart.save();

  } catch (error) {
    console.error("Error disposing current cart:", error);
    throw new Error("Could not update cart status.");
  }
}
