<template>
  <div class="page">
    <div class="image" :style="{backgroundImage:`url(${useBackgroundImage})`}">
      <div class="copyright text-white">
        <span>Designed by</span>
        <a href="https://github.com/lonquan" target="_blank" class="px-1">
          <span>Lonquan️</span>
          <span style="color: rgb(226, 117, 117); font-size: 14px; padding-left: 4px;">❤</span>
        </a>
        <span>{{ useCopyYear }}</span>
      </div>
    </div>

    <div class="login">
      <div class="py-10 text-2xl"><h1>{{ app?.title }}</h1></div>

      <div class="min-w-[400px]">
        <a-form
            size="large"
            ref="loginForm"
            :label-col-props="{span: 0}"
            :wrapper-col-props="{span: 24}"
            :model="form"
            :rules="formRules"
            @submit="handleLogin"
        >
          <a-form-item field="account">
            <a-input
                placeholder="请输入登录账号"
                autocomplete="username"
                allow-clear
                v-model.trim="form.account"
            >
              <template #prefix>
                <icon-user/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item field="password">
            <a-input-password
                placeholder="请输入登录密码"
                autocomplete="current-password"
                allow-clear
                v-model.trim="form.password"
            >
              <template #prefix>
                <icon-lock/>
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button long type="primary" html-type="submit">
              <template #icon>
                <icon-thunderbolt/>
              </template>
              立即登录
            </a-button>
          </a-form-item>
          <a-form-item>
            <a-button long type="outline">
              <template #icon>
                <icon-scan/>
              </template>
              扫码登录
            </a-button>
          </a-form-item>
          <a-form-item>
            <a-link>忘记密码?</a-link>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import lightBg from '~/assets/img/bg/login-bg-light.jpg'
import nightBg from '~/assets/img/bg/login-bg-night.jpg'

definePageMeta({layout: 'empty'})
useHead({title: '系统登录'})

const {$darkMode} = useNuxtApp()
const {app} = useRuntimeConfig().public

const useBackgroundImage = computed(_ => $darkMode.isDark.value ? nightBg : lightBg)

const useCopyYear = computed(_ => {
  const year = (new Date()).getFullYear()
  return year === 2024 ? 2024 : `2024-${ year }`
})

const form = reactive({account: null, password: null})

const formRules = {
  account: {type: 'string', required: true, message: '请正确输入账号'},
  password: {type: 'string', required: true, maxLength: 20, minLength: 8, message: '请正确输入密码'},
}

const loginForm = ref()

const handleLogin = ({values, errors}) => {
  console.log('values:', values, '\nerrors:', errors, useRuntimeConfig())
  useRouter().replace({path: '/'})
}
</script>

<style scoped lang="scss">
.page {
  @apply w-screen h-screen flex flex-row justify-start items-stretch;

  .image, .login {
    @apply relative;
  }

  .image {
    @apply basis-3/5;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .login {
    @apply basis-2/5 flex justify-center items-center flex-col dark:bg-slate-800;
  }
}

.copyright {
  @apply absolute bottom-6 left-0 right-0 text-base text-center select-none;
  //text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
