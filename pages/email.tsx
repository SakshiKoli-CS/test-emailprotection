import Head from 'next/head'
import { GetServerSideProps } from 'next'

export default function EmailPage() {
  return (
    <>
      <Head>
        <title>Send Email</title>
      </Head>
      <div style={{ padding: '20px' }}>
        <p>Contact us at:</p>
        <p>
          <u>
            <a href="mailto:test@example.com">test@example.com</a>
          </u>
        </p>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Set cache-control headers to force Cloudflare to bypass cache
  // This matches the working page headers
  res.setHeader(
    'Cache-Control',
    'private, no-cache, no-store, must-revalidate'
  )
  
  return {
    props: {},
  }
}

