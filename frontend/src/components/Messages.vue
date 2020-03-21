<template>
	<div class="conversation">
		<div class="container">

    <!--<div class="message__day">
      <span>{{ time | moment("Do MMMM") }}</span>
    </div>-->

    <div v-for="(msg, i) in messages" v-bind:key="i"> 
      <div class="message" :class="{received: msg.received}" @contextmenu.prevent="$refs.menu.open($event, { body: msg.content, time: msg.time, index: msg.id })">
      {{ msg.content }}
      <span class="metadata">
      <span class="time">{{ msg.time | moment("k:mm") }}</span>
      <span class="tick"><svg width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>
      </span>
      </span>						
      </div>	
    </div>

		<v-dialog />

    <vue-context ref="menu">
      <template slot-scope="msg">
			<li>
				<a href="#" v-on:click.prevent="reply(msg.data)">Ответить</a>
			</li>
			<li>
				<a href="#" v-on:click.prevent="copyText(msg.data.body)">Копировать текст</a>
			</li>
			<li>
				<a href="#" v-on:click.prevent="forwardMessage(msg.data.body)">Переслать сообщение</a>
			</li>
			<li>
				<a href="#" v-on:click.prevent="confirmDelete(msg.data.index)">Удалить сообщение</a></li>
			<li>
				<a href="#" v-on:click.prevent="highlightMessage(msg)">Выделить сообщение</a>
			</li>
      </template>
    </vue-context>	
    </div>

	</div>
</template>


<script>
	import VueContext from 'vue-context'
  //import moment from 'moment'

	export default {
    name: 'messages',
    data() {
      return {

      }
    },
		props: ['messages'],
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
      highlightMessage(msg) {
        console.log(msg)
      }
		},
		mounted() { 
			//const intElemScrollTop = window.intElemScrollTop
			document.querySelector('.conversation .container div').scrollTop = 600
		}
	};
</script>


<style>
@import '~vue-context/dist/css/vue-context.css';
</style>