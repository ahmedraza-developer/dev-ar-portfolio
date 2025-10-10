// Utils
import mail from "@/helpers/mail"
// Next
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const requestBody = await request.json()
        const { name, email, phone, message } = requestBody
        const mailResponse = await mail({ name, email, phone, message })
        if (mailResponse) return NextResponse.json({ success: true, status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message, status: 500 })
    }
}