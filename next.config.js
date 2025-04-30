/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ipkulikov.github.io/ipkulikov.github.io",
  assetPrefix: "/ipkulikov.github.io/ipkulikov.github.io",
  images: {
    unoptimized: true, // если используешь <Image />
  },
};

module.exports = nextConfig;
