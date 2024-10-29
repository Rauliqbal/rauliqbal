<script setup>
import { SOCMED } from "~/data/utils.ts";
const apiKey =
  "S9s8OP1lxy5z1smZ4ftCkYntzu3Rc8bCy47ZBbhFNRgJ1w2DBZZZHkaP2xLSyWaU";

const name = ref("");
const email = ref("");
const subject = ref("");
const details = ref("");

const handleContact = async () => {
  // https://send-email-gmail-nodemailer.vercel.app/api/contact
  await useFetch("https://send-email-gmail-nodemailer.vercel.app/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: {
      name: name.value,
      email: email.value,
      subject: subject.value,
      details: details.value,
    },
  })
    .then(() => {
      alert(`Message Sent`);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<template>
  <main>
    <div class="container bg-[#F5F7F9] rounded-3xl mt-24 md:mt-28" id="contact">
      <div class="body-container relative">
        <div class="absolute top-0 left-0">
          <h2 class="section-title">CONTACT</h2>
        </div>

        <div class="mt-14">
          <h3 class="heading">LET'S CONTACT</h3>
          <h4 class="sub-heading mt-3">Let’s Work Together</h4>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-20 lg:gap-20 mt-10">
            <div class="col-span-1">
              <h4 class="text-2xl font-viga mb-6 text-primary">
                +62 896 7310 2977
              </h4>
              <div class="flex flex-col gap-4">
                <h4 class="text-2xl font-viga">Address</h4>
                <h5 class="text-gray-500">Bekasi, Indonesian</h5>
              </div>
              <hr class="my-8" />
              <div class="flex flex-col gap-4">
                <h4 class="text-2xl font-viga">Email</h4>
                <h5 class="text-gray-500">muhamadrauliqbal.13@gmail.com</h5>
              </div>
              <hr class="my-8" />
              <div class="flex items-center justify-center gap-8">
                <NuxtLink
                  :to="socmed.url"
                  v-for="socmed in SOCMED"
                  :key="socmed"
                  target="_blank"
                  :aria-label="'Read more ' + socmed.title"
                  class="w-14 h-14 flex hover:bg-primary hover:text-white items-center justify-center bg-[#EEEEEF] text-slate-600 rounded-full transition duration-300 ease-in-out"
                >
                  <i :class="'text-2xl ai-' + socmed.title + '-fill'"></i>
                </NuxtLink>
              </div>
            </div>

            <div class="col-span-2">
              <div>
                <form
                  @submit.prevent="handleContact"
                  class="grid grid-cols-2 gap-6"
                >
                  <input
                    class="col-span-2 md:col-span-1 rounded-2xl bg-transparent border border-gray-300 outline-none focus:border-gray-600 py-4 px-6 placeholder:text-sm transition duration-200 ease-out"
                    type="text"
                    placeholder="Your name"
                    v-model="name"
                    required
                  />
                  <input
                    class="col-span-2 md:col-span-1 rounded-2xl bg-transparent border border-gray-300 outline-none focus:border-gray-600 py-4 px-6 placeholder:text-sm transition duration-200 ease-out"
                    type="email"
                    placeholder="Your Email"
                    v-model="email"
                    required
                  />
                  <input
                    class="col-span-2 rounded-2xl bg-transparent border border-gray-300 outline-none focus:border-gray-600 py-4 px-6 placeholder:text-sm transition duration-200 ease-out"
                    type="text"
                    placeholder="Subject"
                    v-model="subject"
                    required
                  />
                  <textarea
                    class="col-span-2 rounded-2xl bg-transparent border border-gray-300 outline-none focus:border-gray-600 py-4 px-6 placeholder:text-sm transition duration-200 ease-out"
                    placeholder="Your message"
                    v-model="details"
                    required
                    rows="5"
                  />
                  <button
                    type="submit"
                    class="col-span-2 w-full rounded-full py-4 border border-gray-300 hover:bg-black hover:text-white outline-none focus:border-gray-600 mt-4 transition duration-200 ease-out"
                  >
                    Let's message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
