/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages 可能部署在子路径，但 jinshengdong.github.io 是根路径所以不需要 basePath
};

export default nextConfig;
