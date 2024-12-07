/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'img.icons8.com', 'www.pngplay.com', 'upload.wikimedia.org', 'pbs.twimg.com', 's3-alpha-sig.figma.com'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  }
}

module.exports = nextConfig