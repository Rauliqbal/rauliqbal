<script setup>
import { NAV_LINKS, SOCMED } from "~/data/utils";

onMounted(() => {
  window.addEventListener("scroll", function () {
    let nav = this.document.querySelector("nav");

    nav.classList.toggle("bg-white", window.scrollY > 0);
    nav.classList.toggle("shadow-lg", window.scrollY > 0);
  });
});

const showHide = function () {
  document.getElementById("hamburger").checked = false;
};
</script>
<template>
  <nav
    class="container fixed inset-x-0 top-2 z-40 p-6 rounded-2xl transition duration-700 md:top-3"
  >
    <div class="flex justify-between items-center">
      <NuxtLink to="/">
        <img class="h-8 md:h-auto" src="~/assets/images/logo.svg" alt="" />
      </NuxtLink>
      <div>
        <input class="hidden peer" type="checkbox" id="hamburger" />
        <label class="z-50 cursor-pointer nav-btn" for="hamburger">
          <!-- <img src="~/assets/images/hamburger-button.svg" alt="" /> -->
          <div class="">
            <div
              class="m-[6px] w-9 top-bar h-1 rounded-full bg-black transition-all duration-300"
            ></div>
            <div
              class="m-[6px] w-9 mid-bar h-1 rounded-full bg-black transition-all duration-300"
            ></div>
            <div
              class="m-[6px] w-9 bot-bar h-1 rounded-full bg-black transition-all duration-300"
            ></div>
          </div>
        </label>
        <div class="wrapper">
          <div class="flex flex-col items-center w-screen h-screen md:flex-row">
            <div class="hidden absolute md:block md:-left-20 lg:left-0">
              <p
                class="text-9xl font-bold text-gray-100 -rotate-90 lg:text-gray-200"
              >
                MENU
              </p>
            </div>
            <div
              class="flex relative justify-center items-center h-[90%] md:w-4/6"
            >
              <div class="flex relative flex-col justify-between">
                <!-- Menu -->
                <div class="flex flex-col gap-4 items-center px-10 group">
                  <NuxtLink
                    class="text-4xl md:text-5xl font-semibold tracking-wide uppercase group-hover:text-gray-300 hover:scale-110 hover:my-4 hover:!text-slate-900 transition-all duration-500 ease-in-out"
                    :to="link.url"
                    :key="link.id"
                    v-for="link in NAV_LINKS"
                    @click="showHide()"
                    >{{ link.title }}
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div
              class="hidden md:flex inset-0 pl-10 items-center w-full h-[10%] md:w-2/6 md:h-full bg-slate-100"
            >
              <div class="grid grid-cols-2 gap-y-2 gap-4 w-80 md:grid-cols-1">
                <div class="flex flex-col flex-start">
                  <h4 class="text-2xl text-gray-400 uppercase font-viga">
                    i develop web applications and user interfaces.
                  </h4>
                </div>

                <!-- Social Media -->

                <div class="flex flex-col mt-8 flex-start">
                  <h4
                    class="text-xl tracking-wide uppercase text-gray-400/60 font-viga"
                  >
                    Social Media
                  </h4>
                  <div class="flex flex-col gap-2 mt-3">
                    <a
                      class="text-gray-500 capitalize transition-all hover:text-gray-900"
                      :href="item.url"
                      v-for="item in SOCMED"
                      :key="item.id"
                      >{{ item.title }}</a
                    >
                  </div>
                </div>

                <div class="flex flex-col mt-8 flex-start">
                  <h4
                    class="text-xl tracking-wide uppercase text-gray-400/60 font-viga"
                  >
                    CONTACTS
                  </h4>
                  <div class="flex flex-col gap-2 mt-3">
                    <a
                      class="font-medium text-gray-400 transition hover:text-primary"
                      href="mailto:muhamadrauliqbal.13@gmail.com?subject=I%20want%20to%20make%20something%20cool"
                      >muhamadrauliqbal.13@gmail.com</a
                    >
                    <a
                      class="font-medium text-gray-400 transition hover:text-primary"
                      href="#"
                      >+62 896 7310 2977</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
