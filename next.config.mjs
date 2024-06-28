/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'japan.cnet.com',
      'www.pc-koubou.jp',
      'store.storeimages.cdn-apple.com'
    ],
  },
};

export default nextConfig;
