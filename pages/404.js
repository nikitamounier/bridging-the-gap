import Link from 'next/link'

export default function Custom404() {
    return (
        <div className= "grid place-content-center h-screen text-center">
            <h1 className= "text-gray-900 text-xl font-bold">404 - Page not found</h1>
            <p className='text-gray-900'>It seems like you need some computing help.<br/> Why not {" "}
            <Link href = "/signup">
                <a className = "text-blue-800 underline underline-offset-2">
                    sign up
                </a>
            </Link>
            {" "} to our free Computer Science lessons?
            </p>
        </div>
    )
}