<template>
    <section class="py-20 px-5 text-center" id="skills">
        <div class="container">
            <h2 class="text-3xl font-bold mb-4">المهارات</h2>
            <Carousel
                :value="skills"
                :numVisible="5"
                :numScroll="1"
                :responsiveOptions="responsiveOptions"
                circular
                :autoplayInterval="2000"
                :show-indicators="false"
                :show-navigators="false"
            >
                <template #item="slotProps">
                    <div>
                        <img
                            :src="`images/${slotProps.data.image}`"
                            :alt="slotProps.data.name"
                            class="h-12 mx-auto"
                            loading="lazy"
                        />
                    </div>
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script setup>
const skills = ref([
    {
        name: "Vue.js",
        image: "vue.png",
    },
    {
        name: "Nuxt.js",
        image: "nuxt.png",
    },
    {
        name: "Tailwind CSS",
        image: "tailwind.png",
    },
    {
        name: "PrimeVue",
        image: "primevue.png",
    },
    {
        name: "Vuetify",
        image: "vuetify.png",
    },
    {
        name: "Bootstrap",
        image: "bootstrap.png",
    },
    {
        name: "WordPress",
        image: "wordpress.png",
    },
    {
        name: "Laravel",
        image: "laravel.png",
    },
    {
        name: "Firebase",
        image: "firebase.png",
    },
]);
const responsiveOptions = ref([
    {
        breakpoint: "1400px",
        numVisible: 5,
        numScroll: 1,
    },
    {
        breakpoint: "1199px",
        numVisible: 5,
        numScroll: 1,
    },
    {
        breakpoint: "767px",
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: "575px",
        numVisible: 1,
        numScroll: 1,
    },
]);
</script>

<style scoped>
:deep(.p-carousel) {
    border-radius: 1rem;
    background-color: #feffff;
    padding: 2rem;
}
</style>
