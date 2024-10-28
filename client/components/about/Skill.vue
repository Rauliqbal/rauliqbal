<script setup>
import { COURSE, SKILLS } from "~/data/utils";
</script>
s
<template>
  <div class="container bg-[#F5F7F9] rounded-3xl mt-10">
    <div class="relative body-container">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">SKILLS</h2>
      </div>

      <div class="mt-14">
        <div class="mx-auto mt-10">
          <div>
            <h3 class="heading">SKILLS</h3>
            <h4 class="mt-3 sub-heading">My Tech Stack and Frameworks</h4>

            <div class="grid gap-8 mt-10 md:grid-cols-2">
              <div>
                <div class="">
                  <h6 class="mb-4 text-lg font-medium uppercase">
                    Front-End Tech
                  </h6>
                  <ul class="flex flex-row flex-wrap gap-4">
                    <li v-for="skill in SKILLS[0].skills" :key="skill">
                      <img
                        class="w-10 md:w-14"
                        :src="'/images/icons/' + skill.icon"
                        :alt="skill.title"
                        :title="skill.title"
                      />
                    </li>
                  </ul>
                </div>
                <div class="mt-8">
                  <h6 class="mb-4 text-lg font-medium uppercase">
                    Back-End Tech
                  </h6>
                  <ul class="flex flex-row flex-wrap gap-4">
                    <li v-for="skill in SKILLS[1].skills" :key="skill">
                      <img
                        class="w-10 md:w-14"
                        :src="'/images/icons/' + skill.icon"
                        :alt="skill.title"
                        :title="skill.title"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="relative">
                <img
                  class="rounded-2xl"
                  src="~/assets/images/coding.jpg"
                  alt="I am a Front End Developer and UI Designer"
                />

                <div
                  class="absolute -right-2 -translate-y-[50%] top-[50%] bg-[#F5F7F9] px-4 py-2 rounded-t-xl -rotate-90"
                >
                  <p class="text-gray-700 uppercase about-title text-nowrap">
                    By Unsplash
                  </p>
                </div>

                <div
                  class="absolute bottom-0 -translate-x-[50%] left-[50%] bg-[#F5F7F9] px-4 py-2 rounded-t-xl"
                >
                  <p class="text-gray-700 uppercase about-title text-nowrap">
                    LANGUAGE AND TOOLS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
