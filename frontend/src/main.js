import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import ToggleButton from 'vue-js-toggle-button'
import AudioVisual from 'vue-audio-visual'
import 'material-design-icons-iconfont'

import localizeFilter from '@/filters/localizeFilter'

Vue.use(require('vue-moment'))
Vue.use(ToggleButton)
Vue.use(VModal, { dialog: true, clickToClose: true, scrollable: true })
Vue.use(AudioVisual)

Vue.filter('localize', localizeFilter)

Vue.config.productionTip = false;
Vue.config.devtools = true;

// No back-end
new Vue({
	router,
	store,	
	render: h => h(App)
}).$mount('#app')

/*
import * as Wails from '@wailsapp/runtime';

Wails.Init(() => {
	new Vue({
		render: h => h(App)
	}).$mount('#app');
});
*/