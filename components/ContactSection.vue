<template>
    <section
        id="contact"
        class="p-10 m-10 rounded-2xl bg-[#feffff] dark:bg-[#353544] mx-5 md:max-w-5xl md:mx-auto overflow-hidden"
    >
        <h2 class="text-3xl font-bold text-center">{{ $t("contact.title") }}</h2>
        <p class="py-5 text-xl text-center">
            {{ $t("contact.description") }}
        </p>
        <ul class="flex justify-center gap-4">
            <li>
                <a href="https://github.com/Fatma-Tawfeek" target="_blank"
                    ><i
                        class="pi pi-github hover:-translate-y-1 ease-in duration-200"
                        style="font-size: 1.5rem"
                    ></i
                ></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/fatmatawfeek/" target="_blank"
                    ><i
                        class="pi pi-linkedin hover:-translate-y-1 ease-in duration-200"
                        style="font-size: 1.5rem"
                    ></i
                ></a>
            </li>
            <li>
                <a href="https://wa.me/201017387318" target="_blank"
                    ><i
                        class="pi pi-whatsapp hover:-translate-y-1 ease-in duration-200"
                        style="font-size: 1.5rem"
                    ></i
                ></a>
            </li>
            <li>
                <a href="mailto:fatmatawfeek97@gmail.com" target="_blank"
                    ><i
                        class="pi pi-envelope hover:-translate-y-1 ease-in duration-200"
                        style="font-size: 1.5rem"
                    ></i
                ></a>
            </li>
        </ul>
    </section>
</template>

<script setup></script>

<style scoped></style>
