<script setup>
useHead({
  title: "Rauliqbal - FrontEnd Developer",
  meta: [
    {
      name: "description",
      content:
        "I am a Front End Developer and UI Designer, I am used to making projects with React JS, Vue JS and Tailwind CSS",
    },
    { property: "og:title", content: "Rauliqbal - FrontEnd Developer" },
    {
      property: "og:description",
      content:
        "I am a Front End Developer and UI Designer, I am used to making projects with React JS, Vue JS and Tailwind CSS",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://rauliqbal.my.id/" },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: "" },
  ],
  link: [{ rel: "canonical", href: "https://rauliqbal.my.id/" }],
});
</script>

<template>
  <main>
    <HomeHero />
    <LazyHomeBentoGrid />
    <HomeService />
    <HomeProject />
    <HomeProduct />
  </main>
</template>
