<template>
  <div class="page">
    <div class="image" :style="{backgroundImage:`url(${useBackgroundImage})`}">
      <div class="copyright text-white">
        <span>Designed by </span>
        <a href="#">Lonquan ❤️</a>
      </div>
    </div>

    <div class="login">
      <div class="py-10 text-2xl text-blue-600"><h1>Vayne</h1></div>

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
            <a-button long type="text">
              <template #icon>
                <icon-scan/>
              </template>
              忘记密码?
            </a-button>
          </a-form-item>
        </a-form>
      </div>

<!--      <div class="copyright text-gray-500">-->
<!--        <span>&copy; 2024 Lonquan</span>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
import lightBg from '~/assets/img/bg/login-bg-light.jpg'
import nightBg from '~/assets/img/bg/login-bg-night.jpg'

definePageMeta({layout: 'empty'})
useHead({title: '登录'})

const colorMode = useColorMode()
const useBackgroundImage = computed(_ => colorMode.value === 'light' ? lightBg : nightBg)

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
