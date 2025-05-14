// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@vueuse/nuxt"],
    css: ["~/assets/css/main.css"],
    app: {
        head: {
            title: "Fatma Tawfeek - فاطمة توفيق",
            htmlAttrs: {
                lang: "ar",
                dir: "rtl",
            },
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",
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
