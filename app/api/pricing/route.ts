import { NextRequest, NextResponse } from 'next/server';
import Pricing from '@/models/Pricing.model';
import connectDb from '@/lib/mongoose';

export async function POST(request: NextRequest) {
    try {
        await connectDb();

        const { name, inclusions, price, sport } = await request.json();

        if (!name || !Array.isArray(inclusions) || inclusions.some(item => typeof item !== 'string') || !price || !sport) {
            return NextResponse.json(
                { error: "All fields are required, and 'inclusions' must be an array of strings" },
                { status: 400 }
            );
        }

        const newPricing = new Pricing({
            name,
            inclusions,
            price,
            sport
        });

        await newPricing.save();

        return NextResponse.json(
            { message: "Pricing added successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    try {

        await connectDb();

        const pricing = await Pricing.find();

        if (!pricing) {
            return new Response(
                JSON.stringify({ message: "Pricing not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(JSON.stringify(pricing), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response("Failed to connect to the database", { status: 500 });
    }
}
