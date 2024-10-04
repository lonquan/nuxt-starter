<template>
  <a-layout class="layout" has-sider>
    <a-layout-sider
        class="layout-sider"
        collapsible
        breakpoint="lg"
        :collapsed="hasCollapsed"
        @collapse="handleCollapsed"
    >
      <a href="/console" class="layout-logo">
        <img alt="logo" src="/assets/img/logo.png" class="logo"/>
        <a-typography-title class="title" :heading="5" v-show="!hasCollapsed">
          Leopard
        </a-typography-title>
      </a>
      <div class="menu-wrapper">
        <Menus/>
      </div>

      <template #trigger="{ collapsed }">
        <icon-menu-fold v-if="collapsed"/>
        <icon-menu-unfold v-else/>
      </template>
    </a-layout-sider>
    <a-layout-header class="layout-header">
      <div class="left"></div>
      <Profile class="right"/>
    </a-layout-header>

    <a-layout-content class="layout-body" :class="{collapsed: hasCollapsed}">
      <NuxtPage></NuxtPage>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
useHead({title: '控制中心'})
import Menus from '../components/layout/Menus.vue'
import Profile from '../components/layout/Profile.vue'

const hasCollapsed = ref(false)
const handleCollapsed = (collapsed, type) => {
  hasCollapsed.value = collapsed
}

</script>

<style scoped lang="scss">
$header-height: 60px;

.layout {
  background: #F2F3F5;
  min-height: 100vh;

  .layout-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $header-height;
    gap: 8px;
    cursor: pointer;

    .logo {
      width: 32px;
      height: 32px;
    }

    .title {
      margin: 0;
      font-size: 20px;
      user-select: none;
    }
  }
}

.layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2;

  &::after {
    position: absolute;
    top: 0;
    right: -1px;
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
    content: '';
  }

  > :deep(.arco-layout-sider-children) {
    overflow-y: hidden;
  }

  .menu-wrapper {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 12px;
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: 6px;
      background-color: var(--color-text-4);
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-text-3);
    }
  }
}

.layout-header {
  position: fixed;
  width: 100vw;
  top: 0;
  right: 0;
  z-index: 1;
  height: $header-height;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-bg-2);

  &::after {
    position: absolute;
    left: 0;
    bottom: -1px;
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
    content: '';
  }

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .right {

  }
}

$body-padding: 12px;

.layout-body {
  box-sizing: border-box;
  padding: $header-height + $body-padding $body-padding $body-padding 200px + $body-padding;
  transition: padding-left 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);

  &.collapsed {
    padding-left: 48px + $body-padding;
  }
}
</style>
