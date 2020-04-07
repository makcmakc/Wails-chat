import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import ToggleButton from 'vue-js-toggle-button'
import 'material-design-icons-iconfont'

Vue.use(require('vue-moment'))
Vue.use(ToggleButton)
Vue.use(VModal, { dialog: true, clickToClose: true, scrollable: true })


Vue.config.productionTip = false;
Vue.config.devtools = true;


new Vue({
	router,
	store,	
	render: h => h(App)
}).$mount('#app')



// No back-end
/*
import * as Wails from '@wailsapp/runtime';

Wails.Init(() => {
	new Vue({
		render: h => h(App)
	}).$mount('#app');
});
*/