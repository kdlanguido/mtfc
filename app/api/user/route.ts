import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/mongoose";
import User from "@/models/User.model";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
    try {
        const { email, password, profileUrl, fullName, gender, fitnessGoal } = await req.json();

        await connectDb();

        if (!email || !password || !fullName || !gender || !fitnessGoal) {
            return NextResponse.json(
                { message: "All fields are required!" },
                { status: 400 }
            );
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json(
                { message: "User already exists!" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword,
            profileUrl,
            fullName,
            gender,
            fitnessGoal
        });

        await user.save();

        return NextResponse.json(
            { message: "User details saved successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in user registration API route:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest) {
    try {
        const { email, password, profileUrl, fullName, gender, fitnessGoal } = await req.json();

        await connectDb();

        if (!email || !fullName || !gender || !fitnessGoal) {
            return NextResponse.json(
                { message: "All fields are required!" },
                { status: 400 }
            );
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return NextResponse.json(
                { message: "User not found!" },
                { status: 404 }
            );
        }

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            existingUser.password = hashedPassword;
        }

        existingUser.profileUrl = profileUrl || existingUser.profileUrl;
        existingUser.fullName = fullName || existingUser.fullName;
        existingUser.gender = gender || existingUser.gender;
        existingUser.fitnessGoal = fitnessGoal || existingUser.fitnessGoal;

        await existingUser.save();

        return NextResponse.json(
            { message: "User details updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in user update API route:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
