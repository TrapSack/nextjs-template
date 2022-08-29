

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['de-fsn1-2.stkcdn.com', 'localhost'],
  }
}


module.exports = nextConfig
