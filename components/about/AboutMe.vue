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
          <div class="grid lg:grid-cols-2 gap-10 items-center">
            <div class="relative">
              <img
                class="rounded-2xl"
                src="~/assets/images/about.jpg"
                alt="I am a Front End Developer and UI Designer"
              />

              <div
                class="absolute -right-2 -translate-y-[50%] top-[50%] bg-[#F5F7F9] px-4 py-2 rounded-t-xl -rotate-90"
              >
                <p class="uppercase text-gray-700 about-title text-nowrap">
                  ui/ux Designer
                </p>
              </div>

              <div
                class="absolute bottom-0 -translate-x-[50%] left-[50%] bg-[#F5F7F9] px-4 py-2 rounded-t-xl"
              >
                <p class="uppercase text-gray-700 about-title text-nowrap">
                  FRONT-END DEVELOPER
                </p>
              </div>
            </div>
            <div>
              <h3 class="heading !text-left">HELLO EVERYONE</h3>
              <h4 class="sub-heading mt-3 !text-left">Muhamad Raul Iqbal</h4>
              <p class="desc mt-8">
                I am a
                <span class="text-primary font-medium"
                  >Front End Developer
                </span>
                and <span class="text-primary font-medium">UI Designer,</span> I
                am used to making projects with
                <span class="text-primary font-medium">Vue JS </span>,
                <span class="text-primary font-medium">React JS</span> and
                <span class="text-primary font-medium"> Tailwind CSS, </span> I
                use <span class="text-primary font-medium">Git </span> as
                version control and github to store my project source code.
              </p>
              <p class="desc mt-6">
                I am a graduate of
                <span class="text-primary font-medium"
                  >Computer Network Engineering Vocational School,</span
                >
                have high spirit of motivation in terms of
                <span class="text-primary font-medium">learning</span>,
                <span class="text-primary font-medium">seek experience </span>
                and
                <span class="text-primary font-medium">seek new things</span>.
              </p>
              <p class="desc mt-6">
                I am able to work in a team
                <span class="text-primary font-medium">well</span>,
                <span class="text-primary font-medium"> honestly</span>,
                <span class="text-primary font-medium">hardworking </span> and
                <span class="text-primary font-medium">responsible</span>.
                Currently looking for a job as Front End Developer in a company.
              </p>
            </div>
          </div>
          <hr class="my-12" />

          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="flex items-center justify-center gap-8">
              <h5 class="text-5xl md:text-7xl mb-1 font-viga">03</h5>
              <p class="text-slate-500 font-light tracking-wider">
                YEARS <br />
                EXPERIENCE
              </p>
            </div>
            <div class="flex items-center justify-center gap-8">
              <h5 class="text-5xl md:text-7xl mb-1 font-viga">50+</h5>
              <p class="text-slate-500 font-light tracking-wider">
                COMPLETED <br />
                PROJECTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
