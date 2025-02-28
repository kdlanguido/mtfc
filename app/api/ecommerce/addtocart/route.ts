import { ObjectId } from "mongodb";
import CartModel from "@/models/Cart.model";
import connectDb from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/Product.model";
import { newCart } from "../route";

export async function POST(req: NextRequest) {
    try {
        await connectDb();

        const { userId, productId } = await req.json();

        let cart = await CartModel.findOne({ userId, cartStatus: "pending" });

        if (!cart) {
            cart = await newCart(userId);
        }

        const { name, price, imgUrl } = await Product.findOne({ _id: productId });

        if (!cart.cartItems) {
            cart.cartItems = [];
        }

        let productInCart = cart.cartItems.find(item => item.name.toString() === name);

        if (productInCart) {
            productInCart.qty += 1;
        } else {
            cart.cartItems.push({
                name,
                price,
                imgUrl,
                qty: 1
            });
        }

        cart.markModified('cartItems');

        const res = await cart.save();

        return NextResponse.json({ message: "Product added to cart", cart: res }, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}
