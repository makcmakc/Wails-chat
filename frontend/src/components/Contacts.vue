<template>
	<ul class="contacts">

		<li 
			class="contact-user"
			v-for="contact in contacts" 
			:key="contact.id"
			v-on:click="toChatRoom(contact)"
			>

				<img :src=" require(`../assets/images/${contact.avatar}`) ">

				<h4>{{ contact.name }}</h4>

				<span class="receiving-date">19:24</span>

				<p class="truncate">
					{{ lastMessage }}
				</p>
		</li>
	</ul>
</template>


<script>
	import { mapActions, mapState, mapGetters } from 'vuex'
	export default {
		name: 'contacts',
		props: ['value'],
		data: () => ({
			room: {},
			lastMessage: '',
			isRuLocale: true
		}),
		computed: {
			...mapState(['contacts', 'chats']),
			...mapGetters(['info'])
		},
		methods: {
			...mapActions(['FETCH_CONTACTS', 'FETCH_CHATS']),
			toChatRoom(contact) {
				this.FETCH_CHATS()
				this.chats.map(chat => {
					if (chat.id === contact.id) {
						this.lastMessage = chat.content
					}
				})
			},

		},
		mounted() {
			this.FETCH_CONTACTS()
		}
	};
</script>


<style>

</style>
