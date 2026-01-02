import Head from 'next/head'
import { GetServerSideProps } from 'next'

// Force dynamic rendering - disable static optimization
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Set cache control to prevent static optimization
  context.res.setHeader('Cache-Control', 'no-store, must-revalidate')
  return {
    props: {},
  }
}

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

