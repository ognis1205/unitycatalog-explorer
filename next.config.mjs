/**
 * @type {import('next').NextConfig}
 * @fileoverview Defines Next configuration.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/dashboard/catalogs',
      }
    ];
  },
};

export default nextConfig;
