/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pokeapi.co",
      },
      { hostname: "raw.githubusercontent.com" },
    ],
  },
}

export default nextConfig
