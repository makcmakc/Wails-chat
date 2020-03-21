<template>
	<ul>

		<li 
			@click="onClick"
			class="contact"
			v-for="contact in contacts" 
			:key="contact.id"
			>
				<img :src="contact.img">
				<h4>{{ contact.name }}</h4>

				<p>
					{{ contact.msg }}
				</p>
		</li>

			
	</ul>
</template>


<script>
	export default {
		name: 'contacts',
		props: ['value'],
		data: () => ({
			contacts: [
				{name: 'Maxim', img: '', id: 1, msg: 'Lorem ipsum dolor sit amet.'},
				{name: 'Toni', img: '', id: 2, msg: 'Далеко-далеко за словесными горами в стране.'},
				{name: 'Den', img: '', id: 3, msg: 'Lorem ipsum dolor sit amet.'},
			],
			messages: [
			{id: 1, time: '21:30', content: 'Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Что деревни то, буквоград своих дал это ее. Рукописи дал буквенных точках заглавных если, взгляд!', received: true},
			{id: 2, time: '21:46', content: 'Lorem ipsum dolor sit amet, orem ipsum dolor sit amet.', received: false}
			]			
		}),
		methods: {

			onClick(e) {
				// eslint-disable-next-line 
				console.log(e.target)
			}
		}
	};
</script>


<style>
	ul li {

	}
	ul li img {
		width: 20%;
		margin: 10px auto;
		border-radius: 50%;
		position: absolute;
	}
</style>
