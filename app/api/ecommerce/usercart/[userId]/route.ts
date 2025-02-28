import { ObjectId } from "mongodb";
import CartModel from "@/models/Cart.model";
import connectDb from "@/lib/mongoose";
import { newCart } from "../../route";

export async function GET(
    request: Request,
    { params }: { params: { userId: string } }
) {
    try {
        const { userId } = await params;
        const cartStatus = "pending"

        await connectDb();

        let cart = await CartModel.findOne({ userId, cartStatus });

        if (!cart) {
            cart = newCart(userId);
        }

        return new Response(JSON.stringify(cart), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response("Failed to connect to the database", { status: 500 });
    }
}
