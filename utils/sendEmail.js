

import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});

export const sendEmail = async (email, subject, text) => {
    try {
        // Debugging: log environment variables
        console.log('ENV Variables:', {
            SERVICE: process.env.SERVICE,
            USER: process.env.USER,
            CLIENT_ID: process.env.CLIENT_ID,
            CLIENT_SECRET: process.env.CLIENT_SECRET ? 'Provided' : 'Not Provided',
            REFRESH_TOKEN: process.env.REFRESH_TOKEN ? 'Provided' : 'Not Provided',
            REDIRECT_URI: process.env.REDIRECT_URI
        });

        const accessToken = await oauth2Client.getAccessToken();

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            auth: {
                type: 'OAuth2',
                user: process.env.USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken.token
            }
        });

        // Send email
        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        });

        console.log("Email sent successfully");
    } catch (error) {
        console.log("Email not sent");
        console.error(error);
    }
};
