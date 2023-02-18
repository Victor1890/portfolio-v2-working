import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"
import Script from "next/script"
import { useEffect } from "react"
import { useChangeTitle } from "../hooks/useChangeTitle"

export function reportWebVitals(metric: any) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {

  const { originalTitle, setOriginalTitle } = useChangeTitle("😭 PLEASE COME BACK!!")

  useEffect(() => {
    if(!originalTitle) setOriginalTitle(document.title)
  }, [originalTitle])

  return (
    <ApolloProvider client={client}>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-KJF12P63GL"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KJF12P63GL');
        `}
      </Script>

      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
