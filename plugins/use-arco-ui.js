import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import Table from "@arco-design/web-vue";
// import '@arco-design/web-vue/dist/arco.css'

ArcoVue.Modal.props.closable.default = false
// ArcoVue.Modal.props.escToClose.default = false
ArcoVue.Modal.props.maskClosable.default = false

// ArcoVue.Drawer.props.escToClose.default = false
ArcoVue.Drawer.props.maskClosable.default = false
ArcoVue.Table.props.bordered.default = { cell: true }
ArcoVue.Table.props.pagination.default = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ArcoVue);
  nuxtApp.vueApp.use(ArcoVueIcon);
})