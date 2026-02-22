import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

import { NextRequest, NextResponse } from "next/server";

export type ScheduleData = {
  values: string[][];
};

export async function GET(request: NextRequest) {
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
    return NextResponse.json({ values } satisfies ScheduleData);
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return NextResponse.json({ error: "Failed to fetch data from Google Sheets" }, { status: 500 });
  }
}
