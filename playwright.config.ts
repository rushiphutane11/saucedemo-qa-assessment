
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.saucedemo.com',
    browserName: 'chromium',
    headless: true,
    testIdAttribute: 'data-test',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});
