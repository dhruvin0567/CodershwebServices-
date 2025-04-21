import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import VitePluginPurgeCss from 'vite-plugin-purgecss'
// import VitePluginImagemin from 'vite-plugin-imagemin'
import { VitePWA } from 'vite-plugin-pwa';
import ViteSitemap from 'vite-plugin-sitemap';
import SitemapPlugin from 'vite-plugin-sitemap';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // VitePluginPurgeCss(),
    // VitePluginImagemin(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true
      }
    }),
    ViteSitemap({
      // The root URL of your site
      hostname: 'https://www.codersh.ca/',
    }),
    SitemapPlugin({
      baseUrl: 'https://www.codersh.ca/',
      changefreq: 'daily',
      priority: 1.0
    })
  ],
  base: '/',
  assetsInclude: ['**/*.PNG'],
  server: {
    proxy: {
      // Proxy API requests to the backend
      '/wp-json': {
        target: 'https://codersh.com/',  // Replace with your backend URL
        changeOrigin: true,              // Allows the proxy to change the origin of the request
        rewrite: (path) => path.replace(/^\/wp-json/, '/wp-json'), // Optional: removes `/api` prefix when forwarding the request
      },
    },
  },
})

