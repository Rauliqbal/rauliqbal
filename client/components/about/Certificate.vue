<script setup>
import { COURSE } from "~/data/utils";

let showModal = ref(false)
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
            <Swiper :modules="[SwiperAutoplay, SwiperPagination]" :slides-per-view="1" :loop="true" :autoplay="{
              delay: 3000,
              disableOnInteraction: true,
            }" :pagination="{
              dynamicBullets: true,
            }" :space-between="32" :breakpoints="{
              1024: {
                slidesPerView: 2,
              },
            }" class="mt-10">
              <SwiperSlide class="pb-10 overflow-visible" v-for="course in COURSE.sort((a, b) => b.id - a.id)">              
                <div class="bg-[#eeeeef] rounded-2xl px-6 py-4 group">
                  <img class="w-16 rounded-xl mb-4" :src="'/images/' + course.image" alt="" />
                  <div class="flex items-center justify-between">
                    <div class="flex flex-col gap-2">
                    <p class="text-sm md:text-base font-light tracking-wider text-gray-500">
                      {{ course.publish }}
                    </p>
                    <h5 class="md:text-xl uppercase font-medium text-medium">
                      {{ course.title }}
                    </h5>
                  </div>
                  <p class="text-xl font-medium">{{ course.year }}</p>
                  </div>
                  <img class="mt-8 object-contain ring-4 ring-primary rounded-xl" :src="'/images/certificate/' + course.certificate" alt="">
                  
                </div>
                
              </SwiperSlide>
            </Swiper>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
