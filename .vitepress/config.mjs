import { defineConfig } from "vitepress";

const pageSuffixes = [
  "01-overview-and-concepts",
  "02-how-tos-and-workflows",
  "03-advanced-and-customization",
  "04-troubleshooting-and-faqs",
];

const pageLabels = [
  "Overview & Concepts",
  "How-tos & Workflows",
  "Advanced & Customization",
  "Troubleshooting & FAQs",
];

function moduleGroup(prefix, label) {
  return {
    text: label,
    collapsed: true,
    items: pageSuffixes.map((suffix, i) => ({
      text: pageLabels[i],
      link: `/${prefix}-${suffix}`,
    })),
  };
}

export default defineConfig({
  title: "Lodestone Docs",
  description: "Product documentation for Lodestone",
  srcDir: ".",
  outDir: ".vitepress/dist",
  appearance: false,

  head: [
    [
      "link",
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],

  themeConfig: {
    logo: { src: "/logo-dark.png", alt: "Lodestone" },
    siteTitle: false,

    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "Introduction to Lodestone",
            link: "/00-introduction-to-lodestone",
          },
        ],
      },
      moduleGroup("dashboard", "Dashboard"),
      moduleGroup("backlog", "Backlog"),
      moduleGroup("roadmaps", "Roadmaps"),
      moduleGroup("releases", "Releases"),
      moduleGroup("goals", "Goals"),
      moduleGroup("strategy", "Strategy"),
      moduleGroup("extracts", "Extracts"),
      moduleGroup("documents", "Documents"),
      moduleGroup("competitive-intel", "Competitive Intelligence"),
      moduleGroup("feature-auctions", "Feature Auctions"),
      moduleGroup("financial-forecast", "Financial Forecast"),
      moduleGroup("bento-grids", "Bento Grids"),
      moduleGroup("copilot", "Copilot"),
      moduleGroup("integrations", "Integrations"),
      moduleGroup("settings", "Settings"),
      moduleGroup("api", "API"),
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Product documentation for Lodestone.",
      copyright: "© 2026 Lodestone PM",
    },
  },
});
