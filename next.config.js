/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // experimental: {
  //   appDir: true,
  // },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
