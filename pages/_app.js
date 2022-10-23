import '../styles/global.css'
import Head from 'next/head'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Head>
          <link
            rel="preconnect"
            href="https://images.prismic.io"
            crossOrigin="true"
          />
          <link rel="dns-prefetch" href="https://images.prismic.io" />

          <link
            rel="preconnect"
            href="https://prismic-io.s3.amazonaws.com"
            crossOrigin="true"
          />
          <link rel="dns-prefetch" href="https://prismic-io.s3.amazonaws.com" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
