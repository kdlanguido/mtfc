import Trainer from "@/models/Trainer.model";
import connectDb from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {

        await connectDb();
        const trainers = await Trainer.find();

        if (!trainers) {
            return new Response(
                JSON.stringify({ message: "Trainers not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(JSON.stringify(trainers), {
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
            profileUrl,
            fullName,
            gender,
            email,
            phone,
            shortIntro,
            instructorSchedule,
            instructorFor,
            hourlyRate,
            specialization,
        } = await req.json();

        await connectDb();

        if (!fullName || !gender || !email) {
            return NextResponse.json(
                { message: "Full name, gender, and email are required!" },
                { status: 400 }
            );
        }

        const newTrainer = new Trainer({
            profileUrl,
            fullName,
            gender,
            email,
            phone,
            shortIntro,
            instructorSchedule,
            instructorFor,
            hourlyRate,
            specialization,
        });

        const savedTrainer = await newTrainer.save();

        return NextResponse.json(savedTrainer, { status: 201 });

    } catch (error) {
        console.error("Error in trainer creation API route:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
