<script setup>
import { SERVICES } from "~/data/utils";
</script>

<template>
  <section class="px-4">
    <div
      class="container bg-[#F5F7F9] rounded-3xl mt-10 scroll-mt-10"
      id="service"
    >
      <div class="relative body-container">
        <div class="absolute top-0 left-0">
          <h2 class="section-title">SERVICE</h2>
        </div>

        <div class="mt-14">
          <h3 class="heading">OUR SPECIALIZE</h3>
          <h4 class="mt-3 sub-heading">Services I Specialize in</h4>

          <div class="mx-auto mt-10 max-w-5xl">
            <div class="grid gap-8 lg:grid-cols-2">
              <div
                class="bg-[#EEEEEF] rounded-2xl p-6 md:p-10"
                v-for="service in SERVICES"
                :key="service.id"
              >
                <img :src="'/images/' + service.icon" :alt="service.title" />
                <h5 class="mt-6 mb-4 text-xl font-semibold md:text-2xl">
                  {{ service.title }}
                </h5>
                <p class="mb-8 desc">{{ service.description }}</p>

                <Button
                  class="btn-link"
                  title="EXPLORE MORE"
                  url="/about"
                  icon="ai-arrow-up-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
