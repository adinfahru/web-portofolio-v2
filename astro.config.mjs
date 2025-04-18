import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import vercel from "@astrojs/vercel"; // ganti node dengan vercel
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), icon(), react()],
  output: "server", // boleh tetap pakai "server"
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
