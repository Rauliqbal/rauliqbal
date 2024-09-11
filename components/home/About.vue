<template>
  <div class="container mt-10">
    <div
      class="grid grid-cols-1 grid-rows-2 gap-y-4 px-4 md:grid-cols-2 lg:grid-cols-3 md:gap-4"
    >
      <div
        class="col-span-full md:col-span-1 md:order-1 lg:order-1 bg-light rounded-3xl bg-cover bg-center bg-origin-content bg-[url('~/assets/images/pattern2.png')] overflow-hidden relative"
      >
        <div class="p-8 w-full h-full">
          <h4
            class="z-10 mt-3 text-2xl font-semibold text-center md:text-3xl md:text-left"
          >
            Tech enthusiast with a passion for development.
          </h4>
        </div>
      </div>
      <div
        class="col-span-2 row-span-2 md:order-3 lg:order-2 bg-light rounded-3xl bg-cover bg-center bg-origin-content bg-[url('~/assets/images/pattern2.png')] overflow-hidden relative"
      >
        <div class="absolute w-full h-full">
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
          <h4 class="z-10 mt-2 text-2xl font-semibold md:text-3xl">
            Currently building the Express JS Stack
          </h4>
        </div>
      </div>
      <div
        class="col-span-full md:col-span-1 md:order-2 lg:order-3 bg-light rounded-3xl bg-cover bg-center bg-origin-content bg-[url('~/assets/images/pattern2.png')] overflow-hidden relative"
      >
        <div class="flex flex-col items-center p-8 w-full h-full">
          <h4 class="mt-3 text-2xl font-semibold text-center md:text-3xl">
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
