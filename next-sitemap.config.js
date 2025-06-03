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
  }
}