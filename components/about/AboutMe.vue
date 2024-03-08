<script setup>
import { SERVICES } from "~/data/utils";
</script>

<template>
  <div class="container bg-[#F5F7F9] rounded-3xl mt-24 md:mt-28" id="service">
    <div class="body-container relative">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">ABOUT</h2>
      </div>

      <div class="mt-14">
        <div class="max-w-5xl mx-auto mt-10">
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="relative">
              <img
                class="rounded-2xl"
                src="~/assets/images/about.jpg"
                alt="I am a Front End Developer and UI Designer"
              />

              <div
                class="absolute bottom-0 -translate-x-[50%] left-[50%] bg-gray-200 px-4 py-2 rounded-t-xl"
              >
                <p
                  class="uppercase text-lg text-gray-500 product-type font-semibold"
                >
                  FRONT-END DEVELOPER
                </p>
              </div>
            </div>
            <div>
              <h3 class="heading">HELLO EVERYONE</h3>
              <h4 class="sub-heading mt-3">Hello my name is Rauliqbal</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
