<script setup>
import gsap from "gsap";

watch(
  () => progress.value,
  (number) => {
    if (number === 100) {
      gsap.fromTo(
        ".preloader",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          duration: 0.7,
          onComplete() {
            gsap.set("body", {
              clearProps: "all",
            });
          },
        }
      );
    }
  }
);
</script>
<template>
  <div
    class="flex fixed top-0 left-0 z-50 justify-center items-center w-screen h-screen bg-black .preloader"
  >
    <div
      style="border-top-color: transparent"
      class="w-16 h-16 rounded-full border-4 border-solid animate-spin border-primary"
    ></div>
  </div>
</template>