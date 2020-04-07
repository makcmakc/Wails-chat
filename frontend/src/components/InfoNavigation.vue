<template>
	<nav class="info-navigation">
		<ul>
			<li><i class="material-icons">call</i></li>

			<li><i class="material-icons">search</i></li>

			<li v-on:click="show"><i class="material-icons">more_vert</i></li>
		</ul>
	</nav>		
</template>


<script>
	export default {
		methods: {
			show () {
				this.$modal.show('contact-info');
			},
			hide () {
				this.$modal.hide('contact-info');
			}
		},
	};
</script>


<style>
	
</style>