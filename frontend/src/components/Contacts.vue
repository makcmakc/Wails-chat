<template>
	<div>
		<div 
			class="contact"
			v-for="contact in contacts" :key="contact.id"
			>
				<h4>{{ contact.name }}</h4>

			<p>
				{{ contact.msg }}
			</p>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'contacts',
		data: () => ({
			contacts: [
				{name: 'Maxim', img: '', id: 1, msg: 'Lorem ipsum dolor sit amet.'},
				{name: 'Toni', img: '', id: 2, msg: 'Далеко-далеко за словесными горами в стране.'},
				{name: 'Den', img: '', id: 3, msg: 'Lorem ipsum dolor sit amet.'},
			]
		}),
	};
</script>


<style>

</style>
