/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',  // Acepta cualquier ruta después de / en Unsplash
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**',  // Acepta cualquier ruta después de / en Unsplash
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',  // Acepta cualquier ruta después de / en Unsplash
      }
    ]
  }
};
export default nextConfig;
