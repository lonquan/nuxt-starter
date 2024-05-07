<template>
  <div class="layout-console">
    <div class="header">
      <div class="menu">
        <div class="logo" @click="handleRefresh">
          站点名称
        </div>
        <TopNav :menus="menu.top"/>
      </div>
      <div class="profile">
        <Profile/>
      </div>
    </div>

    <div class="aside" :class="{ 'folded': menuFolded }">
    </div>

    <div class="main" :class="{ 'folded': menuFolded, 'is-index': isIndexPage }">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import TopNav from '../components/header/TopNav.vue'
import Profile from '../components/header/Profile.vue'
import menu from '../config/menu.js'

const menuFolded = ref(false)
const isIndexPage = ref(false)

const handleRefresh = () => {

}
</script>

<style scoped lang="scss">
$header-height: 50px;
$aside-width: 200px;
$aside-fold-width: 48px;

.layout-console {
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
}

.header {
  @apply fixed left-0 right-0 top-0 w-full border-b flex justify-between items-center px-4;
  height: $header-height;
  background-color: #262f3e;
  border-color: #273246;

  .menu {
    @apply flex justify-start items-center;
  }

  .logo {
    @apply text-gray-200 font-bold text-xl cursor-pointer select-none;
  }

  .profile {
    @apply flex justify-center items-center;
  }
}

.aside {
  @apply fixed left-0 bottom-0;
  top: $header-height;
  width: $aside-width;
  transition: width linear 0.3s;

  &.folded {
    width: $aside-fold-width;
  }

  .menus {
    position: relative;
    background-color: #1e222d;
    height: 100%;
    vertical-align: top;
    transition: all .2s cubic-bezier(.4, 0, .2, 1);
    overflow-x: hidden;
    display: flex;
    flex-flow: column;

    .menu-header {
      padding: 18px 0 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .menu-body {
      flex: 1;
      overflow: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        width: 15px;
        height: 15px;
        background-color: transparent;
        border-radius: 9px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #344158;
        border-radius: 0;
        background-clip: content-box;
        border: 4px solid transparent;
      }
    }

    .menu-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 56px;
      background-color: #262f3e;

      .href {
        width: auto !important;
        padding: 0 10px;
        line-height: 56px;
      }

      .fold-btn, .href {
        width: 64px;
        height: 56px;
        color: #69747C;

        &:hover {
          background-color: #344258;
          color: #ffffff;
        }
      }
    }
  }
}

.main {
  @apply fixed right-0 bottom-0 overflow-y-auto;
  top: $header-height;
  left: $aside-width;
  background-color: #f3f4f7 !important;
  transition: all .2s cubic-bezier(.4, 0, .2, 1);

  &.folded {
    left: $aside-fold-width;
  }

  &.is-index {
    left: 0;
  }
}
</style>
