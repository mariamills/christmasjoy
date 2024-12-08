import { NextResponse } from "next/server";
import cookies from "../../../data/cookies.json";
import path from "path";
import fs from "fs";

export function GET() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Get absolute path to the data file
    const dataFilePath = path.join(process.cwd(), 'src/data', 'santaCookie.json');

    // Initialize default cookie data
    let cookieData = {
        cookie: "Chocolate Chip",  // Default cookie
        lastUpdate: "2022-12-26"  // Default date
    };

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'src/data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    // Try to read existing data, if file exists
    try {
        if (fs.existsSync(dataFilePath)) {
            cookieData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
        } else {
            // If file doesn't exist, create it with default data
            fs.writeFileSync(dataFilePath, JSON.stringify(cookieData, null, 2));
        }
    } catch (error) {
        console.error('Error reading/writing initial cookie file:', error);
        // Continue with default data if there's an error
    }

    // Get the year from lastUpdate
    const lastUpdateYear = new Date(cookieData.lastUpdate).getFullYear();

    // Only update if it's a new year AND the cookie hasn't been updated yet this year
    if (currentYear > lastUpdateYear) {
        const newCookie = cookies[Math.floor(Math.random() * cookies.length)];

        cookieData = {
            cookie: newCookie,
            lastUpdate: currentDate.toISOString().split('T')[0]
        };

        try {
            // Save the new cookie data
            fs.writeFileSync(dataFilePath, JSON.stringify(cookieData, null, 2));
        } catch (error) {
            console.error('Error writing to file:', error);
        }
    }

    const response = NextResponse.json(cookieData);
    response.headers.set('Cache-Control', 'no-store');
    return response;
}