<script setup>
import { COURSE } from "~/data/utils";

const sortDate = function sort() {
  
}
</script>

<template>
  <div class="container bg-[#F5F7F9] rounded-3xl mt-10">
    <div class="body-container relative">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">CERTIFICATES</h2>
      </div>

      <div class="mt-14">
        <div class="mx-auto mt-10">
          <div class="">
            
            <div>
              <h4 class="sub-heading mt-3 !text-left">COURSE</h4>

              <ul class="mt-10 grid lg:grid-cols-2 gap-8">
                <li v-for="course in COURSE">
                  <div class=" flex justify-between items-center">
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
