<template>
	<div>
		<Message v-for="msg in messages" v-bind:msg="msg" v-bind:key="msg" />	
	</div>
</template>


<script>
	import Message from './Message.vue'
	export default {
		name: 'messages',
		props: ['messages'],
		components: {
			Message
		}
	};
</script>


<style>
	
</style>