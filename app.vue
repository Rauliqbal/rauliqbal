<script>
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <div>
    <NuxtLoadingIndicator throttle="0" duration="5000" />
    <SpeedInsights />
    <Navbar />
    <div id="luxy">
      <NuxtPage />
      <Footer class="mb-6" />
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.6s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
