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
        <a href="mailto:test@example.com">test@example.com</a>
      </div>
    </>
  )
}

// Force Server-Side Rendering so Cloudflare can process the HTML
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

