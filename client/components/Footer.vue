<script setup>
const date = new Date();
import { NAV_LINKS, SOCMED } from "~/data/utils.ts";
</script>

<template>
  <footer class="px-4">
    <div class="container bg-[#F5F7F9] rounded-3xl mt-10">
      <div class="body-container">
        <img
          class="mx-auto"
          src="~/assets/images/logo.svg"
          alt="I am Rauliqbal, a Front-End Developer and UI/UX Designer"
        />
        <hr class="my-10" />
        <div class="grid gap-10 lg:grid-cols-2">
          <div>
            <h4 class="mb-2 text-3xl font-viga lg:text-5xl lg:mb-4">
              Have a project in mind?
            </h4>
            <NuxtLink
              to="/contact"
              class="text-3xl font-viga lg:text-5xl text-primary hover:underline"
              >Le’ts get to work.</NuxtLink
            >
          </div>
          <div class="grid gap-8 lg:grid-cols-2">
            <div class="text-center md:text-left">
              <h6 class="mb-6 font-medium uppercase">usefull links</h6>
              <div class="flex flex-col gap-4">
                <NuxtLink
                  v-for="link in NAV_LINKS.slice(1, 5)"
                  :key="link.id"
                  :to="link.url"
                  class="text-sm text-gray-500 capitalize transition-all hover:text-gray-900"
                  >{{ link.title }}</NuxtLink
                >
              </div>
            </div>
            <div class="text-center md:text-left">
              <h6 class="mb-6 font-medium uppercase">another project</h6>
              <div class="flex flex-col gap-4">
                <NuxtLink
                  to="https://azuracoder.my.id"
                  target="blank"
                  class="text-sm text-gray-500 transition-all hover:text-gray-900"
                  >AzuraCoder</NuxtLink
                >
                <NuxtLink
                  to="https://azurakit.vercel.app"
                  target="blank"
                  class="text-sm text-gray-500 transition-all hover:text-gray-900"
                  >AzuraKIT</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
        <hr class="my-10" />

        <div class="flex flex-col gap-6 items-center py-6 bg-white rounded-2xl">
          <div class="flex gap-8 justify-center items-center">
            <NuxtLink
              v-for="socmed in SOCMED"
              :key="socmed.id"
              :to="socmed.url"
              :aria-label="'Read more ' + socmed.title"
              target="_blank"
              class="transition duration-300 ease-in-out text-slate-600 hover:text-primary"
            >
              <i :class="'text-2xl ai-' + socmed.title + '-fill'"></i>
            </NuxtLink>
          </div>
          <p class="text-sm text-center text-gray-500">
            &copy; 2021 - {{ date.getFullYear() }}, Rauliqbal💻. Created by
            GoodMood😊
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
