<script setup>
import { SERVICES } from '~/data/utils';
</script>

<template>
  <div class="container bg-[#F5F7F9] rounded-3xl mt-10 scroll-mt-10" id="service">
    <div class="body-container relative">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">SERVICE</h2>
      </div>

      <div class="mt-14">
        <h3 class="heading">OUR SPECIALIZE</h3>
      <h4 class="sub-heading mt-3">Some of the services I specialize in</h4>

      <div class="max-w-5xl mx-auto mt-10">
        <div class="grid lg:grid-cols-2 gap-8">
        <div class="bg-white rounded-2xl p-6 md:p-10" v-for="service in SERVICES">
          <img :src="'/images/'+ service.icon" :alt="service.title">
          <h5 class="text-xl md:text-2xl font-medium mb-4 mt-6">{{ service.title }}</h5>
          <p class="desc mb-8">{{ service.desc }}</p>

          <Button class="btn-link" title="EXPLORE MORE" url="/about" icon="ai-arrow-up-right"/>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>
