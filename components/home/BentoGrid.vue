<script setup>
import { TOOLS } from "~/data/utils";
</script>
<template>
  <section class="container px-4 mt-10">
    <div
      class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
    >
      <!-- Tech Stack -->
      <div class="col-span-1 rounded-3xl bg-light">
        <div class="card">
          <div class="overflow-hidden p-4 lg:p-6">
            <h2 class="text-xl font-semibold text-center lg:text-2xl">
              My Tech Stack
            </h2>
            <p class="mt-2 mb-8 text-center desc">
              The technology i use to create the app
            </p>

            <!-- lOGO SCROLL -->
            <div
              class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul
                class="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scroll-right"
                aria-hidden="true"
              >
                <li v-for="i in TOOLS.slice(0, 4)" :key="i.name">
                  <div
                    class="relative p-3 rounded-xl border-2 border-dashed border-slate-400"
                  >
                    <img
                      class="relative z-10 w-10 transition duration-300 hover:scale-125 group"
                      :src="'/images/icons/' + i.logo"
                      :alt="i.name"
                    />
                    <img
                      class="absolute top-3 w-10 blur-md transition duration-300"
                      :src="'/images/icons/' + i.logo"
                      :alt="i.name"
                    />
                  </div>
                </li>
              </ul>
              <ul
                class="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scroll-right"
              >
                <li v-for="i in TOOLS.slice(0, 4)" :key="i.name">
                  <div
                    class="relative p-3 rounded-xl border-2 border-dashed border-slate-400"
                  >
                    <img
                      class="relative z-10 w-10 transition duration-300 hover:scale-125"
                      :src="'/images/icons/' + i.logo"
                      :alt="i.name"
                    />
                    <img
                      class="absolute top-3 w-10 blur-md transition duration-300"
                      :src="'/images/icons/' + i.logo"
                      :alt="i.name"
                    />
                  </div>
                </li>
              </ul>
            </div>

            <!-- lOGO SCROLL -->
            <div
              class="mt-6 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul
                class="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scroll-left"
              >
                <li v-for="i in TOOLS.slice(5, 8)" :key="i.name">
                  <div
                    class="relative p-3 rounded-xl border-2 border-dashed border-slate-400"
                  >
                    <img
                      class="relative z-10 w-10 transition duration-300 hover:scale-125 group"
                      :src="'/images/icons/' + i.logo"
                      :alt="i.name"
                    />
                    <img
                      class="absolute top-3 w-10 blur-md transition duration-300"
                      :src="'/images/icons/' + i.logo"
                      :alt="i.name"
                    />
                  </div>
                </li>
              </ul>
              <ul
                class="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scroll-left"
                aria-hidden="true"
              >
                <li v-for="i in TOOLS.slice(5, 8)" :key="i.name">
                  <div
                    class="relative p-3 rounded-xl border-2 border-dashed border-slate-400"
                  >
                    <img
                      class="relative z-10 w-10 transition duration-300 hover:scale-125 group"
                      :src="'/images/icons/' + i.logo"
                      :alt="i.name"
                    />
                    <img
                      class="absolute top-3 w-10 blur-md transition duration-300"
                      :src="'/images/icons/' + i.logo"
                      :alt="i.name"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Passion -->
      <div
        class="overflow-hidden col-span-1 rounded-3xl lg:col-span-1 group bg-light"
      >
        <div class="p-4 lg:p-6">
          <h2
            class="text-xl font-semibold transition duration-500 lg:text-2xl group-hover:translate-x-4"
          >
            Tech enthusiast with a passion for development
          </h2>

          <div class="h-40 translate-y-10">
            <img
              class="object-cover w-full rounded-t-xl duration-500 scale-105 group-hover:scale-100 transiton"
              src="/images/tech-enthusiast.png"
              alt="Rauliqbal"
            />
          </div>
        </div>
      </div>

      <!-- About Me -->
      <div class="rounded-3xl lg:row-span-2 bg-light group">
        <div class="flex overflow-hidden flex-col">
          <div class="px-4 pt-4 lg:p-6">
            <h2 class="text-xl font-semibold text-center lg:text-2xl t">
              About Me
            </h2>

            <p
              class="mt-4 desc underline decoration-dashed underline-offset-8 decoration-gray-300 tracking-wide !leading-[2.1]"
            >
              I craft digital products & delightful experiences, build my ideas
              & nerd out over things I like.
            </p>
          </div>
          <div class="overflow-hidden rounded-xl group">
            <img
              class="object-cover transition duration-500 group-hover:scale-110"
              src="/images/profile.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- My Framework -->
      <div class="rounded-3xl lg:col-span-2 bg-light group">
        <div
          class="flex overflow-hidden relative flex-col justify-around h-full lg:flex-row"
        >
          <div
            class="flex flex-col justify-center items-start p-8 h-full transition duration-500 max-w-80 md:h-auto group-hover:translate-x-4"
          >
            <h3 class="tracking-[0.2em] text-sm font-medium mb-1 text-primary">
              MY FRAMEWORK
            </h3>
            <h2 class="text-xl font-semibold lg:text-2xl">
              Currently building the Express JS Stack
            </h2>
          </div>
          <div
            class="self-end -mt-10 md:mt-0 lg:translate-y-8 md:-translate-x-4"
          >
            <img
              class="w-[360px] md:w-[420px] group-hover:-translate-y-4 transition duration-500"
              src="/images/code.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>