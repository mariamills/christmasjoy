import { NextResponse, NextRequest } from "next/server";
import santaCookie from "../../../data/santaCookie.json";
import cookies from "../../../data/cookies.json";
import fs from "fs";

export function GET(request: NextRequest) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const dayAfterChristmas = new Date(currentYear, 11, 26); // 11 is December, months are 0-indexed

    let cookieData = santaCookie;

    // Check if the current date is December 26th and the last update was before this year's December 26th
    if (currentDate >= dayAfterChristmas && new Date(cookieData.lastUpdate) < dayAfterChristmas) {
        const newCookie = cookies[Math.floor(Math.random() * cookies.length)];

        cookieData = {
            ...cookieData,
            cookie: newCookie,
            lastUpdate: currentDate.toISOString().split('T')[0]
        };

        // Save the new cookie data
        // TODO: Add error handling
        fs.writeFileSync('../../../data/santaCookie.json', JSON.stringify(cookieData));

        // Return the new cookie
        return NextResponse.json(cookieData);

    } else {
        // Return the current cookie
        return NextResponse.json(cookieData);
    }
}