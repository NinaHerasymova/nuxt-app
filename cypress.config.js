const { defineConfig } = require("cypress");

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
    apiUrl: "https://nuxt-auth-eb920-default-rtdb.europe-west1.firebasedatabase.app/posts/**"
  },
});
