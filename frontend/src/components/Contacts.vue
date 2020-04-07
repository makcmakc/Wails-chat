<template>
	<ul class="contacts">
		<li 
			class="contact-user"
			v-for="contact in contacts" 
			:key="contact.id"
			>
				<!--<img :src="contact.img">-->
				<img :src="contact.avatar">


				<h4>{{ contact.name }}</h4>

				<span class="receiving-date">19:24</span>

				<p class="truncate">
					{{ contact.msg }}
				</p>
		</li>
	</ul>
</template>


<script>
	import {mapActions, mapState} from 'vuex'
	export default {
		name: 'contacts',
		props: ['value'],
		data: () => ({
			messages: [
			{id: 1, time: '21:30', content: 'Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Что деревни то, буквоград своих дал это ее. Рукописи дал буквенных точках заглавных если, взгляд!', received: true},
			{id: 2, time: '21:46', content: 'Lorem ipsum dolor sit amet, orem ipsum dolor sit amet.', received: false}
			]			
		}),
		computed: {
			...mapState(['contacts'])
		},
		methods: {
			...mapActions(['FETCH_CONTACTS'])
		},
		mounted() {
			this.FETCH_CONTACTS()
		}
	};
</script>


<style>

</style>
