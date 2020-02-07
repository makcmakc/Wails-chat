<template>
	<div class="sidepanel-top">
		<div class="menu" v-on:click="show">
			<svg class="menu-icon" x="0px" y="0px" viewBox="0 0 512 512" fill="#999999">
				<g>
					<g>
						<path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
					</g>
				</g>
				<g>
					<g>
						<path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"/>
					</g>
				</g>
				<g>
					<g>
						<path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20 C512,404.954,503.046,396,492,396z"/>
					</g>
				</g>
			</svg>
		</div>

		<div id="search">
			<input type="text" placeholder="Найти..." />
		</div>		

		<modal name="contact-info" :width="400" :height="500">
			<h3>Information</h3>

			<div class="phone">7 906 335 89 35</div>
		</modal>	

	</div>
</template>


<script>
	export default {
		name: 'sidepanel-top',
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



</style>