<template>
  <div class="top-nav">
    <NuxtLink
        class="item"
        to="/"
    >
      <icon-home/>
      <span class="name">首页</span>
    </NuxtLink>

    <template v-for="n in menus">
      <NuxtLink
          class="item"
          :to="`/${n.route}`"
      >
<!--        <component :is="n.icon"/>-->
        <span class="name">{{ n.name }}</span>
      </NuxtLink>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  menus: {
    type: Array,
    default() {
      return []
    },
  },
})
</script>

<style scoped lang="scss">
.top-nav {
  @apply pl-10 flex justify-start items-stretch;

  .item {
    @apply px-2 font-normal text-sm;
    color: #c1c6c8;

    &:hover {
      color: #fff;
      //background: #383838;
    }

    .name {
      @apply pl-1;
    }
  }
}
</style>
