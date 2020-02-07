<template>
	<div class="info">
		<div class="contact-info" v-on:click="show">
			<svg x="0px" y="0px" viewBox="0 0 512 512" fill="#999999">
				<g><g><g>
				<circle cx="256" cy="256" r="64"/>
				<circle cx="256" cy="448" r="64"/>
				<circle cx="256" cy="64" r="64"/>
				</g></g></g>
			</svg>			
		</div>


		<modal name="contact-info" :width="400" :height="400">
			<h3>Information</h3>

			<div class="phone">7 456 344 39 35</div>
		</modal>		

	</div>
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
		}	
	};
</script>


<style>
.contact-info {
	width: 20px;
	height: 20px;
	position: absolute;
	top: 20px;
	right: 20px;
	cursor: pointer;
}
</style>