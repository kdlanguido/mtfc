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
