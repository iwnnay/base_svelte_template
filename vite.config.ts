import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 6300,
    strictPort: true,
    host: true
  },
  preview: {
    port: 6300,
    strictPort: true
  },
  test: {
    include: ['tests/**/*.{test,spec}.{js,ts}']
  }
});
