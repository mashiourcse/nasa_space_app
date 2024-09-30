/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OpenAI: process.env.OPEN_AI,
      },
};

export default nextConfig;
