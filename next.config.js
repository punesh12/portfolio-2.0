/** @type {import('next').NextConfig} */
/** Keep in sync with `RESUME_PDF_PUBLIC_PATH` in src/constants/index.ts */
const RESUME_PDF_PUBLIC_PATH = '/Punesh Borkar- Lead Frontend Engineer Resume.pdf';

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/Punesh_Borkar_Resume.pdf',
        destination: encodeURI(RESUME_PDF_PUBLIC_PATH),
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mockhubapp.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
