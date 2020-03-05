import Vue from 'vue';
import App from './App.vue';

import VModal from 'vue-js-modal'
import ToggleButton from 'vue-js-toggle-button'


Vue.use(require('vue-moment'));
Vue.use(ToggleButton)
Vue.use(VModal, { dialog: true, clickToClose: true, scrollable: true })


Vue.config.productionTip = false;
Vue.config.devtools = true;

import * as Wails from '@wailsapp/runtime';

Wails.Init(() => {
	new Vue({
		render: h => h(App)
	}).$mount('#app');
});
