/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL,
    changefreq: 'daily',
    sitemapSize: 7000,
    generateRobotsTxt: true,
    exclude: ['/secret/*'],
}

module.exports = config;