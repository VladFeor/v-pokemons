const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";` // Optional: Import your SCSS variables file
      }
    }
  }
})
