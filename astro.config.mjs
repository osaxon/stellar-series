import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import embeds from "@astro-community/astro-embed-integration";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [preact(), tailwind(), embeds(), mdx()],
});
