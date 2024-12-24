import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message: "Name, email, and message are required fields.",
          success: false,
        },
        { status: 400 }
      )
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "3aebaff76c7c33",
        pass: "e29c7cbb5c82c0",
      },
    })
    const mailOptions = {
      from: email,
      to: "leadzahmed@gmail.com",
      subject: `New Message by Ahmed Raza - Portfolio`,
      html: `<table>
                    <tr>
                        <th>Name</th>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>${phone || "N/A"}</td>
                    </tr>
                    <tr>
                        <th>Message</th>
                        <td>${message}</td>
                    </tr>
            </table>`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully", success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { message: "Failed to send email", error: error.message, success: false },
      { status: 500 }
    )
  }
}
