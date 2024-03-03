<template>
  <div class="container bg-[#F5F7F9] rounded-3xl relative">
    <div class="body-container relative">
      <div class="flex flex-col lg:flex-row gap-10 lg:items-center justify-between relative z-10">
        <h1 class="text-2xl md:text-4xl xl:text-6xl md:leading-normal xl:leading-tight font-viga md:max-w-[864px]">Someone who has interest and talent in Web Development and Web Design</h1>
        <p class=" lg:hidden desc max-w-[617px]">I am Rauliqbal, a Front-End Developer and UI/UX Designer who has a passion for building website applications that are responsive, have a cool appearance, and are easy to visit.</p>
        <div class="flex flex-row lg:flex-col justify-between max-w-[580px] gap-8">
          <div>
            <h5 class="text-4xl mb-1 font-viga">03</h5>
            <p class="text-slate-500 font-light tracking-wider">YEARS EXPERIENCE</p>
          </div>
          <div>
            <h5 class="text-4xl mb-1 font-viga">50+</h5>
            <p class="text-slate-500 font-light tracking-wider">COMPLETED PROJECTS</p>
          </div>
        </div>
      </div>
      <img src="~/assets/images/pattern.png" class="w-[240px] md:w-[280px] lg:w-[320px] absolute top-[calc(2%)] lg:top-[calc(8%)] left-[calc(4%)] lg:left-[calc(2%)] ">

      <img src="~/assets/images/shapes.png" class="absolute h-[280px] md:h-[320px] lg:h-[400px] xl-[500px] -right-1 bottom-40 lg:top-0">

      <div class="flex items-center justify-between mt-10 relative">
        <Button class="btn-primary" url="test" title="EXPLORE MORE" icon="ai-arrow-down-right"/>
        <p class="desc max-w-[617px] hidden lg:block">I am Rauliqbal, a Front-End Developer and UI/UX Designer who has a passion for building website applications that are responsive, have a cool appearance, and are easy to visit.</p>
      </div>

      <hr class="my-10">

      <div class="flex whitespace-nowrap w-full overflow-hidden">
        <p class="text-2xl lg:text-3xl font-viga tracking-[.3em] animate-loopText">WEB DEVELOPMENT • UI/UX DESIGN • CREATIVE DIGITAL •</p>
        <p class="text-2xl lg:text-3xl font-viga tracking-[.3em] animate-loopText">WEB DEVELOPMENT • UI/UX DESIGN • CREATIVE DIGITAL •</p>
        <p class="text-2xl lg:text-3xl font-viga tracking-[.3em] animate-loopText">WEB DEVELOPMENT • UI/UX DESIGN • CREATIVE DIGITAL •</p>
      </div>
    </div>
  </div>
</template>