<template>
    <div class="card dark:text-white">
        <Menubar :model="items">
            <template #start>
                <img src="/fatma-tawfeek-logo.png" alt="vue" class="w-10" />
            </template>
            <template #item="{ item, props }">
                <NuxtLink :to="item.to" v-ripple v-bind="props.action">
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </template>
            <template #end>
                <!-- dark mode -->
                <dark-mode-switch />
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: "الرئيسية",
        icon: "pi pi-home",
        to: "/",
    },
    {
        label: "نبذة عني",
        icon: "pi pi-user",
        to: "#about",
    },
    {
        label: "المهارات",
        icon: "pi pi-search",
        to: "#skills",
    },
    {
        label: "المشاريع",
        icon: "pi pi-users",
        to: "#projects",
    },
    {
        label: "التواصل",
        icon: "pi pi-users",
        to: "#contact",
    },
]);
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

:deep(.p-menubar-end:dir(rtl)) {
    margin-right: 0;
}
</style>
