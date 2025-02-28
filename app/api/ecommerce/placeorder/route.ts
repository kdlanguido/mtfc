import { getCurrentDate } from "@/lib/date";
import connectDb from "@/lib/mongoose";
import Order from "@/models/Order.model";
import { NextRequest, NextResponse } from "next/server";
import { DisposeCurrentCart } from "../route";

export async function POST(request: NextRequest) {
    try {

        await connectDb();

        const { userId, cartItems } = await request.json();

        const orderStatus = "pending"
        const orderItems = cartItems
        const orderDate = getCurrentDate()

        const newOrder = new Order({
            userId,
            orderStatus,
            orderItems,
            orderDate
        });

        await newOrder.save();

        DisposeCurrentCart(userId);

        return NextResponse.json(
            { message: "Order form placed successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: error },
            { status: 500 }
        );
    }
}
