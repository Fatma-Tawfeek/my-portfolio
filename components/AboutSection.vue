<template>
    <section
        id="about"
        class="relative p-10 mx-10 rounded-2xl bg-[#feffff] dark:bg-[#353544] mx-5 md:max-w-5xl md:mx-auto overflow-hidden"
    >
        <!-- vue logo -->
        <div
            class="absolute -top-10 -right-20 p-10 bg-green-200 rounded-full w-[350px] h-[350px] flex justify-end items-end opacity-30"
        >
            <img src="~/assets/images/vue.png" alt="vue" class="w-[80%] opacity-20" />
        </div>
        <h2 class="text-3xl font-bold text-center mb-4">{{ $t("about.title") }}</h2>
        <div class="relative text-lg z-10">
            <p class="mb-3">
                {{ $t("about.description1") }}
            </p>
            <p class="mb-3">
                {{ $t("about.description2") }}
            </p>
            <p class="mb-3">
                {{ $t("about.description3") }}
            </p>
            <p class="mb-3">
                {{ $t("about.description4") }}
            </p>
        </div>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
