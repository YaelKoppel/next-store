import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        PUBLIC_DB_CONNECTION: 
        "mongodb+srv://yaelchicco14:1111@cluster0.bavuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    },

};

export default nextConfig;
