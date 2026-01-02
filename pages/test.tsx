import Head from 'next/head'

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Cloudflare Email Obfuscation Test</title>
      </Head>
      <div style={{ padding: '20px' }}>
        <h1>Cloudflare Email Obfuscation Test</h1>
        <p>
          Contact us at:{' '}
          <a href="mailto:test@example.com">test@example.com</a>
        </p>
      </div>
    </>
  )
}

