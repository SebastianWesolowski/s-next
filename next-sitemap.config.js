/**
 * @type {import("next-sitemap").IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("./src/configs/configBasic");

module.exports = {
  // !STARTERCONF Change the siteUrl
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  siteUrl: config.url.production,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
