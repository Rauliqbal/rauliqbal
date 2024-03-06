<script setup>
import { NAV_LINKS } from "~/data/utils";



onMounted(() => {
  window.addEventListener('scroll', function () {
    let nav = this.document.querySelector("nav");

    nav.classList.toggle('bg-white', window.scrollY > 0)
    nav.classList.toggle('shadow-lg', window.scrollY > 0)
  })
})

const showHide = function() {
      document.getElementById('hamburger').checked =false 
    }





</script>
<template>
  <nav class="container fixed z-50 inset-x-0 top-2 md:top-3 p-6 rounded-2xl transition duration-700">
    <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <img class="h-8 md:h-auto" src="~/assets/images/logo.svg" alt="" />
        </NuxtLink>
        <div>
          <input class="hidden peer" type="checkbox" id="hamburger" />
          <label class="nav-btn z-50 cursor-pointer" for="hamburger">
            <img src="~/assets/images/hamburger-button.svg" alt="" />
          </label>
          <div class="wrapper">
            <div class="flex justify-between relative">
              <h6 class="hidden md:block text-9xl font-bold text-gray-200 -rotate-90 absolute lg:-left-[24.5rem] -left-[22.5rem] translate-y-[4.5rem]">MENU</h6>
              <div class="flex flex-col items-center gap-6 group px-10">
                <NuxtLink
                  class="text-3xl font-semibold tracking-wide uppercase group-hover:text-gray-300 hover:!text-slate-900 transition duration-500 ease-out"
                  :to="link.url"
                  v-for="link in NAV_LINKS"
                  @click="showHide()"
                  >{{ link.title }}</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
  </nav>
</template>
