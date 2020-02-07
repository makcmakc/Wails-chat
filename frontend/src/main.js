import Vue from 'vue';
import App from './App.vue';

import VModal from 'vue-js-modal'
 
Vue.use(VModal)


Vue.config.productionTip = false;
Vue.config.devtools = true;

import * as Wails from '@wailsapp/runtime';

Wails.Init(() => {
	new Vue({
		render: h => h(App)
	}).$mount('#app');
});
