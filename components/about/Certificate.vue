<script setup>
import { COURSE } from "~/data/utils";
</script>

<template>
  <div class="container bg-[#F5F7F9] rounded-3xl mt-10">
    <div class="body-container relative">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">CERTIFICATES</h2>
      </div>

      <div class="mt-14">
        <div class="mx-auto mt-10">
          <div>
            <h3 class="heading">CERTIFICATE</h3>
            <h4 class="sub-heading mt-3">Awards</h4>

            <Swiper
              :modules="[SwiperAutoplay]"
              :slides-per-view="1"
              :loop="true"
              :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
              }"
              :space-between="32"
              :breakpoints="{
                1024: {
                  slidesPerView: 2,
                },
              }"
              class="mt-10"
            >
              <SwiperSlide
                v-for="course in COURSE.sort((a, b) => b.year - a.year)"
              >
                <div class="flex justify-between items-center">
                  <div class="flex flex-col gap-2">
                    <p
                      class="text-sm md:text-base font-light tracking-wider text-gray-500"
                    >
                      {{ course.publish }}
                    </p>
                    <h5 class="md:text-xl uppercase font-medium text-medium">
                      {{ course.title }}
                    </h5>
                  </div>
                  <h6 class="tracking-widest text-xl font-light">
                    {{ course.year }}
                  </h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
