import Pricing from '@/models/Pricing.model';
import connectDb from '@/lib/mongoose';

export async function GET(request: Request,
    { params }: { params: { sport: string } }) {
    try {

        const { sport } = await params;

        await connectDb();

        const pricing = await Pricing.find({ sport });

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
