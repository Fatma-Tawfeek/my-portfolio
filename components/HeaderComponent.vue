<template>
    <div class="card dark:text-white">
        <Menubar :model="items">
            <template #start>
                <NuxtLink to="/">
                    <img src="/fatma-tawfeek-logo.png" alt="vue" class="w-10" />
                </NuxtLink>
            </template>
            <template #item="{ item, props }">
                <NuxtLink :to="item.to" v-ripple v-bind="props.action">
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </template>
            <template #end>
                <div class="flex gap-3">
                    <!-- dark mode -->
                    <dark-mode-switch />
                    <!-- language switch -->
                    <button @click="switchLocale" class="tag">
                        {{ switchLocaleName }}
                    </button>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
const { locales, setLocale, t, localeProperties } = useI18n();

// زرار يبدل بين العربية والإنجليزية
const switchLocale = () => {
    const newLocale = localeProperties.value.code === "en" ? "ar" : "en";
    setLocale(newLocale);
};

// نجيب اسم اللغة التانية (اللي هتظهر في الزر)
const switchLocaleName = computed(() => {
    return locales.value.find((l) => l.code !== localeProperties.value.code)?.name;
});
const items = ref([]);

watchEffect(() => {
    items.value = [
        {
            label: t("header.home"),
            icon: "pi pi-home",
            to: "/",
        },
        {
            label: t("header.about"),
            icon: "pi pi-user",
            to: "#about",
        },
        {
            label: t("header.skills"),
            icon: "pi pi-search",
            to: "#skills",
        },
        {
            label: t("header.projects"),
            icon: "pi pi-users",
            to: "#projects",
        },
        {
            label: t("header.contact"),
            icon: "pi pi-users",
            to: "#contact",
        },
    ];
});
</script>

<style scoped>
:deep(.p-menubar) {
    background-color: transparent !important;
    border: none !important;
    justify-content: space-between !important;
}

:deep(.p-menubar-item-link) {
    font-size: 20px !important;
}
</style>
