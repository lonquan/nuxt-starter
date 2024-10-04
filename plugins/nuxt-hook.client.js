export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', _ => {
    console.log('app:created')
  })

  nuxtApp.hook('app:beforeMount', _ => {
    console.log('app:beforeMount')
  })

  nuxtApp.hook('app:error', _ => {
    console.log('app:error')
  })

})