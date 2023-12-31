import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from 'next/cache'

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

    const year = now.getMonth() === 11 && now.getDate() > 25 ? now.getFullYear() + 1 : now.getFullYear();

    const christmas = new Date(year, 11, 25); // Month is 0-indexed, 11 = December
    const diff = christmas.getTime() - now.getTime(); // Difference in milliseconds

    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const months = days / 30; // Approximation

    return {
        months: Math.floor(months),
        weeks: Math.floor(weeks),
        sleeps: Math.ceil(days),
        days: Math.floor(days),
        hours: Math.floor(hours),
        minutes: Math.floor(minutes),
        seconds: Math.floor(seconds),
        dayOfTheWeek: getDayOfWeek(christmas.getDay()),
    };
}

export const revalidate = true;

export async function GET(request: NextRequest) {
    const response = NextResponse.json(getTimeUntilChristmas());
    response.headers.set('Cache-Control', 'no-store');

    const path = request.nextUrl.pathname;
    revalidatePath(path)
    return response;
}
