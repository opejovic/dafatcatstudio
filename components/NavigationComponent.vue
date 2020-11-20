<template>
  <div
    data-name="header"
    style="display: flex; align-items: center; justify-content: space-between"
  >
    <NuxtLink to="/"><logo /></NuxtLink>
    <nav class="space-x-8">
      <NuxtLink to="/test">· test</NuxtLink>
      <NuxtLink to="/services">· services</NuxtLink>
      <NuxtLink to="/new-services">· new services</NuxtLink>
      <!-- <NuxtLink to="/our-work">· our work</NuxtLink> -->
    </nav>
  </div>
</template>

<script>
export default {};
</script>
