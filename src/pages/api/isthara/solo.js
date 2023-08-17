import { google } from 'googleapis';

// link google sheet buat test
// https://docs.google.com/spreadsheets/d/14gsJ6RIxmmDU9CR_6pN6z5_FCbQw1diQiafnK2kiw7Y/edit?usp=sharing

async function handler(req, res) {
  if (req.method == 'POST') {
    // initialize all available value from the request here
    const { timestamp, stageName, name, nim, univ, tel, instagram, email, message } = req.body;
    // res.json({ message: 'It works!' });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Solo!A2:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        // all available values in order
        values: [[timestamp, stageName, name, nim, univ, tel, instagram, email, message]],
      },
    });

    res.status(201).json({ response, result: 'Data inputed!' });
  }
}

// Note: The API routes by default will listen for a GET request.
// So we have to explicitly check if the method is a POST request.

export default handler;

// reference : https://www.freecodecamp.org/news/create-a-feedback-form-using-nextjs-and-google-sheets-api/