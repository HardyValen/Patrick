/// <reference types="vitest/config" />
import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
  test: {
    expect: {
      requireAssertions: true
    },
    projects: [{
      extends: './vite.config.js',
      test: {
        name: 'client',
        environment: 'browser',
        browser: {
          enabled: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
        exclude: ['src/lib/server/**'],
        setupFiles: ['./vitest-setup-client.js']
      }
    }, {
      extends: './vite.config.js',
      test: {
        name: 'server',
        environment: 'node',
        include: ['src/**/*.{test,spec}.{js,ts}'],
        exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
      }
    }, {
      extends: true,
    }]
  }
});
