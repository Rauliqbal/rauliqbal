<script lang="ts" setup>
defineProps<{ url: string }>
</script>

<template>
  <e-html lang="en">
    <e-button :href="url">
      View on GitHub
    </e-button>
  </e-html>
</template>
