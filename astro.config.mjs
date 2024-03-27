import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mr-poz.pl',
  integrations: [react(), icon(), sitemap()]
});