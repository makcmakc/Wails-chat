<template>
	<div class="sidepanel-top">
		<div class="bm-burger-button"></div>

		<div id="search">
			<input type="text" placeholder="Найти..." />
		</div>		
		<Menu />
	</div>
</template>


<script>
	import Menu from './Menu.vue'
	export default {
		name: 'sidepanel-top',
		components: {
			Menu
		}
	
	};
</script>
