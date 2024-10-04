<script setup>
definePageMeta({layout: 'home'})
const title = useRuntimeConfig().public?.app.title
useHead({titleTemplate: title})
</script>

<template>
  <div class="w-full h-full flex justify-center items-center flex-col gap-20">
    <div class="text-center text-8xl font-extrabold">
      <p>🐆</p>
      <p>Leopard</p>
    </div>

    <div
        class="text-center text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400">
      后台开发，可以更简单
    </div>

    <p class="text-2xl dark:text-gray-500">每一个细节，都经过精心打磨，只为了提供更好的开发体验。</p>

    <a-space>
      <a-link href="/auth/login">去登录</a-link>
      <a-link href="/console">去后台</a-link>
    </a-space>
  </div>
</template>
