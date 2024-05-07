<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: title => title ? `${title} - App Name` : 'App Name',
})
</script>
