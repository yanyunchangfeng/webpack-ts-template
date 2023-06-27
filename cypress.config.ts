import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    defaultCommandTimeout: 25000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
