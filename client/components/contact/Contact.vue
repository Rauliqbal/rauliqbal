<script setup>
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { SOCMED } from "~/data/utils.ts";

const $toast = useToast();
const name = ref("");
const email = ref("");
const subject = ref("");
const details = ref("");

function notify() {
  $toast.success("Hello");
}

const handleContact = async () => {
  await useFetch("http://localhost:8080/api/contact", {
    method: "POST",
    headers: {
      //  "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "api-key": process.env.VITE_API_KEY,
    },
    body: {
      name: name.value,
      email: email.value,
      subject: subject.value,
      details: details.value,
    },
  })
    .then(() => {
      // alert(`Message Sent`);
      $toast.success("Message Sent");
    })
    .catch((err) => {
      $toast.success("Message : " + err);
    });
};
</script>
<template>
  <div
    class="container bg-[#F5F7F9] rounded-3xl mt-10 scroll-mt-10"
    id="contact"
  >
    <div class="relative body-container">
      <div class="absolute top-0 left-0">
        <h2 class="section-title">CONTACT</h2>
      </div>

      <div class="mt-14">
        <h3 class="heading">LET'S CONTACT</h3>
        <h4 class="mt-3 sub-heading">Let’s Work Together</h4>

        <button @click="notify">Click</button>

        <div class="grid grid-cols-1 gap-y-20 mt-10 lg:grid-cols-3 lg:gap-20">
          <div class="col-span-1">
            <h4 class="mb-6 text-2xl font-viga text-primary">
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
            <div class="flex gap-8 justify-center items-center">
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
                  class="col-span-2 px-6 py-4 bg-transparent rounded-2xl border border-gray-300 transition duration-200 ease-out outline-none md:col-span-1 focus:border-gray-600 placeholder:text-sm"
                  type="text"
                  placeholder="Your name"
                  v-model="name"
                  required
                />
                <input
                  class="col-span-2 px-6 py-4 bg-transparent rounded-2xl border border-gray-300 transition duration-200 ease-out outline-none md:col-span-1 focus:border-gray-600 placeholder:text-sm"
                  type="email"
                  placeholder="Your Email"
                  v-model="email"
                  required
                />
                <input
                  class="col-span-2 px-6 py-4 bg-transparent rounded-2xl border border-gray-300 transition duration-200 ease-out outline-none focus:border-gray-600 placeholder:text-sm"
                  type="text"
                  placeholder="Subject"
                  v-model="subject"
                  required
                />
                <textarea
                  class="col-span-2 px-6 py-4 bg-transparent rounded-2xl border border-gray-300 transition duration-200 ease-out outline-none focus:border-gray-600 placeholder:text-sm"
                  placeholder="Your message"
                  v-model="details"
                  required
                  rows="5"
                />
                <button
                  type="submit"
                  class="col-span-2 py-4 mt-4 w-full rounded-full border border-gray-300 transition duration-200 ease-out outline-none hover:bg-black hover:text-white focus:border-gray-600"
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
</template>
