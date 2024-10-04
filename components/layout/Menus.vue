<template>
  <a-menu
      :auto-open="true"
      :auto-scroll-into-view="true"
      :auto-open-selected="true"
      :default-selected-keys="selectedKeys"
      :level-indent="30"
      @menu-item-click="handleClick"
  >
    <component
        v-for="menu in menus"
        :is="Array.isArray(menu.children) ? 'a-sub-menu' : 'a-menu-item' "
        :key="menu.id"
    >
      <template #icon>
        <component :is="menu.icon" />
      </template>
      <template #title>
        <span>{{ menu.name }}</span>
      </template>

      <span v-if="!Array.isArray(menu.children)">{{ menu.name }}</span>

      <template v-else>
        <component
            v-for="c in menu.children"
            :key="c.id"
            is="a-menu-item"
        >{{ c.name }}
        </component>
      </template>
    </component>
  </a-menu>
</template>

<script setup>
import menus from '../../config/menus.js'
import {useStorage} from '@vueuse/core'

const firstVisit = useStorage('first-visit', true)

const selectedKeys = ref([
  'reports/canteen',
])

const handleClick = key => {
  console.log(key)
}

onMounted(_ => {
  firstVisit.value = false
})
</script>

<style scoped lang="scss">

</style>
