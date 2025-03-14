import Trainer from "@/models/Trainer.model";
import connectDb from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { instructorFor: string } }) {
    try {

        await connectDb();

        const { instructorFor } = params

        console.log(instructorFor)

        const trainers = await Trainer.find({ instructorFor });

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