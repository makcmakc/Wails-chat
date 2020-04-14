<template>
	<div id="app">
		<component :is="layout">
			<router-view />
		</component>
	</div>
</template>

<script>

//import Wails from '@wailsapp/runtime';

import MainLayout from './layouts/MainLayout'
import LoginLayout from './layouts/LoginLayout'

import "./assets/css/main.css"

export default {
  name: 'app',
	computed: {
		layout() {
			return (this.$route.meta.layout || 'main') + '-layout'
		}
	},
	components: {
		MainLayout,
		LoginLayout
	}
}
</script>