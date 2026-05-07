import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agimmo.ma',
  output: 'static',
  trailingSlash: 'never',
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild'
    }
  }
});
