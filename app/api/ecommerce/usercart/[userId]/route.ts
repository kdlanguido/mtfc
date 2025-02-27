import { ObjectId } from "mongodb";
import CartModel from "@/models/Cart.model";
import connectDb from "@/lib/mongoose";

export async function GET(
    request: Request,
    { params }: { params: { userId: string } }
) {
    try {
        // Destructure the userId from params
        const { userId } = params;

        // Ensure the database connection
        await connectDb();

        // Fetch the cart from the database by userId
        const cart = await CartModel.findOne({ userId });

        // Check if a cart was found
        if (!cart) {
            return new Response("Cart not found", { status: 404 });
        }

        // Return the cart data as JSON
        return new Response(JSON.stringify(cart), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response("Failed to connect to the database", { status: 500 });
    }
}
