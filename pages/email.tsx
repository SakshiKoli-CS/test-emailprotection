import Head from 'next/head'

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

