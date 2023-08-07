import { NextResponse } from "next/server"

export function GET(params) {
    return NextResponse.json({
        message: "hello world",
    })
}