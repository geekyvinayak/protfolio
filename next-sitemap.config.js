/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://geekyvinayak.tech',
  generateRobotsTxt: true,
  // optionally exclude certain routes
  exclude: ['/admin'],
    additionalPaths: async (config) => {
    const result = []

    // required value only
    result.push({ loc: '/#projects'  , changefreq: 'monthly',
      priority: 0.7, })

    // all possible values
    result.push({
      loc: '/#skills',
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })
    result.push({
      loc: '/#gallery',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })
    result.push({
      loc: '/#resume',
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })
    result.push({
      loc: '/#contact',
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })



    return result
  },
};


