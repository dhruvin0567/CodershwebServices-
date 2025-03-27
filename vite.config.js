import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import VitePluginPurgeCss from 'vite-plugin-purgecss'
import VitePluginImagemin from 'vite-plugin-imagemin'
import { VitePWA } from 'vite-plugin-pwa';
import ViteSitemap from 'vite-plugin-sitemap';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePluginPurgeCss(),
    VitePluginImagemin(),
    VitePWA(),
    ViteSitemap({
      // The root URL of your site
      hostname: 'https://codersh-web-services.vercel.app/',
    })
  ],
  assetsInclude: ['**/*.PNG']
})

