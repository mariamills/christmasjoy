"use client";

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    CursorArrowRaysIcon,
    SquaresPlusIcon,
    XMarkIcon,
    QuestionMarkCircleIcon,
    UserCircleIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlayCircleIcon, } from '@heroicons/react/20/solid'
import Link from "next/link";

const products = [
    {
        name: 'Endpoints',
        description: 'Brief list of available endpoints',
        href: '/docs/endpoints',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'API Documentation',
        description: 'Detailed documentation on how to use the API. Still in the works.',
        href: '/docs/getting-started',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Examples',
        description: 'Learn how to use our API with our examples. Coming soon!',
        href: '/docs/examples',
        icon: InformationCircleIcon,
    },
]
const callsToAction = [
    { name: 'Support', href: 'https://github.com/mariamills/christmasjoy', icon: UserCircleIcon },
    { name: 'Leave suggestion', href: '#', icon: SquaresPlusIcon },
    { name: 'Watch demo [Coming Soon]', href: '#', icon: PlayCircleIcon },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="relative isolate z-10 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">ChristmasJoy API</span>
                    {/* TODO: Add Logo  */}
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </Link>
                    <Link href="/#overview" className="text-sm font-semibold leading-6 text-gray-900">
                        Overview
                    </Link>
                    <Link href="/#jokes" className="text-sm font-semibold leading-6 text-gray-900">
                        Jokes
                    </Link>

                    <Popover>
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            API
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                        >
                            <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                                    {products.map((item) => (
                                        <div key={item.name} className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-red-600" aria-hidden="true" />
                                            </div>
                                            <Link href={item.href} className="mt-6 block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-50">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                                            {callsToAction.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                                >
                                                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/docs/getting-started"
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                        Get started
                    </Link>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {/* TODO: Add Logo  */}
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                API
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/#overview"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Overview
                                </Link>
                                <Link href="/#jokes" className="text-sm font-semibold leading-6 text-gray-900">
                                    Jokes
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/docs/getting-started"
                                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
