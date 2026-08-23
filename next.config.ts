import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'webuildsites.net' }],
        destination: 'https://www.webuildsites.net/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
