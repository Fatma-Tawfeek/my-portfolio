<template>
    <a
        href="#"
        class="fixed left-4 bottom-4 opacity-0 gradient shadow-sm inline-block w-10 h-10 flex justify-center items-center rounded-full text-lg text-blackColor z-50 hover:-translate-y-1 ease-in duration-200"
        id="scroll-up"
        ><i class="pi pi-arrow-up" style="color: #fff"></i
    ></a>
</template>

<script setup>
onMounted(() => {
    const scrollUp = document.getElementById("scroll-up");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 250) {
            scrollUp.classList.replace("opacity-0", "opacity-100");
        } else {
            scrollUp.classList.replace("opacity-100", "opacity-0");
        }
    });
    scrollUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
</script>

<style lang="scss" scoped></style>
