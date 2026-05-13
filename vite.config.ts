import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

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
  }
});
