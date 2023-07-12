import dbCon from "@/utils/dbCon";
import Contact from "@/models/contact";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbCon();

        await Contact.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}