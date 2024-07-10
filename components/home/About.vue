<template>
  <div class="container mt-24 md:mt-28">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-y-4 md:gap-4 px-4"
    >
      <div
        class="col-span-full md:col-span-1 md:order-1 lg:order-1 bg-light rounded-3xl bg-cover bg-center bg-origin-content bg-[url('~/assets/images/pattern2.png')] overflow-hidden relative"
      >
        <div class="w-full h-full p-8">
          <h4
            class="font-semibold text-2xl md:text-3xl mt-3 z-10 text-center md:text-left"
          >
            Tech enthusiast with a passion for development.
          </h4>
        </div>
      </div>
      <div
        class="col-span-2 row-span-2 md:order-3 lg:order-2 bg-light rounded-3xl bg-cover bg-center bg-origin-content bg-[url('~/assets/images/pattern2.png')] overflow-hidden relative"
      >
        <div class="w-full h-full absolute">
          <img
            class="w-[260px] md:w-[500px] -right-4 -bottom-5 md:bottom-4 absolute opacity-70 md:opacity-100"
            src="~/assets/images/code.png"
            alt=""
          />
        </div>
        <div
          class="flex flex-col justify-center items-start max-w-[480px] h-full p-8"
        >
          <h3 class="tracking-[0.2em] text-sm font-medium z-10">
            THE INSIDE SCOOP
          </h3>
          <h4 class="font-semibold text-2xl md:text-3xl z-10 mt-2">
            Currently building the Express JS Stack
          </h4>
        </div>
      </div>
      <div
        class="col-span-full md:col-span-1 md:order-2 lg:order-3 bg-light rounded-3xl bg-cover bg-center bg-origin-content bg-[url('~/assets/images/pattern2.png')] overflow-hidden relative"
      >
        <div class="w-full h-full p-8 flex flex-col items-center">
          <h4 class="font-semibold text-2xl md:text-3xl mt-3 text-center">
            Do you want to start a project together?
          </h4>
          <NuxtLink
            to="#contact"
            class="btn-primary mt-8 text-center ring-[2px] ring-gray-800"
            >Lets get in touch</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
