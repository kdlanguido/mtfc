import Product from "@/models/Product.model";
import connectDb from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {

    await connectDb();
    const product = await Product.find();

    if (!product) {
      return new Response(
        JSON.stringify({ message: "Product not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(product), {
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
    const { name, description, price, imgUrl, _id } = await req.json();

    await connectDb();

    if (!name || !description || !price || !imgUrl || !_id) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      _id,
      { name, description, price, imgUrl },
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
    const { name, description, price, imgUrl } = await req.json();

    await connectDb();

    if (!name || !description || !price || !imgUrl) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    const newProduct = new Product({
      name,
      description,
      price,
      imgUrl
    });

    const res = await newProduct.save();

    return NextResponse.json(res, { status: 200 });

  } catch (error) {
    console.error("Error in product creation API route:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
