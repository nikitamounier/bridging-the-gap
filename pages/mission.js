import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/layout'
import library from '../public/library.jpeg'

const targets = [
    "Help them catch up on the basics",
    "Nurture their curiosity",
    "Build a strong work ethic",
    "Empower them to have as many opportunities as possible"
]

function Mission() {
    return (
        <div className = "pt-6 lg:max-w-none">
            <nav aria-label="Breadcrumb">
                <ol role="list" className = "max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li key={"Home"}>
                        <div className = "flex items-center">
                            <Link href = "/">
                            <a className = "mr-2 text-sm font-medium text-gray-900">
                                Home
                            </a>
                            </Link>
                            <svg
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className = "w-4 h-5 text-gray-300"
                            >
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>
                    <li className = "text-sm">
                        <Link href = "/mission">
                        <a aria-current="page" className = "font-medium text-gray-500 hover:text-gray-600">
                            Our Mission
                        </a>
                        </Link>
                    </li>
                </ol>
            </nav>

            {/* Info */}
            <div className = "max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                <div className = "lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h2 className = "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
                </div>

                {/* Library */}
                <div className = "mt-4 lg:mt-0 lg:row-span-3">
                    <h2 className = "sr-only">Library</h2>
                    <div className = "aspect-w-3 aspect-h-2 rounded-lg overflow-hidden w-full h-full relative">
                        <Image
                            src={library}
                            alt="North Kensington Library covered in butterflies"
                            objectPosition="center"
                            objectFit='cover'
                            layout="fill"
                            placeholder='blur'
                        />
                    </div>
                </div>


                <div className = "py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    {/* Description and details */}
                    <div>
                        <h3 className = "sr-only">Description of our mission</h3>

                        <div className = "space-y-6">
                            <p className = "text-xl text-gray-900">
                                Bridging The Gap is a charity created by a group of senior high school students who want to enable young teens to have as many opportunities as anyone else.
                                Covid-19 was tough for everyone, but young teens in our borough even more so. During lockdowns, many had a difficult time doing online school - whether because
                                of not having enough computers in a household, or being in a small household where it could be difficult for them
                                to concentrate.
                            </p>
                        </div>
                    </div>

                    <div className = "mt-10">
                        <h2 className = "text-3xl font-medium text-gray-900">Format</h2>

                        <div className = "mt-4 space-y-6">
                            <p className = "text-xl text-gray-900">
                                We hold two sessions a week in the North Kensington library, teaching a wide variety of topics. Check out {" "}
                                <Link href = "/courses">
                                    <a  className = "text-blue-800 underline underline-offset-2">our courses</a>
                                </Link>
                                {" "} and {" "}
                                <Link href = "/team">
                                    <a  className = "text-blue-800 underline underline-offset-2">our team</a>
                                 </Link>!
                            </p>
                        </div>
                    </div>

                    <div className = "mt-10">
                        <h2 className = "text-3xl font-medium text-gray-900">Our aims</h2>

                        <div className = "mt-4">
                            <ul role="list" className = "pl-4 list-disc space-y-2">
                                {targets.map((target) => (
                                    <li key={target} className = "text-gray-400">
                                        <span className = "text-xl text-gray-600">{target}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Mission

Mission.getLayout = function getLayout(page) {
    return (
        <Layout isHome={false} child = {page}/>
    )
}