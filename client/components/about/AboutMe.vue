<script setup>
import { SERVICES } from "~/data/utils";
</script>

<template>
  <div class="container bg-[#F5F7F9] rounded-3xl" id="service">
    <div class="relative body-container">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">ABOUT</h2>
      </div>

      <div class="mt-14">
        <div class="mx-auto mt-10 max-w-5xl">
          <div class="grid gap-10 items-center lg:grid-cols-2">
            <div class="relative">
              <img
                class="rounded-2xl"
                src="~/assets/images/about.jpg"
                alt="I am a Front End Developer and UI Designer"
              />

              <div
                class="absolute -right-2 -translate-y-[50%] top-[50%] bg-[#F5F7F9] px-4 py-2 rounded-t-xl -rotate-90"
              >
                <p class="text-gray-700 uppercase about-title text-nowrap">
                  ui/ux Designer
                </p>
              </div>

              <div
                class="absolute bottom-0 -translate-x-[50%] left-[50%] bg-[#F5F7F9] px-4 py-2 rounded-t-xl"
              >
                <p class="text-gray-700 uppercase about-title text-nowrap">
                  FRONT-END DEVELOPER
                </p>
              </div>
            </div>
            <div>
              <h3 class="heading !text-left">HELLO EVERYONE</h3>
              <h4 class="sub-heading mt-3 !text-left">Muhamad Raul Iqbal</h4>
              <p class="mt-8 desc">
                I am a
                <span class="font-medium text-primary"
                  >Front End Developer
                </span>
                and <span class="font-medium text-primary">UI Designer,</span> I
                am used to making projects with
                <span class="font-medium text-primary">Vue JS </span>,
                <span class="font-medium text-primary">React JS</span> and
                <span class="font-medium text-primary"> Tailwind CSS, </span> I
                use <span class="font-medium text-primary">Git </span> as
                version control and github to store my project source code.
              </p>
              <p class="mt-6 desc">
                I am a graduate of
                <span class="font-medium text-primary"
                  >Computer Network Engineering Vocational School,</span
                >
                have high spirit of motivation in terms of
                <span class="font-medium text-primary">learning</span>,
                <span class="font-medium text-primary">seek experience </span>
                and
                <span class="font-medium text-primary">seek new things</span>.
              </p>
              <p class="mt-6 desc">
                I am able to work in a team
                <span class="font-medium text-primary">well</span>,
                <span class="font-medium text-primary"> honestly</span>,
                <span class="font-medium text-primary">hardworking </span> and
                <span class="font-medium text-primary">responsible</span>.
                Currently looking for a job as Front End Developer in a company.
              </p>
            </div>
          </div>
          <hr class="my-12" />

          <div class="grid gap-10 items-center md:grid-cols-3">
            <div class="flex gap-8 justify-center items-center">
              <h5 class="mb-1 text-5xl md:text-7xl font-viga">03</h5>
              <p class="font-light tracking-wider text-slate-500">
                YEARS <br />
                EXPERIENCE
              </p>
            </div>
            <div class="flex gap-8 justify-center items-center">
              <h5 class="mb-1 text-5xl md:text-7xl font-viga">50+</h5>
              <p class="font-light tracking-wider text-slate-500">
                COMPLETED <br />
                PROJECTS
              </p>
            </div>
            <div class="flex gap-8 justify-center items-center">
              <h5 class="mb-1 text-5xl md:text-7xl font-viga">07</h5>
              <p class="font-light tracking-wider text-slate-500">
                CERTIFICATE <br />
                AWARDS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
