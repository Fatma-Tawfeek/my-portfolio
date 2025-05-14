<template>
    <button class="btn" @click="toggleDark()">
        <i class="pi pi-moon" style="font-size: 1.5rem" v-if="isDark"></i>
        <i class="pi pi-sun" style="font-size: 1.5rem" v-else></i>
    </button>
</template>

<script setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped></style>
