import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/mongoose";
import Trainer from "@/models/Trainer.model";
import { TrainerI } from "@/constants/interfaces";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const {
      profileUrl,
      fullName,
      gender,
      email,
      phone,
      shortIntro,
      instructorSchedule,
      hourlyRate,
      specialization,
      instructorFor,
    } = await req.json();

    await connectDb();

    if (!id) {
      return NextResponse.json(
        { message: "Trainer ID is required!" },
        { status: 400 }
      );
    }

    const updatedTrainer = await Trainer.findByIdAndUpdate(
      id,
      {
        profileUrl,
        fullName,
        gender,
        email,
        phone,
        shortIntro,
        instructorSchedule,
        hourlyRate,
        specialization,
        instructorFor
      },
      { new: true }
    );

    if (!updatedTrainer) {
      return NextResponse.json(
        { message: "Trainer not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTrainer, { status: 200 });

  } catch (error) {
    console.error("Error updating trainer:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
