
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const val = process.env.BASE_URL
        return NextResponse.json({ success: true, message: "Token saved successfully",data:val }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "error.message" }, { status: 500 });
    }
}
