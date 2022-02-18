import Layout from '../components/layout'
import Link from 'next/link'

function Home() {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline pr-20">Bridging the gap </span>
          <span className="block text-green-600 xl:inline">We want to help!</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          We are a charity aiming to help Year 11s in the borough of Kensington and Chelsea who were affected by online school - whether they want to catch up on
          some maths or learn to code, we will be there for your child!
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link href="/mission">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                Learn more
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="/signup">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                Sign up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home

Home.getLayout = function getLayout(page) {
  return (
    <Layout isHome={true} child = {page}/>
  )
}