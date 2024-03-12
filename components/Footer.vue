<script setup>
const date = new Date();
import { SOCMED } from "~/data/utils.ts";
</script>

<template>
  <footer class="container bg-[#F5F7F9] rounded-3xl mt-10">
    <div class="body-container">
      <img
        class="mx-auto"
        src="~/assets/images/logo.svg"
        alt="I am Rauliqbal, a Front-End Developer and UI/UX Designer"
      />
      <hr class="my-10" />
      <div class="grid lg:grid-cols-2 gap-10">
        <div>
          <h4 class="font-viga text-3xl lg:text-5xl mb-2 lg:mb-4">
            Have a project in mind?
          </h4>
          <NuxtLink
            to="/"
            class="font-viga text-3xl lg:text-5xl text-primary hover:underline"
            >Le’ts get to work.</NuxtLink
          >
        </div>
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="text-center md:text-left">
            <h6 class="font-medium mb-6 uppercase">usefull links</h6>
            <div class="flex flex-col gap-4">
              <NuxtLink
                to="/about"
                class="text-sm text-gray-500 hover:text-gray-900 transition-all"
                >About</NuxtLink
              >
              <NuxtLink
                to="/project"
                class="text-sm text-gray-500 hover:text-gray-900 transition-all"
                >Project</NuxtLink
              >
              <NuxtLink
                to="/product"
                class="text-sm text-gray-500 hover:text-gray-900 transition-all"
                >Product</NuxtLink
              >
              <NuxtLink
                to="/contact"
                class="text-sm text-gray-500 hover:text-gray-900 transition-all"
                >Contact</NuxtLink
              >
            </div>
          </div>
          <div class="text-center md:text-left">
            <h6 class="font-medium mb-6 uppercase">another project</h6>
            <div class="flex flex-col gap-4">
              <NuxtLink
                to="https://azuracoder.my.id"
                target="blank"
                class="text-sm text-gray-500 hover:text-gray-900 transition-all"
                >AzuraCoder</NuxtLink
              >
              <NuxtLink
                to="https://azurakit.vercel.app"
                target="blank"
                class="text-sm text-gray-500 hover:text-gray-900 transition-all"
                >AzuraKIT</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <hr class="my-10" />

      <div class="flex flex-col items-center bg-white rounded-2xl py-6 gap-6">
        <div class="flex items-center justify-center gap-8">
          <NuxtLink
            v-for="socmed in SOCMED"
            :to="socmed.url"
            :aria-label="'Read more ' + socmed.title"
            target="_blank"
            class="text-slate-600 hover:text-primary transition duration-300 ease-in-out"
          >
            <i :class="'text-2xl ai-' + socmed.title + '-fill'"></i>
          </NuxtLink>
        </div>
        <p class="text-sm text-gray-500 text-center">
          &copy; 2021 - {{ date.getFullYear() }}, Rauliqbal💻. Created by
          <NuxtLink
            to="https://azuracoder.my.id"
            class="text-primary font-medium underline"
            target="_blank"
            >AzuraCoder </NuxtLink
          >.
        </p>
      </div>
    </div>
  </footer>
</template>
