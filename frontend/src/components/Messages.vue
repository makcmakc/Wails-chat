<template>
	<div class="grid">

		<Message 
			v-for="msg in messages" 
			v-bind:msg="msg" 
			v-bind:key="msg.id"
			v-on:delete-message="confirmDelete"
			/>	

		<v-dialog />

	</div>
</template>


<script>
	import Message from './Message.vue'
	export default {
		name: 'messages',
		props: ['messages'],
		components: {
			Message
		},
		methods: {
			confirmDelete() {
			this.$modal.show('dialog', {
			text: 'Удалить это сообщение?',
			buttons: [
			{
			title: 'Отмена'
			},
			{
			title: 'Удалить',
			handler: (id) => {
			this.$emit('delete-message', id)
			}
			}
			]
			})
			}
		}
	};
</script>


<style>

.grid { 
	display: grid;
	padding: 50px 50px;
}

.message:nth-child(even)  {
	margin-top: 20px;
}	

.from {
	float: left;
	background: 
}
</style>