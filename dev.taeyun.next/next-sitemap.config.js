// next-sitemap configuration for SEO and automated sitemap/robots.txt generation.
// Excludes static assets and non-page files from the sitemap for cleaner indexing.

/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://taeyun-ryu.com',
    generateIndexSitemap: false,
    generateRobotsTxt: true,
    exclude: [
        '/apple-icon.png',
        '/icon.png',
        '/manifest.webmanifest',
        '/feed/posts.json',
    ],
};
