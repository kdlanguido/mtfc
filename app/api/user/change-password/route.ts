import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User.model";
import bcrypt from "bcryptjs";
import connectDb from "@/lib/mongoose"

export async function POST(req: NextRequest) {
    try {
        const { email, newPassword } = await req.json();

        await connectDb()

        if (!email || !newPassword) {
            return NextResponse.json(
                { message: "Email and new password are required" },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;

        await user.save();

        return NextResponse.json(
            { message: "Password updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in change password API route:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
