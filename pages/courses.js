import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/layout'

import maths from "../public/courses/maths.jpeg"
import english from "../public/courses/english.jpeg"
import french from "../public/courses/french.jpeg"
import coding from "../public/courses/coding.jpeg"

const courses = [
    { name: 'Maths', description: 'Solidify their foundations so that maths can feel natural to them.' },
    { name: 'English', description: 'Deepen their knowledge in language and literature to make GCSE essays a breeze.' },
    { name: 'French', description: 'Taught by french native speakers, have them learn french conversationally.' },
    { name: 'Computer Science', description: 'Students will learn programming from the ground up, until they can build their very own products.' }
]

function Courses() {
    return (
        <div className="pt-6">
            <nav aria-label="Breadcrumb">
                <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li key={"Home"}>
                        <div className="flex items-center">
                            <Link href="/">
                                <a className="mr-2 text-sm font-medium text-gray-900">
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
                                className="w-4 h-5 text-gray-300"
                            >
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>
                    <li className="text-sm">
                        <Link href="/courses">
                            <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                Our Courses
                            </a>
                        </Link>
                    </li>
                </ol>
            </nav>
            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 grid items-center grid-cols-1 gap-y-4 gap-x-8 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Courses</h2>
                    <p className="mt-4 text-gray-500 lg:pb-24">
                        We offer three core courses, made to solidify their foundations and fill in what they may have missed during lockdowns.
                        We also offer a supplementary course - Computer Science - for those who are interested in programming and want to maximise their opportunities in the future.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {courses.map((course) => (
                            <div key={course.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{course.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{course.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <div className="w-full h-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <Image
                            src={maths}
                            alt="Maths"
                            layout="fill"
                            objectFit='cover'
                            placeholder='blur'
                        />
                    </div>
                    <div className="w-full h-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <Image
                            src={english}
                            alt="English"
                            layout="fill"
                            objectFit='cover'
                            placeholder='blur'
                        />
                    </div>
                    <div className="w-full h-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <Image
                            src={french}
                            alt="French"
                            layout="fill"
                            objectFit='cover'
                            placeholder='blur'
                        />
                    </div>
                    <div className="w-full h-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <Image
                            src={coding}
                            alt="Computer Science"
                            layout="fill"
                            objectFit='cover'
                            placeholder='blur'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses

Courses.getLayout = function getLayout(page) {
    return (
        <Layout isHome={false} child={page} />
    )
}