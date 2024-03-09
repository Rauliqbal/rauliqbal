<script setup>
import { COURSE, STUDY } from "~/data/utils";
</script>

<template>
  <div class="container bg-[#F5F7F9] rounded-3xl mt-10">
    <div class="body-container relative">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">EDUCATION</h2>
      </div>

      <div class="mt-14">
        <div class="mx-auto mt-10">
          <div class="grid lg:grid-cols-2 gap-10">
            <!-- <div>
              <h4 class="sub-heading mt-3 !text-left">STUDY</h4>

              <ul class="mt-10 flex flex-col gap-6">
                <li v-for="study in STUDY">
                  <div
                    class="border rounded-2xl px-8 py-4 relative overflow-hidden group"
                  >
                    <div
                      class="bg-white absolute w-full h-full inset-x-0 translate-y-32 bottom-0 group-hover:translate-y-0 transition duration-500 ease-in-out"
                    ></div>
                    <div class="relative flex justify-between items-center">
                      <div class="flex flex-col gap-2">
                        <p class="text-sm md:text-base font-light tracking-wider text-gray-500">
                          {{ study.faculty }}
                        </p>
                        <h5 class="md:text-xl uppercase font-medium text-medium">
                          {{ study.title }}
                        </h5>
                      </div>
                      <h6 class="tracking-widest text-xl font-light">
                        {{ study.since }}
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div> -->
            <div>
              <h4 class="sub-heading mt-3 !text-left">COURSE</h4>

              <ul class="mt-10 flex flex-col gap-6">
                <li v-for="course in COURSE">
                  <div
                    class="border rounded-2xl px-8 py-4 relative overflow-hidden group"
                  >
                    <div
                      class="bg-white absolute w-full h-full inset-x-0 translate-y-32 bottom-0 group-hover:translate-y-0 transition duration-500 ease-in-out"
                    ></div>
                    <div class="relative flex justify-between items-center">
                      <div class="flex flex-col gap-2">
                        <p class="text-sm md:text-base font-light tracking-wider text-gray-500">
                          {{ course.publish }}
                        </p>
                        <h5 class="md:text-xl uppercase font-medium text-medium">
                          {{ course.title }}
                        </h5>
                      </div>
                      <h6 class="tracking-widest text-xl font-light">
                        {{ course.since }}
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
