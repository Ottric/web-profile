import { stat } from "node:fs/promises";
import path from "path";
import { PDFParse } from "pdf-parse";

export interface PDFInfo {
  Author?: string;
  ModDate?: string;
  Size?: string;
}

export async function getPDFInfo(filePath: string): Promise<PDFInfo> {
  try {
    const cleanPath = filePath.replace(/^\/+/, "");
    const fullPath = path.join(process.cwd(), "public", cleanPath);

    const stats = await stat(fullPath);
    const fileSize = stats.size;

    const parser = new PDFParse({ url: `${process.env.PUBLIC_BASE_URL}${filePath}` });
    const info = await parser.getInfo({ parsePageInfo: true });

    return {
      Author: info.info?.Author,
      ModDate: PDFdateFormatter(info.info?.ModDate),
      Size: formatFileSize(fileSize),
    };
  } catch (error) {
    console.error("Error extracting PDF metadata:", error);
    return { Author: "Unknown", ModDate: "Unknown", Size: "Unknown" };
  }
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let unitIndex = -1;
  let size = bytes;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

function parsePDFDateToJS(pdfDate: string) {
  const cleaned = pdfDate.replace(/^D:/, "");

  const iso =
    `${cleaned.slice(0, 4)}-${cleaned.slice(4, 6)}-${cleaned.slice(6, 8)}T` +
    `${cleaned.slice(8, 10)}:${cleaned.slice(10, 12)}:${cleaned.slice(12, 14)}`;

  return new Date(iso);
}

function PDFdateFormatter(pdfDate: string): string {
  const date = parsePDFDateToJS(pdfDate);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  // Format: dd MONTH yyyy HH:mm (e.g. 01 Jan 2024 14:30)
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
