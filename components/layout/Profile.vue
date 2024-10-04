<template>
  <ul class="hd-profile">
    <li>
      <a-tooltip content="搜索">
        <a-button class="nav-btn" type="outline" shape="circle">
          <template #icon>
            <icon-search/>
          </template>
        </a-button>
      </a-tooltip>
    </li>

    <li>
      <a-tooltip content="跟随">
        <a-button
            class="nav-btn"
            type="outline"
            shape="circle"
            @click="$darkMode.toggleDark(true)"
        >
          <template #icon>
            <icon-moon-fill v-if="$darkMode.isDark"/>
            <icon-sun-fill v-else/>
          </template>
        </a-button>
      </a-tooltip>
    </li>

    <li>
      <a-tooltip content="模式">
        <a-button
            class="nav-btn"
            type="outline"
            shape="circle"
            @click="handleToggleTheme"
        >
          <template #icon>
            <icon-moon-fill v-if="$darkMode.isDark"/>
            <icon-sun-fill v-else/>
          </template>
        </a-button>
      </a-tooltip>
    </li>

    <li>
      <a-tooltip content="点击切换全屏模式">
        <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="toggleFullScreen"
        >
          <template #icon>
            <icon-fullscreen-exit v-if="isFullscreen"/>
            <icon-fullscreen v-else/>
          </template>
        </a-button>
      </a-tooltip>
    </li>

    <li>
      <a-tooltip content="提醒">
        <div class="message-box-trigger">
          <a-badge :count="9">
            <a-button
                class="nav-btn"
                type="outline"
                :shape="'circle'"
                @click="handleSetPopoverVisible"
            >
              <icon-notification/>
            </a-button>
          </a-badge>
        </div>
      </a-tooltip>
    </li>

    <li>
      <a-tooltip content="个人设置">
        <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
        >
          <template #icon>
            <icon-settings/>
          </template>
        </a-button>
      </a-tooltip>
    </li>

    <li>
      <a-dropdown trigger="hover" position="tr">
        <a-avatar :size="32" :style="{ cursor: 'pointer' }">
          <img alt="avatar" src="/assets/img/logo.png"/>
        </a-avatar>
        <template #content>
          <a-doption>
            <a-space>
              <icon-tag/>
              <span>菜单</span>
            </a-space>
          </a-doption>
          <a-doption>
            <a-space>
              <icon-user/>
              <span>个人中心</span>
            </a-space>
          </a-doption>
          <a-doption>
            <a-space>
              <icon-settings/>
              <span>设置</span>
            </a-space>
          </a-doption>
          <a-doption>
            <a-space @click="handleLogout">
              <icon-export/>
              <span>退出登录</span>
            </a-space>
          </a-doption>
        </template>
      </a-dropdown>
    </li>
  </ul>
</template>

<script setup>
import {useFullscreen} from '@vueuse/core'

const {$darkMode} = useNuxtApp()

const {isFullscreen, toggle: toggleFullScreen} = useFullscreen()
const handleSetPopoverVisible = _ => {
}

const handleToggleTheme = _ => $darkMode.toggleDark()

const handleLogout = _ => {

}
</script>

<style scoped lang="scss">
.hd-profile {
  display: flex;
  padding-right: 10px;
  list-style: none;

  :deep(.locale-select) {
    border-radius: 20px;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  a {
    color: var(--color-text-1);
    text-decoration: none;
  }

  .nav-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 16px;
  }

  .trigger-btn,
  .ref-btn {
    position: absolute;
    bottom: 14px;
  }

  .trigger-btn {
    margin-left: 14px;
  }
}
</style>
