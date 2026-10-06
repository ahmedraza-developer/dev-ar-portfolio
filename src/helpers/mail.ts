import nodemailer from "nodemailer";
import { escapeHtml } from "@/lib/escape-html";
import { getMailEnv } from "@/lib/mail-env";
import type { LeadFormValues } from "@/lib/lead-schema";

export default async function mail({
  name,
  email,
  phone,
  message,
}: LeadFormValues) {
  const { user, pass } = getMailEnv();

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone?.trim() || "Not provided");
  const safeMessage = escapeHtml(message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const mailOptions = {
    from: user,
    to: [email, user],
    subject: "New Lead Generated - Ahmed Raza Portfolio",
    html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body{font-family:Arial,sans-serif;margin:0;padding:0;color:#333;background-color:#f4f4f4}.container{max-width:600px;margin:0 auto;background-color:#ebebeb;padding:20px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.1)}p{font-size:16px;line-height:1.5}.details{border-top:1px solid #ddd;margin-top:20px;padding-top:10px}</style></head><body><div class="container"><p style="text-align:center">You have received a new message from your contact form. Here are the details:</p><div class="details"><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Phone Number:</strong> ${safePhone}</p><p><strong>Message:</strong></p><p>${safeMessage}</p></div></div></body></html>`,
  };

  return transporter.sendMail(mailOptions);
}
