/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://geekyvinayak.tech',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://geekyvinayak.tech/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  additionalPaths: async (config) => {
    const result = []

    result.push({
      loc: '/#projects',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })

    result.push({
      loc: '/#skills',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })

    result.push({
      loc: '/#gallery',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    })

    result.push({
      loc: '/#resume',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })

    result.push({
      loc: '/#contact',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })

    result.push({
      loc: '/blog',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })

    result.push({
      loc: '/blog/agentbazaar',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: '2026-05-09T00:00:00.000Z',
    })

    return result
  },
};


