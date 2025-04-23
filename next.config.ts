import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env:{
    UNSPLASH: process.env.UNSPLASH_API_KEY,
    MEALDB: process.env.COCKTAILDB_API_KEY,
    AW_ENDPOINT: process.env.AW_ENDPOINT,
    AW_PROJECT_ID: process.env.AW_PROJECT_ID,
    AW_DB_ID: process.env.AW_DB_ID,
    AW_COLLECTION_ID_RECIPES: process.env.AW_COLLECTION_ID_RECIPES,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
