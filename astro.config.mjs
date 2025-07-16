// @ts-check
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://valevalleyrv.com', // Replace with your actual domain
  integrations: [tailwind(), sitemap(), partytown({config: {forward: ['dataLayer.push']}})],
});
