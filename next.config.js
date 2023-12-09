/** @type {import('next').NextConfig} */

export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.nba.com",
      port: "",
    },
  ],
  domains: ["placehold.co"],
};
