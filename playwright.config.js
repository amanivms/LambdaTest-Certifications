// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  projects: [
    {
      name: 'Chrome on Windows 10',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.lambdatest.com/selenium-playground',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'on',
        browserName: 'chromium',
        launchOptions: {
          args: ['--disable-infobars'],
        },
        contextOptions: {
          recordVideo: { dir: 'videos/' },
          permissions: ['geolocation'],
        },
      },
    },
    {
      name: 'Safari on macOS Catalina',
      use: {
        ...devices['Desktop Safari'],
        baseURL: 'https://www.lambdatest.com/selenium-playground',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'on',
        browserName: 'webkit',
        launchOptions: {
          args: ['--disable-infobars'],
        },
        contextOptions: {
          recordVideo: { dir: 'videos/' },
          permissions: ['geolocation'],
        },
      },
    },
  ],
  reporter: [['dot'], ['json', { outputFile: 'test-results.json' }]],
  timeout: 60000,
});
