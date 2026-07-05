/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/jinshengdong.github.io',
  assetPrefix: '/jinshengdong.github.io',
  trailingSlash: true,
};

export default nextConfig;
