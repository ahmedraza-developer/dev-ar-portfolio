export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;
        const to = 'ahmedrza14@gmail.com';
        const headers = `From: ${email}`;

        try {
            console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

            // Return a success response
            return res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Error sending email' });
        }
    }
    return res.status(405).end();
}