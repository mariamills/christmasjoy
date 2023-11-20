import { NextResponse, NextRequest } from "next/server";
import christmasFacts from "../../../data/christmasFacts.json";

export function GET(request: NextRequest) {
  // Get a random fact if query contains random
    if (request.url.includes('random')) {
        const randomFact = christmasFacts[Math.floor(Math.random() * christmasFacts.length)];
        return NextResponse.json(randomFact);
    }

    // Return all facts
    return NextResponse.json(christmasFacts);
}