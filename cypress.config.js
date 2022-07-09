const { defineConfig } = require("cypress");

require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    chromeWebSecurity: false,
  },
  env: {
    homePage: "http://localhost:3000",
    // testing auth
    googleRefreshToken: process.env.REFRESH_TOKEN,
    googleClientId: process.env.APP_GOOGLE_CLIENTID,
    googleClientSecret: process.env.APP_GOOGLE_CLIENT_SECRET
  },
});
