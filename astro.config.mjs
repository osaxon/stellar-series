import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import embeds from "@astro-community/astro-embed-integration";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), embeds(), mdx(), react()]
});