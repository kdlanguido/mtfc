import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/mongoose";
import User from "@/models/User.model";

export async function GET(request: Request,
    { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        await connectDb();

        const UserInformation = await User.findById(id);

        if (!UserInformation) {
            return new Response(
                JSON.stringify({ message: "UserInformation not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(JSON.stringify(UserInformation), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new NextResponse("Failed to connect to the database", { status: 500 });
    }
}