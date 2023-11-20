import { NextResponse, NextRequest } from "next/server";
import christmasJokes from "../../../data/christmasJokes.json";

export function GET(request: NextRequest) {
    // Get a random fact if query contains random
    if (request.url.includes('random')) {
        const randomJoke = christmasJokes[Math.floor(Math.random() * christmasJokes.length)];
        return NextResponse.json(randomJoke);
    }

    // Return all facts
    return NextResponse.json(christmasJokes);
}