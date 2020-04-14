<template>
	<div class="login-layout">
		<header class="header"></header>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'login-layout',
		data() {
			return {}
		},
		methods: {},
		computed: {},
		mounted() {}
	}
</script>

<style>
.login-layout .header {
  width: 100vw;
  height: 35%;
  background: rgba(48,163,230,.8);
  position: absolute;
  top: 0;
}


</style>