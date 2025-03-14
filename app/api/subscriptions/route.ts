import connectDb from "@/lib/mongoose";
import Subscription from "@/models/Subscription.model";
import User from "@/models/User.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {

        await connectDb();
        const subscriptions = await Subscription.find();

        if (!subscriptions) {
            return new Response(
                JSON.stringify({ message: "Subscriptions not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(JSON.stringify(subscriptions), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response("Failed to connect to the database", { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {

        const {
            userId,
            pricingId,
        } = await req.json();

        await connectDb();

        const userInformation = await User.findOne({ _id: userId });

        if (!userInformation) {
            return NextResponse.json(
                { message: "User not found!" },
                { status: 404 }
            );
        }

        if (!userInformation.subscriptions) {
            userInformation.subscriptions = [];
        }



        const status = "PENDING"

        const newSubscription = new Subscription({
            pricingId,
            status,
        });

        const res = await newSubscription.save();

        if (!userInformation.subscriptions.includes(pricingId)) {
            userInformation.subscriptions.push({ pricingId: pricingId, subscriptionId: res._id });
            await userInformation.save();
        }

        return NextResponse.json(res, { status: 200 });

    } catch (error) {
        console.error("Error in product creation API route:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
