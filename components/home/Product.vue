<script setup>
import { PRODUCTS } from '~/data/utils';
</script>

<template>
  <div class="container bg-[#F5F7F9] rounded-3xl mt-10">
    <div class="body-container relative">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">PRODUCTS</h2>
      </div>
      <div class="mt-14">
        <h3 class="heading">OUR PRODUCTS</h3>
        <h4 class="sub-heading mt-3">Support me by buy my product</h4>
        <div class="grid lg:grid-cols-3 gap-8 mt-10">
          <div class="flex flex-col rounded-2xl overflow-hidden" v-for="product in PRODUCTS.slice(0, 3)">
            <div class="relative">
              <img class="w-full h-64 md:h-72 object-cover" :src="product.image" :alt="product.title">

              <div class="absolute bottom-0 -translate-x-[50%] left-[50%] bg-gray-200 px-4 py-2 rounded-t-xl">
                <p class="uppercase text-sm text-gray-500 product-type font-semibold">{{ product.type }}</p>
              </div>
            </div>
            <div class="flex justify-between items-center bg-[#EEEEEF] gap-4 p-4">
              <div>
                <h5 class="md:text-lg h-auto md:h-14 capitalize font-medium">{{ product.name }}</h5>
                <p class="text-[12px] md:text-base text-gray-500 uppercase  tracking-widest mt-4">{{ product.source }}</p>
              </div>
              <NuxtLink :to="product.url" class="text-4xl" target="_blank"><i class="ai-arrow-up-right"></i>
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
