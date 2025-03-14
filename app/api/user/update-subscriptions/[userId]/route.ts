import User from "@/models/User.model";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }) {

    const { userId } = params;
    const { subscriptionId } = await req.json();

    try {
        const userInformation = await User.findOne({ userId });

        if (!userInformation) {
            return NextResponse.json(
                { message: "User not found!" },
                { status: 404 }
            );
        }

        userInformation.subscriptions.push(subscriptionId);

        const updateUser = await userInformation.save();

        return NextResponse.json(updateUser, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred", error: error.message },
            { status: 500 }
        );
    }
}
