import { NextRequest, NextResponse } from "next/server";
import VerificationCodeChangePassword from "@/models/VerificationCodeChangePassword.model";

export async function POST(req: NextRequest) {
    try {
        const { email, code } = await req.json();

        if (!email || !code) {
            return NextResponse.json(
                { message: "Email and code are required" },
                { status: 400 }
            );
        }

        const newVerificationCode = new VerificationCodeChangePassword({
            email,
            code,
            status: "pending",
        });

        await newVerificationCode.save();

        return NextResponse.json(
            { message: "Verification code saved successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in saving verification code:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
