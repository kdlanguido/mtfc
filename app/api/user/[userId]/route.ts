import User from "@/models/User.model";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }) {

    const { userId } = await params;

    const { email, password, profileUrl, userType, fullName, fitnessGoal } = await req.json();

    const updateUser = await User.findByIdAndUpdate(
        userId,
        {
            email,
            password,
            profileUrl,
            userType,
            fullName,
            fitnessGoal
        },
        { new: true }
    );

    if (!updateUser) {
        return NextResponse.json(
            { message: "User not found!" },
            { status: 404 }
        );
    }

    return NextResponse.json(updateUser, { status: 200 });
}
