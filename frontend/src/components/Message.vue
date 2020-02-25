<template>
	<div class="message" :class="{from: msg.from}">
		{{ msg.msg }}
		<span v-on:click="$emit('delete-message', msg.id)"> &times; </span>
	</div>		
</template>


<script>
	export default {
		props: {
			msg: {
				type: Object,
				required: true
			}
		}
	};
</script>


<style>

</style>