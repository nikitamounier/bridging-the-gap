import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'

import raph from "../public/team/raph.jpg"
import ghassan from "../public/team/ghassan.jpg"
import nikita from "../public/team/nikita.jpg"
import drevon from "../public/team/drevon.jpg"
// import kiara from "../public/team/kiara.jpg"
import thomas from "../public/team/thomas.jpg"
import ryan from "../public/team/ryan.jpg"
import alizee from "../public/team/alizee.jpg"
import josephine from "../public/team/josephine.jpg"
import omar from "../public/team/omar.jpg"
import rebecca from "../public/team/rebecca.jpg"
import kira from "../public/team/kira.jpg"
import satine from "../public/team/satine.jpg"
import yara from "../public/team/yara.jpg"
import come from "../public/team/come.jpg"
import salome from "../public/team/salome.jpg"
import matteo from "../public/team/matteo.jpg"
import alexandre from "../public/team/alex.jpg"

const people = [
    {
        id: 1,
        course: "Founder / Head of French",
        name: "Raphael Bendor",
        image: raph
    },
    {
        id: 2,
        course: "Head of Computer Science (made website)",
        name: "Nikita Mounier",
        image: nikita
    },
    {
        id: 3,
        course: "Head of Maths / Computer Science",
        name: "Ghassan Al Halabi",
        image: ghassan
    },
    {
        id: 4,
        course: "Head of English",
        name: "Raphael Drevon",
        image: drevon
    },
    // {
    //     id: "5",
    //     course: "English",
    //     name: "Kiara Ng",
    //     image: kiara
    // },
    {
        id: 6,
        course: "Computer Science",
        name: "Ryan Ghoussainy",
        image: ryan
    },
    {
        id: 7,
        course: "English",
        name: "Salome Boissel",
        image: salome
    },
    {
        id: 8,
        course: "English",
        name: "Josephine Rippon",
        image: josephine
    },
    {
        id: 9,
        course: "Maths",
        name: "Omar Hauser",
        image: omar
    },
    {
        id: 10,
        course: "French",
        name: "Rebecca Astaix",
        image: rebecca
    },
    {
        id: 11,
        course: "Maths",
        name: "Kira Davidoff",
        image: kira
    },
    {
        id: 12,
        course: "French",
        name: "Thomas Valentin",
        image: thomas
    },
    {
        id: 13,
        course: "Maths",
        name: "Satine Szwarc-Patel",
        image: satine
    },
    {
        id: 14,
        course: "Maths",
        name: "Yara Flitti",
        image: yara
    },
    {
        id: 15,
        course: "French",
        name: "Côme Bareau",
        image: come
    },
    {
        id: 16,
        course: "French",
        name: "Alizee Nasr",
        image: alizee
    },
    {
        id: 17,
        course: "English",
        name: "Matteo Maffre",
        image: matteo
    },
    {
        id: 18,
        course: "English",
        name: "Alexander De Mahieu",
        image: alexandre
    },
]

export default function Team() {
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
                        <Link href="/team">
                            <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                Our Team
                            </a>
                        </Link>
                    </li>
                </ol>
            </nav>
            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8">
                <h2 className="sr-only">people</h2>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-10">Our Team</h2>
                <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {people.map((person) => (
                        <div className='pb-5' key={person.id}>
                            <div className="w-full h-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    objectFit="cover"
                                    placeholder="blur"
                                    layout = "fill"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{person.course}</h3>
                            <p className="mt-1text-lg font-medium text-gray-900">{person.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Team.getLayout = function getLayout(page) {
    return (
        <Layout isHome={false} child = {page}/>
    )
}