const nodemailer = require("nodemailer");
export default async function POST(req, res) {
    try {
        const { name, email, subject, message } = await req.body;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "ahmedrza14@gmail.com",
            port: 587,
            secure: true,
        })
        const mailOptions = {
            from: 'ahmedrza14@gmail.com',
            to: ['ahmedrza14@gmail.com'],
            subject: `New Message From Your Portfolio Site`,
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
                        <th>Subject</th>
                        <td>${subject}</td>
                    </tr>
                    <tr>
                        <th>Message</th>
                        <td>${message}</td>
                    </tr>
                  
            </table>`
        }
        await transporter.sendMail(mailOptions);
        return res.json({ "message": "Email send sucessfully", "status": 200 });
    } catch (error) {
        return res.json({ "message": "Failed to send Email", "data": error, "status": 500 });
    }
}