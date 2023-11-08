/* eslint-disable no-undef */
module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000/",
  // siteUrl: "http://localhost:3000/",
  generateRobotsTxt: true,
  sitemapSize: 1000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
