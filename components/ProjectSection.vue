<template>
    <section class="py-10 px-5 text-center" id="projects">
        <div>
            <h2 class="text-3xl font-bold mb-8">مشاريعي</h2>
            <Tabs value="0">
                <TabList>
                    <div class="flex flex-wrap justify-center items-center gap-5">
                        <Tab value="0">الكل</Tab>
                        <Tab value="1">Vue.js</Tab>
                        <Tab value="2">Nuxt</Tab>
                        <Tab value="3">Tailwind</Tab>
                        <Tab value="4">WordPress</Tab>
                    </div>
                </TabList>
                <TabPanels class="mt-5">
                    <TabPanel value="0">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
                            <!-- start-medation -->
                            <div
                                class="bg-[#CDE5F5] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/start-medation.png"
                                        alt="start-medation"
                                        class="w-full h-[150px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://startmediation.co.uk/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">موقع Start Medation</h3>
                                <p>
                                    موقع تعريفي لمنظمة بريطانية تقدّم حلولًا ودية للنزاعات الأسرية
                                    والمجتمعية قبل اللجوء إلى المحكمة، مع نماذج للتقديم والتواصل.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-cyan-700 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >WordPress</span
                                    >
                                    <span
                                        class="bg-violet-500 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Divi</span
                                    >
                                </div>
                            </div>
                            <!-- elhabib-factory -->
                            <div
                                class="bg-[#EADCF8] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/elhabib-factory.png"
                                        alt="start-medation"
                                        class="w-full h-[150px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://elhabib-factory.vercel.app/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">
                                    موقع مصنع الحبيب للزجاج والالمونيوم
                                </h3>
                                <p>
                                    موقع تعريفي لمصنع سعودي متخصص في أعمال الزجاج والألمنيوم، يعرض
                                    خدماته ومنتجاته ووسائل التواصل.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-green-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Nuxt</span
                                    >
                                    <span
                                        class="bg-sky-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Tailwind</span
                                    >
                                    <span
                                        class="bg-emerald-500 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >PrimeVue</span
                                    >
                                </div>
                            </div>
                            <!-- social-media-app -->
                            <div
                                class="bg-[#FAD2D2] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/social-media-app.png"
                                        alt="social-media-app"
                                        class="w-full h-[150px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://social-app-vue.vercel.app/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                        <NuxtLink
                                            to="https://github.com/Fatma-Tawfeek/social-app-vue"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                GitHub
                                                <i
                                                    class="pi pi-github"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">تطبيق سوشيال ميديا</h3>
                                <p>
                                    تطبيق سوشيال ميديا تجريبي، يوفّر خصائص التسجيل والدخول، عرض
                                    المنشورات، وإمكانية إضافة وتعديل وحذف المنشورات .
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-green-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Nuxt</span
                                    >
                                    <span
                                        class="bg-sky-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Tailwind</span
                                    >
                                    <span
                                        class="bg-cyan-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Vuetify</span
                                    >
                                </div>
                            </div>
                            <!-- burger-resturant -->
                            <div
                                class="bg-[#DFF6F0] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/burger-resturant.png"
                                        alt="burger-resturant"
                                        class="w-full h-[150px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://burger-website-talwindcss.netlify.app/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                        <NuxtLink
                                            to="https://github.com/Fatma-Tawfeek/burger-website-tailwindcss"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                GitHub
                                                <i
                                                    class="pi pi-github"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">صفحة هبوط لمطعم برجر</h3>
                                <p>
                                    صفحة هبوط لمطعم برجر من تصميمي، تعرض قائمة الطعام، المراجعات،
                                    العروض الخاصة، ومعلومات التواصل والموقع.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-sky-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Tailwind</span
                                    >
                                </div>
                            </div>
                            <!-- msis -->
                            <div
                                class="bg-[#DFF6F0] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/msis.png"
                                        alt="start-medation"
                                        class="w-full rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink to="https://msic.sa/" target="_blank" class="tag">
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">
                                    موقع مدارس نجمة الالفية العالمية
                                </h3>
                                <p>
                                    موقع تعريفي لمدارس دولية بالرياض، يعرض المراحل التعليمية،
                                    الأنشطة المختلفة، وصور من داخل المدرسة.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-cyan-700 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >WordPress</span
                                    >
                                </div>
                            </div>
                            <!-- perfect solution -->
                            <div
                                class="bg-[#FAD2D2] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/perfect-solution-agency.png"
                                        alt="مؤسسة الحل الامثل"
                                        class="w-full h-[160px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://psmarketing.com.sa/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">
                                    موقع وكالة الحل الأمثل للتسويق
                                </h3>
                                <p>
                                    موقع تعريفي لوكالة تسويق الكتروني سعودية، يعرض خدماتها الإبداعية
                                    وأعمالها السابقة ووسائل التواصل معها.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-cyan-700 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >WordPress</span
                                    >
                                    <span
                                        class="bg-rose-800 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Elementor</span
                                    >
                                </div>
                            </div>
                            <!-- ecommerce vue -->
                            <div
                                class="bg-[#CDE5F5] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/ecommerce-vue.png"
                                        alt="Ecommerce Vue"
                                        class="w-full h-[160px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://ecommerce-vue-lime.vercel.app/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                        <NuxtLink
                                            to="https://github.com/Fatma-Tawfeek/ecommerce-vue"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                GitHub
                                                <i
                                                    class="pi pi-github"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">موقع تجارة الكترونية</h3>
                                <p>
                                    موقع تجارة إلكترونية تجريبي، يحتوي على خصائص التسجيل وتسجيل
                                    الدخول، وسلّة مشتريات، ودفع إلكتروني، ونظام بحث متقدم.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-emerald-700 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Vue.js</span
                                    >
                                    <span
                                        class="bg-sky-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Tailwind</span
                                    >
                                    <span
                                        class="bg-blue-700 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Flowbite</span
                                    >
                                </div>
                            </div>
                            <!-- mosques app -->
                            <div
                                class="bg-[#EADCF8] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/mosques-app.png"
                                        alt="mosques-app"
                                        class="w-full h-[160px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://mosques-landing-page.vercel.app/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">
                                    صفحة هبوط لتطبيق مساجد
                                </h3>
                                <p>
                                    صفحة هبوط لتطبيق يربط المسلمين بالمساجد في السعودية، ويعرض
                                    معلومات عنها وخدماتها ويسهّل الوصول إليها.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-sky-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Tailwind</span
                                    >
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="1">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
                            <!-- ecommerce vue -->
                            <div
                                class="bg-[#CDE5F5] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/ecommerce-vue.png"
                                        alt="Ecommerce Vue"
                                        class="w-full h-[160px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://ecommerce-vue-lime.vercel.app/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                        <NuxtLink
                                            to="https://github.com/Fatma-Tawfeek/ecommerce-vue"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                GitHub
                                                <i
                                                    class="pi pi-github"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">موقع تجارة الكترونية</h3>
                                <p>
                                    موقع تجارة إلكترونية تجريبي، يحتوي على خصائص التسجيل وتسجيل
                                    الدخول، وسلّة مشتريات، ودفع إلكتروني، ونظام بحث متقدم.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-emerald-700 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Vue.js</span
                                    >
                                    <span
                                        class="bg-sky-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Tailwind</span
                                    >
                                    <span
                                        class="bg-blue-700 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Flowbite</span
                                    >
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
                            <!-- elhabib-factory -->
                            <div
                                class="bg-[#EADCF8] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/elhabib-factory.png"
                                        alt="start-medation"
                                        class="w-full h-[150px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://elhabib-factory.vercel.app/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">
                                    موقع مصنع الحبيب للزجاج والالمونيوم
                                </h3>
                                <p>
                                    موقع تعريفي لمصنع سعودي متخصص في أعمال الزجاج والألمنيوم، يعرض
                                    خدماته ومنتجاته ووسائل التواصل.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-green-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Nuxt</span
                                    >
                                    <span
                                        class="bg-sky-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Tailwind</span
                                    >
                                    <span
                                        class="bg-emerald-500 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >PrimeVue</span
                                    >
                                </div>
                            </div>
                            <!-- social-media-app -->
                            <div
                                class="bg-[#FAD2D2] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/social-media-app.png"
                                        alt="social-media-app"
                                        class="w-full h-[150px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://social-app-vue.vercel.app/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                        <NuxtLink
                                            to="https://github.com/Fatma-Tawfeek/social-app-vue"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                GitHub
                                                <i
                                                    class="pi pi-github"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">تطبيق سوشيال ميديا</h3>
                                <p>
                                    تطبيق سوشيال ميديا تجريبي، يوفّر خصائص التسجيل والدخول، عرض
                                    المنشورات، وإمكانية إضافة وتعديل وحذف المنشورات .
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-green-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Nuxt</span
                                    >
                                    <span
                                        class="bg-sky-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Tailwind</span
                                    >
                                    <span
                                        class="bg-cyan-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Vuetify</span
                                    >
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="3">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
                            <!-- burger-resturant -->
                            <div
                                class="bg-[#DFF6F0] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/burger-resturant.png"
                                        alt="burger-resturant"
                                        class="w-full h-[150px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://burger-website-talwindcss.netlify.app/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                        <NuxtLink
                                            to="https://github.com/Fatma-Tawfeek/burger-website-tailwindcss"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                GitHub
                                                <i
                                                    class="pi pi-github"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">صفحة هبوط لمطعم برجر</h3>
                                <p>
                                    صفحة هبوط لمطعم برجر من تصميمي، تعرض قائمة الطعام، المراجعات،
                                    العروض الخاصة، ومعلومات التواصل والموقع.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-sky-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Tailwind</span
                                    >
                                </div>
                            </div>
                            <!-- mosques app -->
                            <div
                                class="bg-[#EADCF8] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/mosques-app.png"
                                        alt="mosques-app"
                                        class="w-full h-[160px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://mosques-landing-page.vercel.app/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">
                                    صفحة هبوط لتطبيق مساجد
                                </h3>
                                <p>
                                    صفحة هبوط لتطبيق يربط المسلمين بالمساجد في السعودية، ويعرض
                                    معلومات عنها وخدماتها ويسهّل الوصول إليها.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-sky-400 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Tailwind</span
                                    >
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="4">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
                            <!-- start-medation -->
                            <div
                                class="bg-[#CDE5F5] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/start-medation.png"
                                        alt="start-medation"
                                        class="w-full h-[150px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://startmediation.co.uk/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">موقع Start Medation</h3>
                                <p>
                                    موقع تعريفي لمنظمة بريطانية تقدّم حلولًا ودية للنزاعات الأسرية
                                    والمجتمعية قبل اللجوء إلى المحكمة، مع نماذج للتقديم والتواصل.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-cyan-700 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >WordPress</span
                                    >
                                    <span
                                        class="bg-violet-500 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Divi</span
                                    >
                                </div>
                            </div>
                            <!-- msis -->
                            <div
                                class="bg-[#DFF6F0] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/msis.png"
                                        alt="start-medation"
                                        class="w-full rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink to="https://msic.sa/" target="_blank" class="tag">
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">
                                    موقع مدارس نجمة الالفية العالمية
                                </h3>
                                <p>
                                    موقع تعريفي لمدارس دولية بالرياض، يعرض المراحل التعليمية،
                                    الأنشطة المختلفة، وصور من داخل المدرسة.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-cyan-700 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >WordPress</span
                                    >
                                </div>
                            </div>
                            <!-- perfect solution -->
                            <div
                                class="bg-[#FAD2D2] dark:bg-[#353544] text-right rounded-2xl p-5 flex flex-col justify-between items-center gap-3 group hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div class="relative overflow-hidden">
                                    <img
                                        src="~/assets/images/projects/perfect-solution-agency.png"
                                        alt="مؤسسة الحل الامثل"
                                        class="w-full h-[160px] rounded-2xl"
                                        loading="lazy"
                                    />
                                    <div
                                        class="flex justify-start gap-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:bottom-2 transition-all ease-in-out duration-300"
                                    >
                                        <NuxtLink
                                            to="https://psmarketing.com.sa/"
                                            target="_blank"
                                            class="tag"
                                        >
                                            <span>
                                                الرابط
                                                <i
                                                    class="pi pi-external-link"
                                                    style="font-size: 0.5rem"
                                                ></i
                                            ></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <h3 class="text-center font-bold text-lg">
                                    موقع وكالة الحل الأمثل للتسويق
                                </h3>
                                <p>
                                    موقع تعريفي لوكالة تسويق الكتروني سعودية، يعرض خدماتها الإبداعية
                                    وأعمالها السابقة ووسائل التواصل معها.
                                </p>
                                <div class="flex gap-3 border-t-[1px] border-gray-400 pt-2 w-full">
                                    <span
                                        class="bg-cyan-700 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >WordPress</span
                                    >
                                    <span
                                        class="bg-rose-800 px-2 py-1 rounded-full text-xs shadow-md text-white"
                                        >Elementor</span
                                    >
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
:deep(.p-tab) {
    font-size: 1.5rem !important;
    padding: 0.5rem !important;
    font-weight: 500 !important;
    border-radius: 0.75rem !important;
    border: none !important;
}

:deep(.p-tabpanels) {
    background-color: transparent !important;
}

:deep(.p-tab-active) {
    background-image: linear-gradient(to right, #42b883, #35495e) !important;
    color: white !important;
    font-size: 1.5rem !important;
    padding: 0.5rem !important;
    border-radius: 0.75rem !important;
}

:deep(.p-tablist-tab-list) {
    border: none !important;
    justify-content: center !important;
    background-color: transparent !important;
    display: flex !important;
}

:deep(.p-tablist-active-bar) {
    background-color: transparent !important;
}
</style>
