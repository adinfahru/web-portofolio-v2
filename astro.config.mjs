import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import react from "@astrojs/react";

export default defineConfig({
  output: "static", // Ubah dari "server" ke "static"
  integrations: [tailwind(), icon(), react()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
