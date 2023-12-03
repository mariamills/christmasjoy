import React,{useState, useEffect} from 'react'
import Link from "next/link";

interface Image {
    url: string;
}
function ChristmasImage() {
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        fetch(`https://christmasjoy.dev/api/images`)
            .then(response => response.json())
            .then(data => {
                setImages(data)
            })
            .catch(error => {
                console.error(error)
            })
    }, []);

    return (
        <div className="mt-10 overflow-hidden sm:mt-20" id="images">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Christmas <span className="text-green-500">Images</span></h2>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            Discover the magic of the holiday season with our collection of stunning Christmas images. From sparkling Christmas trees to festive decorations, our ChristmasJoy API brings you a random slice of holiday cheer with every request.
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            The default amount of images returned is <span className="text-red-500">5</span>, but you can specify the amount of images you want returned by adding a <span className="text-red-500">amount</span> query parameter to the URL. For example, if you want 10 images returned, you would make a request to <span className="text-red-500 italic">https://christmasjoy.dev/api/images?amount=10</span>.
                        </p>
                        <Link
                            href="/docs/endpoints"
                            type="button"
                            className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-4"
                        >Learn More
                        </Link>
                    </div>
                    {images.length > 1 && (
                        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                <div>
                                    <img
                                        src={images[0].url}
                                        alt=""
                                        className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                    <img
                                        src={images[1].url}
                                        alt=""
                                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                    <img
                                        src={images[2].url}
                                        alt=""
                                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                    <img
                                        src={images[3].url}
                                        alt=""
                                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ChristmasImage;