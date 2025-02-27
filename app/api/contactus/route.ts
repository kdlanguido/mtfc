import { NextRequest, NextResponse } from 'next/server';
import ContactUs from '@/models/ContactUs.model';
import connectDb from '@/lib/mongoose';

export async function POST(request: NextRequest) {
    try {

        await connectDb();

        const { fullName, email, phoneNumber, subject, message } = await request.json();

        if (!fullName || !email || !phoneNumber || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const newContact = new ContactUs({
            fullName,
            email,
            phoneNumber,
            message,
            subject
        });

        await newContact.save();

        return NextResponse.json(
            { message: "Contact form submitted successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: error },
            { status: 500 }
        );
    }
}


export async function GET() {
    try {

        await connectDb();

        const messages = await ContactUs.find();

        if (!messages) {
            return new Response(
                JSON.stringify({ message: "Messages not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(JSON.stringify(messages), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response("Failed to connect to the database", { status: 500 });
    }
}
