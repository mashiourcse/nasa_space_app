/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
      MistralAI: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    },
};

export default nextConfig;