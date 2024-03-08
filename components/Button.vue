<script setup>
defineProps({
  title: String,
  url: String,
  icon: String
})
</script>

<template>
  <NuxtLink :to="url">{{ title }} <i :class="icon + ' text-2xl'"></i></NuxtLink>
</template>
