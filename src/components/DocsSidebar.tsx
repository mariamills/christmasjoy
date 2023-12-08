"use client";

import {Fragment, useEffect, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    BellIcon,
    Cog6ToothIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    CursorArrowRippleIcon,
    CalendarIcon,
} from '@heroicons/react/24/outline'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

// Define the type for classes in classNames function
type ClassValue = string | undefined | null | false;

// Main navigation items
const navigation = [
    {
        name: 'Getting Started', href: '/docs/getting-started', icon: HomeIcon, current: false,
        subNavigation: [
            { name: 'Introduction', href: '/docs/getting-started#introduction' },
            { name: 'Quick Start', href: '/docs/getting-started#quick-start' },
            { name: 'Rate Limits', href: '/docs/getting-started#rate-limits' },
            { name: 'Why', href: '/docs/getting-started#why' },
        ]
    },
    { name: 'Endpoints', href: '/docs/endpoints', icon: CursorArrowRippleIcon, current: false },
    { name: 'Examples', href: '/docs/examples', icon: BellIcon, current: false

    },
    { name: 'Contribute', href: 'https://github.com/mariamills/christmasjoy', icon: UsersIcon, current: false },
]

// Utility function to combine class names based on conditions
function classNames(...classes: ClassValue[]) {
    return classes.filter(Boolean).join(' ')
}

export default function DocsSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [navItems, setNavItems] = useState(navigation);
    const pathname = usePathname();


    useEffect(() => {
        const updatedNavItems = navigation.map(item => ({
            ...item,
            current: item.href === pathname
        }));

        setNavItems(updatedNavItems);
    }, [pathname]);

    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-100 px-6 pb-4 ring-1 ring-white/10">
                                    <div className="flex h-16 shrink-0 items-center">
                                        <Image
                                            src="/santa-claus.svg"
                                            alt="ChristmasJoy API"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                <ul role="list" className="-mx-2 space-y-1">
                                                    {navigation.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                target={item.href.startsWith('http') ? '_blank' : '_self'}
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'bg-gray-800 text-white'
                                                                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                )}
                                                            >
                                                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                            <li className="mt-auto">
                                                <Link
                                                    href="https://github.com/mariamills/christmasjoy"
                                                    target="_blank"
                                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-green-600 hover:text-white"
                                                >
                                                    <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                    Support
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-50 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <Image
                            src="/santa-claus.svg"
                            alt="ChristmasJoy API"
                            width={32}
                            height={32}
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                target={item.href.startsWith('http') ? '_blank' : '_self'}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-red-600 text-white'
                                                        : 'text-gray-600 hover:text-white hover:bg-red-600',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                )}
                                            >
                                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                {item.name}
                                            </Link>
                                            {item.subNavigation && (
                                                <ul className="mt-1 pl-4">
                                                    {item.subNavigation.map(subItem => (
                                                        <li key={subItem.name}>
                                                            <Link
                                                                href={subItem.href}
                                                                className="text-gray-600 hover:text-white hover:bg-red-600 group flex gap-x-3 rounded-md p-1 mt-0.5 text-sm"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="mt-auto">
                                <Link
                                    href="https://github.com/mariamills/christmasjoy"
                                    target="_blank"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-green-600 hover:text-white"
                                >
                                    <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}