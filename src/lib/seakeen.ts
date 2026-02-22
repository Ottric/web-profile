import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

export type ScheduleData = {
  values: string[][];
};

export async function getSeaKeenSchedule(): Promise<ScheduleData> {
  try {
    const auth = new GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT!),
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.readonly",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/spreadsheets.readonly",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Filter",
    });

    const values = response.data.values || [];
    return { values };
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return { values: [] };
  }
}
