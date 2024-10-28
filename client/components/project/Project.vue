<script setup>
import { PROJECTS } from "~/data/utils";
</script>

<template>
  <div class="container bg-[#F5F7F9] rounded-3xl">
    <div class="relative body-container">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">PROJECTS</h2>
      </div>

      <div class="mt-14">
        <h3 class="heading">OUR WORKS</h3>
        <h4 class="mt-3 sub-heading">You Can See My Works</h4>

        <div class="flex flex-col gap-10">
          <div
            class="bg-[#F4F5F8] rounded-3xl"
            v-for="project in PROJECTS"
            :key="project.id"
          >
            <div class="grid gap-10 items-center mt-10 lg:grid-cols-2">
              <div class="order-last p-0 md:p-16 lg:order-first">
                <h5 class="text-2xl font-semibold md:text-3xl">
                  {{ project.title }}
                </h5>
                <hr class="my-4 md:my-8" />
                <p class="desc">{{ project.description }}</p>

                <div class="flex mt-6">
                  <a :href="project.url" target="_blank">
                    <Button
                      class="btn-primary"
                      title="EXPLORE MORE"
                      icon="ai-arrow-down-right"
                  /></a>
                </div>
              </div>
              <div class="order-first lg:order-last">
                <img
                  class="rounded-2xl"
                  :src="'/images/projects/' + project.img"
                  :alt="'portfolio image ' + project.title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
