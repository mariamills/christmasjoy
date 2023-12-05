import { NextResponse, NextRequest } from "next/server";

enum DayOfWeek {
    Sunday = 0,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

function getDayOfWeek(day: DayOfWeek): string {
    return DayOfWeek[day];
}

interface TimeUntilChristmas {
    months: number;
    weeks: number;
    sleeps: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    dayOfTheWeek: string;
}

function getTimeUntilChristmas(): TimeUntilChristmas {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // set time to start of day

    const year = now.getMonth() === 11 && now.getDate() >= 25 ? now.getFullYear() + 1 : now.getFullYear();

    const christmas = new Date(year, 11, 25, 0, 0, 0, 0); // Month is 0-indexed, 11 = December
    const diff = christmas.getTime() - now.getTime(); // Difference in milliseconds

    const days = diff / (1000 * 60 * 60 * 24);
    const weeks = days / 7;
    const months = days / 30; // Approximation

    return {
        months: Math.floor(months),
        weeks: Math.floor(weeks),
        sleeps: Math.ceil(days),
        days: Math.floor(days),
        hours: Math.floor(days * 24),
        minutes: Math.floor(days * 24 * 60),
        seconds: Math.floor(days * 24 * 60 * 60),
        dayOfTheWeek: getDayOfWeek(christmas.getDay()),
    };
}

export function GET(request: NextRequest) {
    const response = NextResponse.json(getTimeUntilChristmas());
    response.headers.set('Cache-Control', 'no-store');
    return response;
}
