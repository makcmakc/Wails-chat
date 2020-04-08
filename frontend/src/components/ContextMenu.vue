<template>
	<div class="context-menu">
		<v-dialog />

	    <vue-context ref="menu">
	      <template slot-scope="msg">
					<li><a href="#" v-on:click.prevent="reply(msg.data)">Ответить</a></li>
					<li><a href="#" v-on:click.prevent="copyText(msg.data.body)">Копировать текст</a></li>
					<li><a href="#" v-on:click.prevent="forwardMessage(msg.data.body)">Переслать сообщение</a></li>
					<li><a href="#" v-on:click.prevent="confirmDelete(msg.data.index)">Удалить сообщение</a></li>
					<li><a href="#" v-on:click.prevent="highlightMessage(msg)">Выделить сообщение</a></li>
	      </template>
	    </vue-context>	
	</div>
</template>


<script>
	import VueContext from 'vue-context'
	export default {
		components: {
			VueContext
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
								//this.$emit('delete-message', id)
                this.$delete(this.messages, id)
                this.$modal.hide('dialog')
							}
						}
					]
				})
			},
			async copyText(text) {
        try {
          const toCopy = text || location.href
          await navigator.clipboard.writeText(toCopy)
        }
        catch (err) {
          console.error('Failed to copy: ', err)
        }      
      },
      reply() {},
      forwardMessage() {},
      highlightMessage() {}
		},		
	}

</script>

<style>
@import '~vue-context/dist/css/vue-context.css';
</style>