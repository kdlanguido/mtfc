import User from "@/models/User.model";
import connectDb from "@/lib/mongoose";

export async function POST(
    request: Request
) {
    try {
        await connectDb();

        const { email, password } = await request.json();
        const errorMsg = "Email or Password error!"
        const successMsg = "Login successful!"

        const user = await User.findOne({ email });

        if (!user) {
            return new Response(errorMsg, { status: 401 });
        }

        if (!user.password === password) {
            return new Response(errorMsg, { status: 401 });
        }

        return new Response(JSON.stringify({ msg: successMsg, user }), { status: 200 });

        // const isPasswordValid = await bcrypt.compare(password, user.password);

        // if (!isPasswordValid) {
        //     return new Response(errorMsg, { status: 401 });
        // }

    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response("Failed to connect to the database", { status: 500 });
    }
}
