<script></script>

<template>
  <div>
    <div id="progress"></div>
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
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
