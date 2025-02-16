import { CollectionNames, Database } from "@/constants/DB";

export async function GET(request: Request) {
  try {
    const Products = await Database.collection(CollectionNames.Products)
      .find({})
      .toArray();

    if (Products.length === 0) {
      return new Response(JSON.stringify({ message: "No Products found" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(Products), { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response("Failed to connect to the database", { status: 500 });
  }
}
