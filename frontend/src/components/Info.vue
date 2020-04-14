<template>
	<div class="info">
		<InfoNavigation />

		<modal 
			name="contact-info" 
			:width="400" 
			height="auto" :scrollable="true">

			<div class="contact-settings-content">
				<h3>Информация</h3>

				<header class="contact__header">
					<div class="close" v-on:click="hide">
						<i class="material-icons">clear</i>
					</div>

					<div class="contact-profile flex-row">
						<div class="contact__image"></div>
						<div class="contact__name">Элис</div>  <br>
						<div class="contact__status">был(а) сегодня в 23:14</div>	
					</div>			
				</header>

				<section class="contact__info">	
					<i class="material-icons">info</i>
					<div class="contact__phone flex-row">
						<div id="number">+7 456 344 39 35</div>
						<label for="number">Телефон</label>
					</div>

					<div class="contact__name flex-row">
						<div id="name">@maxa</div>
						<label for="name">Имя пользователя</label>
					</div>

					<div class="contact__notifications flex-row">
						<i class="material-icons">notifications</i>
						<div id="notification">Уведомления</div>

						<toggle-button 
							:value="true"
							color="#82C7EB"
							:sync="true"
							:labels="true"/>						
					</div>
				</section>

				<footer class="contact__actions">
					<i class="material-icons">format_list_bulleted</i>
					<ul>
						<li>Очистить историю</li>
						<li>Удалить чат</li>
						<li>Заблокировать</li>
					</ul>
				</footer>				
			</div>
		</modal>		


	</div>
</template>


<script>
	import InfoNavigation from '@/components/InfoNavigation.vue'

	export default {
		methods: {
			hide () {
				this.$modal.hide('contact-info');
			},
			/*pushNotification: function() {
				window.backend.MessageData
			}*/
		},
		components: {
			InfoNavigation
		}	
	};
</script>
