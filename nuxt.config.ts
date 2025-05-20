// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@vueuse/nuxt", "@nuxtjs/i18n"],
    i18n: {
        defaultLocale: "en",
        locales: [
            { code: "en", name: "English", file: "en.json", dir: "ltr" },
            { code: "ar", name: "عربي", file: "ar.json", dir: "rtl" },
        ],
    },
    css: ["~/assets/css/main.css"],
    app: {
        head: {
            title: "Fatma Tawfeek's Portfolio - فاطمة توفيق",
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
                },
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/fatma-tawfeek-logo.png",
                },
            ],
        },
    },
    /* tailwindcss*/
    tailwindcss: {
        config: {
            theme: {
                extend: {
                    colors: {
                        primary: "#8ddad0",
                        secondary: "#fcf8f4",
                        darkSecondary: "#1E1E2F",
                    },
                    fontFamily: {
                        almarai: ["Almarai", "sans-serif"],
                        inter: ["Outfit", "sans-serif"],
                    },
                },
                container: {
                    center: true,
                    padding: "2rem",
                },
            },
            darkMode: "class",
        },
    },
    /* primevue*/
    primevue: {
        options: {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: ".dark",
                },
            },
        },
    },
});
