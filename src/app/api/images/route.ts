import { NextResponse, NextRequest } from "next/server";

interface UnsplashImage {
    urls: {
        regular: string;
        raw: string;
        full: string;
        small: string;
        thumb: string;
    };
    description: string | null;
    alt_description: string | null;
    links: {
        html: string;
    };
    user: {
        name: string;
    };
}

interface UnsplashResponse {
    results: UnsplashImage[];
    total: number;
    total_pages: number;
}

interface ImageResponse {
    url: string;
    caption: string;
    credit: {
        photographer: string;
        unsplashLink: string;
    };
}

export async function GET(request: NextRequest) {
    const allowedCategories = ['christmas', 'santa', 'reindeer', 'snowman', 'elf', 'gingerbread', 'christmas-tree', 'present', 'stocking', 'candy cane', 'christmas-joy', 'mistletoe', 'christmas-lights', 'christmas-presents', 'christmas-cheer', 'santa-claus'];

    const url = new URL(request.url);
    const params = url.searchParams;

    let amount = parseInt(params.get('amount') ?? '5');
    let category = params.get('category') ?? 'christmas';

    if (isNaN(amount) || amount < 1 || amount > 30) {
        amount = 5;
    }

    if (!allowedCategories.includes(category.toLowerCase())) {
        return NextResponse.json({
            error: `Category '${category}' is not allowed. Must be one of the following: ${allowedCategories.join(', ')}`
        }, { status: 400 });
    }

    try {
        // First make a request to get total pages
        const initialResponse = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(category)}&per_page=${amount}`,
            {
                headers: {
                    'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
                    'Accept-Version': 'v1'
                }
            }
        );

        if (!initialResponse.ok) {
            throw new Error(`Unsplash API responded with status ${initialResponse.status}`);
        }

        const initialData: UnsplashResponse = await initialResponse.json();

        // Calculate a random page number between 1 and total_pages
        // Limit to max 20 pages to avoid going too deep in results
        const maxPage = Math.min(initialData.total_pages, 20);
        const randomPage = Math.floor(Math.random() * maxPage) + 1;

        // Make the actual request with the random page
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(category)}&per_page=${amount}&page=${randomPage}`,
            {
                headers: {
                    'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
                    'Accept-Version': 'v1'
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Unsplash API responded with status ${response.status}`);
        }

        const data: UnsplashResponse = await response.json();

        const images: ImageResponse[] = data.results.map((image: UnsplashImage) => ({
            url: image.urls.regular,
            caption: image.description ?? image.alt_description ?? `Random ${category} image`,
            credit: {
                photographer: image.user.name,
                unsplashLink: image.links.html
            }
        }));

        const response2 = NextResponse.json(images);
        response2.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        response2.headers.set('Pragma', 'no-cache');
        response2.headers.set('Expires', '0');
        return response2;

    } catch (error) {
        console.error('Error fetching from Unsplash:', error);
        return NextResponse.json({
            error: 'Failed to fetch images from Unsplash'
        }, { status: 500 });
    }
}