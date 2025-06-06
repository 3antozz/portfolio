const projectSlugs = ['odinbook', 'messaging_app', 'blog_page', 'where_is_waldo', 'file_uploader']
module.exports = {
  siteUrl: process.env.WEBSITE_URL,
  generateRobotsTxt: true,
  exclude: ['/contact/thanks'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/contact/thanks'],
      },
    ]
  },
  additionalPaths: async (config) => {
    return projectSlugs.map((project) => ({
      loc: `/projects/${project}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
}