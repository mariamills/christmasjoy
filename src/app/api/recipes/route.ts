import { NextResponse, NextRequest } from "next/server";
import christmasRecipes from "../../../data/christmasRecipes.json";

export function GET(request: NextRequest) {
    // Get a random greeting if query contains random
    if (request.url.includes('random')) {
        const randomGreeting = christmasRecipes[Math.floor(Math.random() * christmasRecipes.length)];
        return NextResponse.json(randomGreeting);
    }

    return NextResponse.json(christmasRecipes);
}