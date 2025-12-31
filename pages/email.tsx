import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function EmailPage() {
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Simple obfuscation: split and reverse parts of email
    // Original: test@example.com
    // Obfuscated format: [reversed parts]
    const parts = ['moc', 'elpmaxe', 'tset']
    const decoded = `${parts[2].split('').reverse().join('')}@${parts[1].split('').reverse().join('')}.${parts[0].split('').reverse().join('')}`
    setEmail(decoded)
  }, [])

  return (
    <>
      <Head>
        <title>Send Email</title>
      </Head>
      <div style={{ padding: '20px' }}>
        <p>Contact us at: {email || 'Loading...'}</p>
        {email && (
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
        )}
      </div>
    </>
  )
}

