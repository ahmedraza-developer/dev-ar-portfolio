import nodemailer from 'nodemailer';

export async function POST(req, res) {
    try {
        const { name, email, phone, message } = await req.json();
        if (!name || !email || !message) {
            return res.status(400).json({
                message: "Name, email, and message are required fields.",
                status: 400
            });
        }
        const transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: "3aebaff76c7c33",
                pass: "e29c7cbb5c82c0",
            },
        });
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
                        <td>${phone}</td>
                    </tr>
                    <tr>
                        <th>Message</th>
                        <td>${message}</td>
                    </tr>
            </table>`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return success response
        return res.status(200).json({
            message: "Email sent successfully",
            status: 200,
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
            message: "Failed to send email",
            error: error.message,
            status: 500,
        });
    }
}
