import { GoogleAuth } from "google-auth-library";

export type ScheduleData = {
  values: string[][];
};

export async function getSeaKeenSchedule(): Promise<ScheduleData> {
  try {
    const auth = new GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT!),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEET_ID}/values/Filter`,
      {
        headers: {
          Authorization: `Bearer ${accessToken.token}`,
        },
        next: { revalidate: 3600 },
      }
    );
    const data: ScheduleData = await response.json();

    const values = data.values || [];
    return { values };
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return { values: [] };
  }
}
