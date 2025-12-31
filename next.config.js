/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'strict-dynamic' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://ajax.cloudflare.com https:; object-src 'none';"
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig

