<template>
	<div class="message" :class="{from: msg.from}">
		{{ msg.msg }}
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