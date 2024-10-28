<template>
  <div
    class="container bg-[#F5F7F9] rounded-3xl relative overflow-hidden mt-24 md:mt-28"
  >
    <div class="relative body-container">
      <div
        class="flex relative z-10 flex-col gap-10 justify-between lg:flex-row lg:items-center"
      >
        <h1
          class="text-2xl md:text-4xl xl:text-6xl md:leading-normal xl:leading-tight font-viga md:max-w-[864px]"
        >
          Someone who has interest and talent in Web Development and Web Design
        </h1>
        <p class="lg:hidden desc max-w-[617px]">
          I am Rauliqbal, a Front-End Developer and UI/UX Designer who has a
          passion for building website applications that are responsive, have a
          cool appearance, and are easy to visit.
        </p>
        <div
          class="flex flex-row lg:flex-col justify-between max-w-[580px] gap-8"
        >
          <div>
            <h5 class="mb-1 text-4xl font-viga">03</h5>
            <p class="font-light tracking-wider text-slate-500">
              YEARS EXPERIENCE
            </p>
          </div>
          <div>
            <h5 class="mb-1 text-4xl font-viga">50+</h5>
            <p class="font-light tracking-wider text-slate-500">
              COMPLETED PROJECTS
            </p>
          </div>
        </div>
      </div>
      <img
        src="~/assets/images/pattern.png"
        class="w-[240px] md:w-[280px] lg:w-[320px] absolute top-[calc(2%)] lg:top-[calc(8%)] left-[calc(4%)] lg:left-[calc(2%)]"
      />

      <img
        src="~/assets/images/shapes.png"
        class="absolute h-[280px] md:h-[320px] lg:h-[400px] xl-[500px] -right-1 bottom-40 lg:top-0"
      />

      <div class="flex relative justify-between items-center mt-10">
        <Button
          class="btn-primary"
          url="#service"
          title="EXPLORE MORE"
          icon="ai-arrow-down-right"
        />
        <p class="desc max-w-[617px] hidden lg:block">
          I am Rauliqbal, a Front-End Developer and UI/UX Designer who has a
          passion for building website applications that are responsive, have a
          cool appearance, and are easy to visit.
        </p>
      </div>

      <hr class="my-10" />

      <div class="flex overflow-hidden w-full whitespace-nowrap">
        <p
          class="text-2xl lg:text-3xl font-viga tracking-[.3em] animate-loopText"
        >
          WEB DEVELOPMENT • UI/UX DESIGN • CREATIVE DIGITAL •
        </p>
        <p
          class="text-2xl lg:text-3xl font-viga tracking-[.3em] animate-loopText"
        >
          WEB DEVELOPMENT • UI/UX DESIGN • CREATIVE DIGITAL •
        </p>
        <p
          class="text-2xl lg:text-3xl font-viga tracking-[.3em] animate-loopText"
        >
          WEB DEVELOPMENT • UI/UX DESIGN • CREATIVE DIGITAL •
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.ml6 {
  position: relative;
  font-weight: 900;
}

.ml6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}
</style>
