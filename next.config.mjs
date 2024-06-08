/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pokeapi.co",
      },
    ],
  },
}

export default nextConfig
