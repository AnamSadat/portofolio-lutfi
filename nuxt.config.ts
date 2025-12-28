// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/assets/css/main.css"],
  components: [
    {
      path: "~/components/atoms",
      pathPrefix: false,
    },
    {
      path: "~/components/molecules",
      pathPrefix: false,
    },
    {
      path: "~/components/organisms",
      pathPrefix: false,
    },
  ],
  modules: ["@primevue/nuxt-module", "@nuxt/icon"],
  primevue: {
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: ".dark",
          cssLayer: false,
        },
      },
    },
  },
  icon: {
    serverBundle: "remote",
    mode: "svg",
  },
  app: {
    head: {
      title: "Influencer & Penulis | Portfolio",
      meta: [
        {
          name: "description",
          content:
            "Influencer, Penulis, dan Content Creator - Mengubah ide menjadi kata-kata yang menginspirasi",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
      style: [
        {
          // Critical CSS to prevent FOUC
          innerHTML: `
            html, body { 
              background-color: #0f172a; 
              color: #f8fafc; 
              font-family: 'Inter', system-ui, sans-serif;
            }
          `,
        },
      ],
    },
  },
  features: {
    inlineStyles: true,
  },
});
