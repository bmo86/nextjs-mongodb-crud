import { NextResponse } from "next/server"

export function GET(params) {
    return NextResponse.json({
        message : "Obteniendo Tareas...",
    })
}

export function POST(params) {
    return NextResponse.json({
        message : "Creando Tareas",
    })
}