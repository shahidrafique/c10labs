import redirects from "./configs/redirects.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  images: {
    loader: "custom",
    loaderFile: "/src/loaders/image.js",
  },
  redirects,
};

export default nextConfig;
//Users/abdullah.qureshi/Documents/c10labs/frontend/configs/redirects.js
//Users/abdullah.qureshi/Documents/c10labs/frontend/configs/redirects
