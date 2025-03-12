import Session from "@/models/Session.model";
import connectDb from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
    try {

        await connectDb();
        const { userId, fullName } = await req.json();
        const time = format(new Date(), "hh:mm a");
        const date = format(new Date(), "yyyy-MM-dd");
        const status = "TIME - OUT"

        if (!userId) {
            return NextResponse.json(
                { message: "User Information Error" },
                { status: 400 }
            );
        }

        const newSession = new Session({
            userId,
            time,
            fullName,
            date,
            status
        });

        const res = await newSession.save();

        return NextResponse.json(res, { status: 200 });

    } catch (error) {
        console.error("Error in Session creation API route:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

