// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import remarkGfm from "remark-gfm";

// https://astro.build/config
export default defineConfig({
  site: "https://karisakib.com",
  integrations: [
    mdx({
      syntaxHighlight: "prism",
      remarkPlugins: [remarkGfm],
      gfm: true,
      // extendMarkdownConfig: false
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // markdown: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [],
  // },
});
