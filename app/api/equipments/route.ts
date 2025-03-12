import Equipment from "@/models/Equipment.model";
import connectDb from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {

    await connectDb();
    const equipments = await Equipment.find();

    if (!equipments) {
      return new Response(
        JSON.stringify({ message: "Equipments not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(equipments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response("Failed to connect to the database", { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const {
      name,
      description,
      price,
      _id,
      datePurchased,
      qty,
      vendorDetails
    } = await req.json();

    await connectDb();

    if (!name || !description || !price || !_id || !datePurchased || !qty || !vendorDetails) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    const updatedProduct = await Equipment.findByIdAndUpdate(
      _id,
      {
        name,
        description,
        price,
        datePurchased: new Date(datePurchased),
        qty,
        vendorDetails
      },
      { new: true }
    );

    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProduct, { status: 200 });

  } catch (error) {
    console.error("Error in product update API route:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function POST(req: NextRequest) {
  try {
    const { name, description, price, datePurchased, qty, vendorDetails } = await req.json();

    await connectDb();

    if (!name || !description || !price || !vendorDetails) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    const newEquipment = new Equipment({
      name,
      description,
      price,
      datePurchased,
      qty,
      vendorDetails,
    });

    const res = await newEquipment.save();

    return NextResponse.json(res, { status: 200 });

  } catch (error) {
    console.error("Error in equipment creation API route:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
