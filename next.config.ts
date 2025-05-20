import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   typedRoutes: true,
  //   typedEnv: true
  // }
}

export default nextConfig
