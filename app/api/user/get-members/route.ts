import connectDb from "@/lib/mongoose";
import User from "@/models/User.model";

export async function GET() {
    try {

        await connectDb();
        const users = await User.find({
            userType: "member"
        });

        if (!users) {
            return new Response(
                JSON.stringify({ message: "Members not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(JSON.stringify(users), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response("Failed to connect to the database", { status: 500 });
    }
}