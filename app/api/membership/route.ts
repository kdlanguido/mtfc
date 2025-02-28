import { NextRequest, NextResponse } from 'next/server';
import connectDb from '@/lib/mongoose';
import SubscriptionModel from '@/models/Subscription.model';

export async function POST(request: NextRequest) {
    try {

        await connectDb();

        const { userId, pricingId } = await request.json();

        const subscriptionStatus = "pending"

        const newSubscription = new SubscriptionModel({
            userId,
            pricingId,
            subscriptionStatus
        });

        await newSubscription.save();

        return NextResponse.json(
            { message: "Subscription added successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}
