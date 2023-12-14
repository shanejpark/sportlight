/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.nba.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "highlightly.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
    ],
  },
};
