import React, {ReactNode} from "react";
import Link from "next/link";

type SectionHeaderProps = {
    text: string;
    size?: string;
};

type SectionParagraphProps = {
    children: React.ReactNode;
};

type SectionProps = {
    id: string;
    title: string;
    children: ReactNode;
};
const SectionHeader: React.FC<SectionHeaderProps> = ({ text, size = '2xl' }) => (
    <h3 className={`text-${size} font-bold tracking-tight sm:text-${size === '2xl' ? '4xl' : '2xl'}`}>{text}</h3>
);

const SectionParagraph: React.FC<SectionParagraphProps> = ({ children }) => (
    <p className="mt-5 mb-4 text-lg leader-8 text-gray-800">{children}</p>
);

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
    <div id={id} className="my-20">
        <SectionHeader text={title} />
        {children}
    </div>
);

export default function GettingStarted() {
    return(
        <div className="">
            <div className="">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Getting Started</h2>
                <p className="mt-5 mb-4 text-lg leader-8 text-gray-600">Getting started is easy. <br/> Currently, No API key is needed to get started. Simply make a request to the API and you&apos;re good to go!</p>
                <Link
                    href="/docs/endpoints"
                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    API Endpoints
                </Link>
            </div>

            <Section id="introduction" title="Introduction">
                <SectionParagraph>Welcome to the <span className="text-green-500">ChristmasJoy API</span>, your go-to source for all things related to <span className="text-red-500">Christmas!</span> Our API offers a wide range of information, including a Christmas countdown, jokes, images, songs, and interesting facts to get you in the holiday spirit. <br/>
                    This guide will walk you through the basics of using our API to access this festive data. <br/> However, <span className="font-bold">please keep in mind that this is a free API that is currently in development.</span></SectionParagraph>
            </Section>

            <Section id="quick-start" title="Quick Start">
                <SectionParagraph>To get started, simply make a request to the API using the <span className="text-green-500">base URL</span> and <span className="text-green-500">endpoint</span> of your choice. <br/> For example, to get <span className="text-red-500 font-bold underline">all</span> Christmas jokes, you would make a request to <span className="text-green-500 italic">https://christmasjoy.dev/api/jokes</span>.<br/>
                    However to get a <span className="text-red-500 font-bold underline">random</span> Christmas Joke, you&apos;d add <span className="text-green-500 font-bold">?random</span> to the end of the URL, like so: <span className="text-green-500 italic">https://christmasjoy.dev/api/jokes?random</span>.</SectionParagraph>
                <SectionParagraph><br/> <span className="font-bold">Please note that the API is currently in development, and some endpoints may not be available.</span></SectionParagraph>

                <SectionHeader text="Making Your First Request" size="xl" />
                <SectionParagraph>
                    1. <span className="font-bold">No API Key Required</span>: Our API is open and does not require an API key. This means you can start making requests right away! <br/>
                    2. <span className="font-bold">Base URL</span>: All API requests are made to the base URL: <span className="font-bold italic text-red-500">https://christmasjoy.dev/api</span>.
                </SectionParagraph>
                <div className="mt-4 flex flex-col gap-4">
                    <SectionParagraph>To get started, let&apos;s make a simple request to get a random Christmas fact.</SectionParagraph>
                    <SectionParagraph><span className="font-bold">Endpoint</span>: <code className="bg-gray-900 text-white p-2 rounded">/facts?random</code></SectionParagraph>
                    <SectionParagraph><span className="font-bold">Request Type</span>: <code className="bg-gray-900 text-white p-2 rounded">GET</code></SectionParagraph>
                    <SectionParagraph><span className="font-bold">Example Request</span>: <code className="bg-gray-900 text-white p-2 rounded">https://christmasjoy.dev/api/facts?random</code></SectionParagraph>
                    <SectionParagraph>
                        <span className="font-bold">Example Expected Response</span>: <code className={"bg-gray-900 text-white p-2 rounded"}>{`{"fact": "The first Christmas was celebrated on December 25, AD 336 in Rome."}`}</code>
                    </SectionParagraph>
                </div>
            </Section>

            <Section id="rate-limits" title="Rate Limits">
                <SectionParagraph>The API is currently in development, and as such, there are no rate limits. This may change in the future.<br/> However, please be respectful of the API and do not spam requests.</SectionParagraph>
            </Section>

            <Section id="why" title="Why">
                <SectionParagraph>This API was originally created because one of my colleagues from university wanted to create a Christmas-themed app, but couldn&apos;t find any Christmas APIs that offered the data he was looking for. <br/> So, I decided to create one myself! <br/> I hope you enjoy using this API as much as I enjoy creating it. <br/><br/> Merry Christmas🎄 and Happy Holidays! ❤️</SectionParagraph>
            </Section>
        </div>
    )
}