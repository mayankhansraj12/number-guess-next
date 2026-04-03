/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: ["**/.next/**", "**/node_modules/**"],
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
