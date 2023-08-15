module.exports = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
    domains: [
      {
        domain: "appizsoft.com",
        defaultLocale: "tr",
        locales: ["tr",'en'],
      },
    ],
  },

  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },

  async headers() {
    return [
      {
        source: "/:path*.(jpg|jpeg|gif|png|bmp)", // Uzantıya sahip resim dosyalarını yakala
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800",
          },
        ],
      },
    ];
  },

  images: {
    domains: [
      "https://appizsoft-static-api.vercel.app/",
      "images.unsplash.com",
    ],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "appizsoft-static-api.vercel.app",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  reactStrictMode: true,

  productionBrowserSourceMaps: true,
};
