import { NextResponse, NextRequest } from "next/server";
import christmasGreetings from "../../../data/christmasGreetings.json";

export function GET(request: NextRequest) {
  // Get a random greeting if query contains random
    if (request.url.includes('random')) {
        const randomGreeting = christmasGreetings[Math.floor(Math.random() * christmasGreetings.length)];
        return NextResponse.json(randomGreeting);
    }

    return NextResponse.json(christmasGreetings);
}