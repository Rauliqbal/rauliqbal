<script setup>
import { PROJECTS } from "~/data/utils";
</script>

<template>
  <div class="container bg-[#F5F7F9] rounded-3xl mt-10">
    <div class="relative body-container">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">PROJECTS</h2>
      </div>

      <div class="mt-14">
        <h3 class="heading">OUR WORKS</h3>
        <h4 class="mt-3 sub-heading">You Can See My Works</h4>
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
            <div class="overflow-hidden relative mt-10 rounded-3xl group">
              <img
                :src="'/images/projects/' + project.img"
                :alt="project.title"
              />
              <div
                class="absolute inset-x-2 -bottom-6 p-3 bg-gradient-to-r rounded-2xl opacity-0 backdrop-blur-md transition-all duration-500 ease-in-out md:p-5 group-hover:opacity-100 group-hover:bottom-2 group-hover:md:bottom-6 md:inset-x-6 from-gray-400/40 to-gray-400/20"
              >
                <div class="flex justify-between items-center">
                  <div>
                    <h5 class="font-semibold text-white md:text-xl">
                      {{ project.title }}
                    </h5>
                    <p
                      class="text-[12px] md:text-base text-white uppercase font-medium tracking-widest mt-2"
                    >
                      {{ project.type }}
                    </p>
                  </div>
                  <a
                    :to="project.url"
                    class="text-4xl text-white"
                    target="_blank"
                    ><i class="ai-arrow-up-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
