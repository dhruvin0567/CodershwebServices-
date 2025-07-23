import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import VitePluginPurgeCss from 'vite-plugin-purgecss';
// import VitePluginImagemin from 'vite-plugin-imagemin';
import { VitePWA } from 'vite-plugin-pwa';
import ViteSitemap from 'vite-plugin-sitemap';
import SitemapPlugin from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),

    // VitePluginPurgeCss(),
    // VitePluginImagemin(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
    ViteSitemap({
      hostname: 'https://www.codersh.ca/',
    }),
    SitemapPlugin({
      baseUrl: 'https://www.codersh.ca/',
      changefreq: 'daily',
      priority: 1.0,
    }),
  ],
  base: '/',
  assetsInclude: ['**/*.PNG'],
  server: {
    proxy: {
      '/wp-json': {
        target: 'https://codersh.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wp-json/, '/wp-json'),
      },
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      format: {
        comments: false,
      },
      mangle: true,
    },
  },
});
