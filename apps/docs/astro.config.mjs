import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Alku",
      customCss: [
        "./src/global.css",
        "@fontsource/geist-sans/400.css",
        "@fontsource/geist-sans/500.css",
        "@fontsource/geist-sans/700.css",
        "@fontsource/geist-sans/900.css",
        "@fontsource/geist-mono/500.css",
      ],
      components: {
        Header: "./src/components/header.astro",
        PageTitle: "./src/components/page-title.astro",
      },
      pagination: false,
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Overview",
          autogenerate: { directory: "overview" },
        },
        {
          label: "Concepts",
          autogenerate: { directory: "concepts" },
        },
      ],
    }),
  ],
});
