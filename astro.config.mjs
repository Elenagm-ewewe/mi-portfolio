// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';


import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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