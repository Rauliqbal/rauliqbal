<template>
  <div class="container mt-24 md:mt-28">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8">
      <div
        class="bg-[#04071D] rounded-3xl bg-cover bg-center bg-origin-content bg-[url('~/assets/images/pattern2.png')] overflow-hidden relative"
      >
        <div class="w-full h-full p-8">
          <h4 class="font-semibold text-2xl md:text-3xl mt-3 text-white z-10">
            Tech enthusiast with a passion for development.
          </h4>
        </div>
      </div>
      <div
        class="col-span-2 row-span-2 bg-[#04071D] rounded-3xl bg-cover bg-center bg-origin-content bg-[url('~/assets/images/pattern2.png')] overflow-hidden relative"
      >
        <div class="w-full h-full absolute">
          <img
            class="w-[500px] -right-4 bottom-4 absolute"
            src="~/assets/images/about.png"
            alt=""
          />
        </div>
        <div
          class="flex flex-col items-center justify-center md:items-start max-w-[480px] h-full p-8"
        >
          <h3 class="tracking-[0.2em] font-medium text-white">
            THE INSIDE SCOOP
          </h3>
          <h4 class="font-semibold text-2xl md:text-3xl mt-3 text-white z-10">
            Currently building the Express JS Stack
          </h4>
        </div>
      </div>
      <div class="bg-[#F5F7F9] rounded-3xl"></div>
    </div>
  </div>
</template>

<style>
.ml6 {
  position: relative;
  font-weight: 900;
  font-size: 3.3em;
}

.ml6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml6 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
