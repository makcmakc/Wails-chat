<template>
	<div class="main-input">

		<form @submit.prevent="onSubmit">
			<input 
				type="text" 
				class="msg-input" 
				placeholder="Написать сообщение..."
				v-model="newMsg"
				autocomplete="off"
			>
		
		</form>
		
			<div class="btn audio__btn">
				<i v-if="newMsg !== ''" class="material-icons">send</i>
				<i v-else class="material-icons">
					<audio-record @result="onResult" /></i>
			</div>	

			<!--<div class="audio btn">
				<i v-if="newMsg !== ''" class="material-icons">send</i>
				<i v-else class="material-icons">keyboard_voice</i>
			</div>-->
		<!--

					<i class="material-icons">attach_file</i>

				<i class="material-icons">sentiment_satisfied_alt</i>		
		<div class="extra-functions">

			<div class="paperclip btn">
				<i class="material-icons">attach_file</i>
			</div>		

			<div class="emoji btn">
				<i class="material-icons">sentiment_satisfied_alt</i>			
			</div>

	

		</div>-->
	</div>
</template>


<script>
import AudioRecord from './AudioRecord'

	export default {
		data() {
			return {
				newMsg: '',
			}
		},
		methods: {
			onSubmit() {
				if (this.newMsg.trim()) {

					const msg = {
						time: Date.now() ,
						content: this.newMsg,
						state: true
					}

					this.$emit('add-new-msg', msg)
					this.newMsg = ''
				}

			},
			onResult (data) {
				this.$emit('add-audio-msg', {src: window.URL.createObjectURL(data)})
				//console.log(typeof data)
			}			
		},
		components: {
			AudioRecord
		},
		computed: {
		},
		mounted() {

		}
	};
</script>


<style>

.main-input {
  position: relative;
}

.msg-input {
	max-width: 65%;
	width: 50%;
	height: 30px;
	background: transparent;
	border: none;
	text-indent: 10px;

	word-break: keep-all;

	position: absolute;
	left: -150px;
	top: 8px;
}

#msgInut {
	width: 300px;
	height: 30px;
	font-size: 16px;
	margin-left: 80px;
	position: absolute;
}

.audio__btn {
	position: absolute;
	bottom: -39px;
	right: 300px;
	cursor: pointer;
}

</style>