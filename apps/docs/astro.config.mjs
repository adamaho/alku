import solidJs from "@astrojs/solid-js";
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
      expressiveCode: {
        themes: ["min-dark", "min-light"],
      },
      components: {
        Header: "./src/components/header.astro",
        PageTitle: "./src/components/page-title.astro",
      },
      pagination: false,
      social: {
        github: "https://github.com/adamaho/alku",
      },
      sidebar: [
        {
          label: "Overview",
          items: [
            {
              label: "Getting Started",
              link: "/overview/getting-started",
            },
            {
              label: "Changelog",
              link: "/overview/changelog",
            },
          ],
        },
        {
          label: "Concepts",
          items: [
            {
              label: "Layers",
              link: "/concepts/layers",
            },
            {
              label: "Accent Color",
              link: "/concepts/accent-color",
            },
            {
              label: "Scaling",
              link: "/concepts/scaling",
            },
            {
              label: "Radius",
              link: "/concepts/radius",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Colors",
              link: "/reference/colors",
            },
          ],
        },
      ],
    }),
    solidJs(),
  ],
});
