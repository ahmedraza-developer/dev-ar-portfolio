import nodemailer from "nodemailer";

export default async function projectFeedbackMail({
  project,
  rating,
  message,
}) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: "leadzahmed@gmail.com",
        pass: "wqqmmjzvacecadio",
      },
    });

    const mailOptions = {
      from: "leadzahmed@gmail.com",
      to: "leadzahmed@gmail.com",
      subject: `New Project Feedback – ${project}`,
      html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><style>body{font-family:Arial,sans-serif;margin:0;padding:0;color:#333;background-color:#f4f4f4;} .container{max-width:600px;margin:0 auto;background-color:#ffffff;padding:24px;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.12);} h1{font-size:24px;margin-bottom:16px;color:#1f2933;} p{font-size:16px;line-height:1.6;margin:8px 0;} .meta{margin-top:20px;padding-top:16px;border-top:1px solid #e5e7eb;} .pill{display:inline-block;margin-top:8px;padding:6px 12px;background:#111827;color:#ffffff;border-radius:9999px;font-size:14px;letter-spacing:0.08em;text-transform:uppercase;}</style></head><body><div class="container"><h1>🚀 Project Feedback Received</h1><p><strong>Project:</strong> ${project}</p><p><strong>Rating:</strong> ${rating} / 5</p><div class="meta"><p><strong>Feedback:</strong></p><p>${message}</p><span class="pill">helpers/projectFeedbackMail</span></div></div></body></html>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}

