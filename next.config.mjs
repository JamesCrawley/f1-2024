/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: "/",
      destination: "/leaderboard",
      permanent: true,
    },
  ],
};

export default nextConfig;
