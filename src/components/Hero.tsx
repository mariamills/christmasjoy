import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

export default function Hero() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-red-100/20">
                <div className="mx-auto max-w-7xl md:pb-24 pb-3 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <div className="mt-24 sm:mt-32 lg:mt-16">
                                    <Link href="https://github.com/mariamills/christmasjoy/releases/tag/v1.0.0" target="_blank" className="inline-flex space-x-6">
                                        <span className="rounded-full bg-red-600/10 px-3 py-1 text-sm font-semibold leading-6 text-red-600 ring-1 ring-inset ring-red-600/10">
                                            What&apos;s new
                                        </span>
                                        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                                            <span>Just released v1.0.0</span>
                                            <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </Link>
                                </div>
                                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    It&apos;s the most <span className="text-red-500">wonderful</span> time of the year.
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Dive into the festive spirit with the <span className="text-green-600">ChristmasJoy API</span>, your go-to source for all things Christmas. This free API brings the magic of the holiday season right to your fingertips, offering a delightful array of Christmas-related information.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <Link
                                        href="/docs/getting-started"
                                        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                    >
                                        Documentation
                                    </Link>
                                    <Link href="https://github.com/mariamills/christmasjoy" target="_blank" rel="noreferrer" className="text-sm font-semibold leading-6 text-gray-900 hover:ml-2 transition-all">
                                        View on GitHub <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-red-600/10 ring-1 ring-red-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className="shadow-lg md:rounded-3xl">
                            <div className="bg-red-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-red-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                    aria-hidden="true"
                                />
                                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                        ChristmasFacts.jsx
                                                    </div>
                                                </div>
                                            </div>
                                            <pre className="text-[0.8125rem] leading-6 text-gray-300">
                                                <code>
                                                    <div className="px-6 pb-14 pt-6">
                                                        <span className="text-red-500">fetch</span>
                                                        {"(https://christmasjoy.dev/api/facts)\n\t"}
                                                        <span className="text-red-500">.then</span>
                                                        {"(response => response.json())\n\t"}
                                                        <span className="text-red-500">.then</span>
                                                        {"(data => {\n\t\t"}
                                                        <span className="text-red-500">console</span>
                                                        {".log(data);\n\t\t"}
                                                        <span className="text-red-500">setFacts</span>
                                                        {"(data)\n\t"}
                                                        {"})\n\t"}
                                                        <span className="text-red-500">.catch</span>
                                                        {"(error => {\n\t\t\t"}
                                                        <span className="text-red-500">console</span>
                                                        {"."}
                                                        <span className="text-red-500">error</span>
                                                        {"(error);\n\t\t});\n\t"}
                                                        {"});"}
                                                    </div>
                                                </code>
                                            </pre>

                                        </div>
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    );
}