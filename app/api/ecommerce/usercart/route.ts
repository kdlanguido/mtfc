import CartModel from "@/models/Cart.model";
import connectDb from "@/lib/mongoose";

export async function PUT(request: Request,) {

    await connectDb()

    const { userId, cartItems } = await request.json();

    const cartStatus = "pending";

    let existingCart = await CartModel.findOne({ userId, cartStatus });

    if (existingCart) {
        existingCart.cartItems = cartItems;
        await existingCart.save();
    } else {
        let newCart = new CartModel({
            userId,
            cartItems,
            cartStatus
        });
        await newCart.save();
    }

    return new Response("Cart updated successfully.", { status: 200 });
}