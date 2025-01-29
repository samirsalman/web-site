// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://samirsalman.github.io',
	base: "web-site",
	integrations: [mdx(), sitemap()],
});
