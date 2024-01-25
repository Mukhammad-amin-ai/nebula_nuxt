export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nebula",
      meta: [
        {
          name: "description",
          content: "Nebula admin project",
        },

        {
          property: "og:image",
          content: "./favicon.ico",
        },
      ],
    },
  },
  css: ["@/assets/style/style.css", "@/assets/style/font.css"],
  runtimeConfig: {
    public: {
      API_BASE_URL:
        process.env.API_BASE_URL ||
        "https://tranquil-everglades-96249-a8ea8630be21.herokuapp.com/api/v1/adminpanel/",
    },
  },
});
