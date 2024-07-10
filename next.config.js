/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "/api/",
      },
      {
        source: "/docs",
        destination: "/api/docs",
      },
      {
        source: "/openapi.json",
        destination: "/api/openapi.json",
      },
    ];
  },
};

module.exports = nextConfig;
