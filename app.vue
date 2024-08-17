<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: title => title ? `${ title } - ${ useRuntimeConfig().public.appName }` : useRuntimeConfig().public.appName,
})

// const colorMode = useColorMode()
//
// colorMode.preference= 'light'
// console.log(colorMode)
</script>
