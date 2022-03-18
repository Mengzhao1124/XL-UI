import Vue from 'vue';
import App from './App.vue';
import XLbutton from "@/components/XLbutton.vue";
import XLdialog from "@/components/XLdialog.vue";
import XLinput from '@/components/XLinput.vue';
import XLswitch from "@/components/XLswitch.vue";

Vue.component('xl-button', XLbutton);
Vue.component('xl-dialog', XLdialog);
Vue.component('xl-input', XLinput);
Vue.component('xl-switch', XLswitch);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
