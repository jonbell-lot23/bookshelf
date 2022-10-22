const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "uiuc69",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
