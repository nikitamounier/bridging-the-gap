import Link from "next/link"
import Image from 'next/image'
import Head from 'next/head'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import logo from '../public/logo.jpg'
import frontImage from '../public/frontimage.jpg'

export default function Layout({ isHome, child }) {
    return (
        <>
            <Head>
                <title> Bridging the Gap: free tutoring for Kensington and Chelsea </title>
                <meta name="theme-color" media = "(prefers-color-scheme: dark)" content="#2d6e32"/>
                <meta name="description" content = "We supply free tutoring to Year 11s in Kensington and Chelsea in Maths, English, Programming, and French." />
                <meta name="keywords" content = "charity, tutoring, free, kensington, coding" />
            </Head>
            <main className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className={isHome ? "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 lg:max-w-2xl" : "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32"}>
                        {isHome && <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        }

                        <Popover>
                            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <span className="sr-only">Bridging the Gap</span>
                                            <div className="h-8 w-8 mt-1 sm:h-10 relative">
                                                <Image
                                                    layout="fill"
                                                    src={logo}
                                                    alt="Logo"
                                                />
                                            </div>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                                    <span className="sr-only">Open main menu</span>
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                        <Link href="/">
                                            <a className="font-medium text-green-600 hover:text-green-500">
                                                Home
                                            </a>
                                        </Link>

                                        <Link href="/mission">
                                            <a className="font-medium text-green-600 hover:text-green-500">
                                                Mission
                                            </a>
                                        </Link>

                                        <Link href="/courses">
                                            <a className="font-medium text-green-600 hover:text-green-500">
                                                Courses
                                            </a>
                                        </Link>

                                        <Link href="/team">
                                            <a className="font-medium text-green-600 hover:text-green-500">
                                                Team
                                            </a>
                                        </Link>

                                        <Link href="/signup">
                                            <a className="font-medium text-green-600 hover:text-green-500">
                                                Sign Up
                                            </a>
                                        </Link>

                                        <Link href="mailto:contact@bridgingthegap.charity?subject=Express of interest in Bridging the Gap">
                                            <a className="font-medium text-green-600 hover:text-green-500">
                                                Contact Us
                                            </a>
                                        </Link>

                                    </div>
                                </nav>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div className="h-8 w-8 mt-1 sm:h-10 relative">
                                                <Image
                                                    src={logo}
                                                    layout="fill"
                                                    alt="Logo"
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                                    <span className="sr-only">Close main menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                            <Popover.Button className='w-full text-left'>
                                                <Link href="/">
                                                    <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 text-green-600 hover:text-green-500">
                                                        Home
                                                    </a>
                                                </Link>
                                            </Popover.Button>

                                            <Popover.Button className='w-full text-left'>
                                                <Link href="/mission">
                                                    <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 text-green-600 hover:text-green-500">
                                                        Mission
                                                    </a>
                                                </Link>
                                            </Popover.Button>

                                            <Popover.Button className='w-full text-left'>
                                                <Link href="/courses">
                                                    <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 text-green-600 hover:text-green-500">
                                                        Courses
                                                    </a>
                                                </Link>
                                            </Popover.Button>

                                            <Popover.Button className='w-full text-left'>
                                                <Link href="/team">
                                                    <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 text-green-600 hover:text-green-500">
                                                        Team
                                                    </a>
                                                </Link>
                                            </Popover.Button>

                                            <Popover.Button className='w-full text-left'>
                                                <Link href="/signup">
                                                    <a className="block w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 text-green-600 hover:text-green-500">
                                                        Sign Up
                                                    </a>
                                                </Link>
                                            </Popover.Button>

                                            <Popover.Button className='w-full text-left'>
                                                <Link href="mailto:raphael.bendor@eleve.lyceefrancais.org.uk?subject=Express of interest in Bridging the Gap">
                                                    <a className="block w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 text-green-600 hover:text-green-500">
                                                        Contact Us
                                                    </a>
                                                </Link>
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                        {child}
                    </div>
                </div>
                {isHome && <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
                        <Image
                            src={frontImage}
                            objectFit="cover"
                            layout="fill"
                            alt="Young kid being tutored in library"
                            priority
                        />
                    </div>
                </div>
                }
            </main>
        </>
    )
}