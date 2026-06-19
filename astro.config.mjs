// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    icon({
      include: {
        mdi: ["email-outline", "linkedin", "github"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});