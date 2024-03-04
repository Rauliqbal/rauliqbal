<script setup>
</script>
<template>
 <nav class="">
  <div class="container fixed z-50 inset-x-0 top-6 p-6 bg-[#F5F7F9] rounded-2xl">
    <div class="flex items-center justify-between">
      <img class="h-8 md:h-auto" src="~/assets/images/logo.svg" alt="">

      <div>
        <input class="hidden peer" type="checkbox" id="hamburger">
        <label class="nav-btn z-50 cursor-pointer" for="hamburger">
          <img src="~/assets/images/hamburger-button.svg" alt="">
        </label>
        <div class="wrapper">
          <div >
            <NuxtLink to=""></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
 </nav>
</template>