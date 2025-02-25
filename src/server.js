// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();
const port = 5000; // You can change this to any port

// Middleware
app.use(cors()); // To handle cross-origin requests from the React app
app.use(bodyParser.json()); // To parse incoming JSON data

// Set up Nodemailer transporter (Gmail in this case, you can use any SMTP service)
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use Gmail or any other email service
    auth: {
        user: 'your-email@gmail.com', // Your email
        pass: 'your-email-password', // Your email password (or app-specific password if 2FA enabled)
    },
});

// POST route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, number, message } = req.body;

    // Email to the admin
    const mailOptionsAdmin = {
        from: 'your-email@gmail.com',
        to: 'admin-email@example.com', // Admin's email address
        subject: 'New Contact Form Submission',
        text: `You received a new message from ${name} (${email}).\n\nPhone: ${number}\nMessage: ${message}`,
    };

    // Thank-you email to the user
    const mailOptionsUser = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Thank You for Your Message!',
        text: `Hello ${name},\n\nThank you for contacting us. We have received your message and will get back to you soon.\n\nBest Regards,\nYour Company`,
    };

    // Send email to the admin
    transporter.sendMail(mailOptionsAdmin, (error, info) => {
        if (error) {
            console.error('Error sending admin email:', error);
            return res.status(500).json({ success: false, message: 'Failed to send admin email.' });
        }

        // Send thank-you email to the user
        transporter.sendMail(mailOptionsUser, (error, info) => {
            if (error) {
                console.error('Error sending user email:', error);
                return res.status(500).json({ success: false, message: 'Failed to send thank-you email.' });
            }

            // If both emails are sent successfully
            console.log('Emails sent successfully:', info.response);
            return res.status(200).json({ success: true, message: 'Form submitted successfully.' });
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
