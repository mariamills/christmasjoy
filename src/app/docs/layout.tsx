import DocsSidebar from "@/components/DocsSidebar";

export default function DocsLayout({
                                            children, // will be a page or nested layout
                                        }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section>
            < DocsSidebar />
            <main className="mt-10 lg:ml-80 lg:mx-72 md:mx-12 sm:ml-28 p-4 md:p-0.5">{children}</main>
        </section>
    )
}