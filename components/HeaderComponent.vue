<template>
    <div class="card">
        <Menubar :model="items" class="justify-center">
            <template #start> </template>
            <template #item="{ item, props }">
                <a v-ripple v-bind="props.action">
                    <span>{{ item.label }}</span>
                </a>
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
    },
    {
        label: "المهارات",
        icon: "pi pi-search",
    },
    {
        label: "المشاريع",
        icon: "pi pi-users",
    },
    {
        label: "التواصل",
        icon: "pi pi-users",
    },
]);
</script>

<style scoped>
:deep(.p-menubar) {
    background-color: transparent !important;
    border: none !important;
}

:deep(.p-menubar-item-link) {
    font-size: 20px !important;
}
</style>
