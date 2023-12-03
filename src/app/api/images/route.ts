import { NextResponse, NextRequest } from "next/server";

export function GET(request: NextRequest) {
    // Allowed Categories
    const allowedCategories = ['christmas', 'santa', 'reindeer', 'snowman', 'elf', 'gingerbread', 'christmas-tree', 'present', 'stocking', 'candy cane', 'christmas-joy', 'mistletoe', 'christmas-lights', 'christmas-presents', 'christmas-cheer', 'santa-claus'];

    // Parse the URL and query parameters
    const url = new URL(request.url);
    const params = url.searchParams;

    let amount = parseInt(params.get('amount') || '5'); // Default to 5 images if no amount is specified
    let category = params.get('category') || 'christmas'; // Default to christmas if no category is specified

    // Validate amount
    if (isNaN(amount) || amount < 1 || amount > 10) {
        amount = 5;
    }

    // Check if category is allowed
    if (!allowedCategories.includes(category.toLowerCase())) {
        // if it isn't allowed display an error message
        return NextResponse.json({
            error: `Category '${category}' is not allowed. Must be one of the following: ${allowedCategories.join(', ')}`
        }, { status: 400 });
    }

    // Get images
    let images = [];
    for(let i = 0; i < amount; i++) {
        images.push({
            url: `https://source.unsplash.com/random/900x700/?${category}&sig=${Date.now() + i}`,
            caption: `Random ${category} image`
        });
    }

    return NextResponse.json(images);
}
