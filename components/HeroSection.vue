<template>
    <section>
        <div class="container mx-auto py-10">
            <div class="flex flex-col md:flex-row justify-around items-center gap-5">
                <!-- text -->
                <div class="basis-1/2 order-2 md:order-1 text-center md:text-right">
                    <h1 class="text-4xl font-bold md:text-5xl">
                        أهلًا وسهلًا، أنا
                        <span
                            class="gradient bg-clip-text text-transparent font-extrabold text-shadow-md"
                            >فاطمة توفيق</span
                        >
                    </h1>
                    <p class="my-5 text-xl md:text-2xl/relaxed">
                        مطوّرة واجهات أمامية متخصصة في
                        <strong class="gradient-text">Vue.js</strong>، و<strong
                            class="gradient-text"
                            >Nuxt</strong
                        >، و<strong class="gradient-text">Tailwind CSS</strong>. أعمل على إنشاء
                        تطبيقات ويب متجاوبة، سريعة، وسهلة الاستخدام، وأسعى دائمًا لتقديم تجربة
                        استخدام أنيقة ومريحة للمستخدم.
                    </p>
                    <div class="flex gap-3 justify-center md:justify-start items-center">
                        <NuxtLink
                            to="/Fatma-Tawfeek-Frontend-Developer-Vue.pdf"
                            target="_blank"
                            class="btn-primary"
                        >
                            تحميل السيرة الذاتية
                        </NuxtLink>
                        <NuxtLink to="/projects" class="btn-primary"> تواصل معي </NuxtLink>
                    </div>
                </div>
                <!-- image -->
                <div class="relative basis-1/2 order-1 md:order-2">
                    <img
                        src="~/assets/images/vue.png"
                        alt="vue"
                        class="float-animate absolute top-0 left-20 w-[20%] drop-shadow-md z-10"
                    />
                    <img
                        src="~/assets/images/nuxt.png"
                        alt="nuxt"
                        class="float-animate absolute bottom-0 right-20 w-[20%] drop-shadow-md z-10"
                    />
                    <div
                        class="gradient rounded-2xl overflow-hidden flex justify-center items-center w-3/4 mx-auto drop-shadow-md relative -z-1"
                    >
                        <img
                            src="~/assets/images/hero-img.png"
                            alt="vue.js"
                            class="w-[80%] drop-shadow-lg"
                        />
                    </div>
                    <img
                        src="~/assets/images/tailwind.png"
                        alt="tailwind"
                        class="float-animate absolute bottom-0 left-10 w-[20%] drop-shadow-md z-10"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
.float-animate {
    animation: float 6s ease-in-out infinite;
    transform: translatey(0px);
}
@keyframes float {
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-20px);
    }
    100% {
        transform: translatey(0px);
    }
}
</style>
