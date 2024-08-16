
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const val = process.env.BASE_URL
        const test = process.env.TEST
        const bro = process.env.BRO
        console.log(test)
        console.log(val)
        return NextResponse.json({ success: true, message: "Token saved successfully",data:[val,test,bro] }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "error.message" }, { status: 500 });
    }
}
