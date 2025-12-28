// app/api/subscription/route.ts

import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// IMPORTANT: This route requires a SEPARATE Sheet ID or a different sheet name (tab)
// than your contact form, but it uses the SAME GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY
// environment variables you already set up on Vercel.

// If you want to use a completely different sheet ID, you must set a new env variable 
// like SUBSCRIPTION_SHEET_ID and use it here. 
// For simplicity, we assume you are using the same GOOGLE_SHEET_ID but a different tab name.

const SUBSCRIPTION_SHEET_NAME = 'Subscription Claims'; // <<< CHANGE THIS to your second sheet/tab name

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }
  
  try {
    const { email } = await req.json(); // Only expecting 'email' in the body

    // 1. Authenticate using existing Vercel Environment Variables
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    
    // 2. Define the data to be written (Timestamp and Email Address)
    const values = [
      [
        new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }), // Column A: Timestamp
        email, // Column B: Email Address
      ],
    ];
    
    // 3. Write to the Google Sheet (Targeting the specific Sheet/Tab Name)
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID, // Uses the existing Sheet ID
      range: `${SUBSCRIPTION_SHEET_NAME}!A:B`, // Targets the new sheet name and columns A and B
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
    console.error('Subscription API Error:', error);
    return NextResponse.json({ 
        success: false, 
        message: 'Failed to log subscription data.' 
    }, { status: 500 });
  }
}
