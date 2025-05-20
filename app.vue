<template>
    <Body
        class="bg-secondary text-[#34495e] dark:bg-darkSecondary dark:text-white"
        :class="[dir === 'rtl' ? 'font-almarai' : 'font-outfit']"
        :dir="dir"
    />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <!-- Scroll Up Button -->
    <ScrollUpBtn />
</template>

<script setup>
import "primeicons/primeicons.css";
const { localeProperties } = useI18n();
const dir = computed(() => {
    return localeProperties.value.dir;
});
</script>
