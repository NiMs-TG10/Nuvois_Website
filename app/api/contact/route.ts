// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const { name, email, enquiryType, message } = await req.json();

    // 1. Authenticate using Environment Variables
    const auth = new google.auth.GoogleAuth({
      credentials: {
        // Ensure GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY are set in Vercel
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // The private key must be correctly formatted, replacing escaped newlines
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    // 2. Define the data to be written
    const values = [
      [
        new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }), // Timestamp
        name,
        email,
        enquiryType,
        message,
      ],
    ];

    // 3. Write to the Google Sheet (Ensure GOOGLE_SHEET_ID is set in Vercel)
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E', // Adjust 'Sheet1' to your actual sheet name, A:E covers 5 columns
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ 
        success: true, 
        rowsAppended: response.data.updates?.updatedRows 
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    // Return a generic server error
    return NextResponse.json({ 
        success: false, 
        message: 'Failed to submit form.' 
    }, { status: 500 });
  }
}
