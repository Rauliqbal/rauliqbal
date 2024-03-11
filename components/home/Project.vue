<script setup>
import { PROJECTS } from "~/data/utils";
</script>

<template>
  <div class="container bg-[#F5F7F9] rounded-3xl mt-10">
    <div class="body-container relative">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">PROJECTS</h2>
      </div>

      <div class="mt-14">
        <h3 class="heading">OUR WORKS</h3>
        <h4 class="sub-heading mt-3">You can visit some of my works</h4>
        <div>
          <UButton label="Open" @click="isOpen = true" />

          <UModal v-model="isOpen">
            <div class="p-4">
              <Placeholder class="h-48" />
            </div>
          </UModal>
        </div>
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="1"
          :autoplay="{
            delay: 2000,
          }"
          :loop="true"
          :space-between="32"
          :breakpoints="{
            1024: {
              slidesPerView: 2,
            },
          }"
        >
          <SwiperSlide v-for="project in PROJECTS.slice(0, 6)" :key="project">
            <div class="relative rounded-3xl overflow-hidden mt-10 group">
              <img
                :src="'/images/projects/' + project.img"
                :alt="project.title"
              />
              <div
                class="p-3 md:p-5 absolute opacity-0 group-hover:opacity-100 -bottom-6 group-hover:bottom-2 group-hover:md:bottom-6 inset-x-2 md:inset-x-6 bg-gradient-to-r from-gray-400/50 to-gray-300/70 backdrop-blur-md rounded-2xl transition-all duration-500 ease-in-out"
              >
                <div class="flex justify-between items-center">
                  <div>
                    <h5 class="md:text-xl text-white font-semibold">
                      {{ project.title }}
                    </h5>
                    <p
                      class="text-[12px] md:text-base text-white uppercase font-medium tracking-widest mt-2"
                    >
                      {{ project.type }}
                    </p>
                  </div>
                  <NuxtLink
                    :to="project.url"
                    class="text-4xl text-white"
                    target="_blank"
                    ><i class="ai-arrow-up-right"></i
                  ></NuxtLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
