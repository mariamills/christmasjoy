import { NextResponse, NextRequest } from "next/server";
import christmasSongs from "../../../data/christmasSongs.json";

export function GET(request: NextRequest) {
    // Get a random song if query contains random
    if (request.url.includes('random')) {
        const randomSong = christmasSongs[Math.floor(Math.random() * christmasSongs.length)];
        return NextResponse.json({ song: randomSong });
    }

    return NextResponse.json(christmasSongs);
}