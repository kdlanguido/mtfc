import Session from "@/models/Session.model";
import connectDb from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import { format } from "date-fns";

export async function GET(req: NextRequest) {
    try {

        await connectDb();

        const date = format(new Date(), "yyyy-MM-dd");

        const sessions = await Session.find({ date })

        return NextResponse.json(sessions, { status: 200 });

    } catch (error) {
        console.error("Error in Session creation API route:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function DELETE(req: NextRequest) {
    try {

        await connectDb();
        const { _id } = await req.json();
        const time = format(new Date(), "hh:mm a");
        const date = format(new Date(), "yyyy-MM-dd");
        const status = "TIME - OUT"

        if (!_id) {
            return NextResponse.json(
                { message: "User Information Error" },
                { status: 400 }
            );
        }

        const res = await Session.findByIdAndDelete({ _id })

        return NextResponse.json(res, { status: 200 });

    } catch (error) {
        console.error("Error in Session creation API route:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

