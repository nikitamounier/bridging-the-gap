import '../styles/globals.css'

function BridgingTheGap({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default BridgingTheGap
