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
						<svg id="close-icon" x="0px" y="0px" width="15" height="15" viewBox="0 0 386.667 386.667" fill="#999999">
						<path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>	
					</div>

					<div class="contact-profile flex-row">
						<div class="contact__image"></div>
						<div class="contact__name">Элис</div>  <br>
						<div class="contact__status">был(а) сегодня в 23:14</div>	
					</div>			
				</header>

				<section class="contact__info">	
					<svg id="about-icon" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 330 330" fill="#999999">
						<g><path d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z
						M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"/>
						<path d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991
						c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"/><path d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z
						"/></g>
					</svg>

					<div class="contact__phone flex-row">
						<div id="number">+7 456 344 39 35</div>
						<label for="number">Телефон</label>
					</div>

					<div class="contact__name flex-row">
						<div id="name">@maxa</div>
						<label for="name">Имя пользователя</label>
					</div>

					<div class="contact__notifications flex-row">
						<svg id="notification-icon" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 512 512" fill="#999999">
							<path d="m450.201 407.453c-1.505-.977-12.832-8.912-24.174-32.917-20.829-44.082-25.201-106.18-25.201-150.511 0-.193-.004-.384-.011-.576-.227-58.589-35.31-109.095-85.514-131.756v-34.657c0-31.45-25.544-57.036-56.942-57.036h-4.719c-31.398 0-56.942 25.586-56.942 57.036v34.655c-50.372 22.734-85.525 73.498-85.525 132.334 0 44.331-4.372 106.428-25.201 150.511-11.341 24.004-22.668 31.939-24.174 32.917-6.342 2.935-9.469 9.715-8.01 16.586 1.473 6.939 7.959 11.723 15.042 11.723h109.947c.614 42.141 35.008 76.238 77.223 76.238s76.609-34.097 77.223-76.238h109.947c7.082 0 13.569-4.784 15.042-11.723 1.457-6.871-1.669-13.652-8.011-16.586zm-223.502-350.417c0-14.881 12.086-26.987 26.942-26.987h4.719c14.856 0 26.942 12.106 26.942 26.987v24.917c-9.468-1.957-19.269-2.987-29.306-2.987-10.034 0-19.832 1.029-29.296 2.984v-24.914zm29.301 424.915c-25.673 0-46.614-20.617-47.223-46.188h94.445c-.608 25.57-21.549 46.188-47.222 46.188zm60.4-76.239c-.003 0-213.385 0-213.385 0 2.595-4.044 5.236-8.623 7.861-13.798 20.104-39.643 30.298-96.129 30.298-167.889 0-63.417 51.509-115.01 114.821-115.01s114.821 51.593 114.821 115.06c0 .185.003.369.01.553.057 71.472 10.25 127.755 30.298 167.286 2.625 5.176 5.267 9.754 7.861 13.798z"/></svg>	
						<div id="notification">Уведомления</div>

						<toggle-button 
							:value="true"
							color="#82C7EB"
							:sync="true"
							:labels="true"/>						
					</div>
				</section>

				<footer class="contact__actions">
					<svg class="icon" height="18px" viewBox="0 0 374.706 374.706" width="18px"><path id="path-1_59_" d="m80.294 53.529h294.412v53.529h-294.412z" transform="translate(4 3)"/><path d="m80.294 160.588h267.647v53.529h-267.647z"/><path id="path-1_58_" d="m80.294 267.647h294.412v53.529h-294.412z" transform="translate(4 11)"/><path id="path-2_11_" d="m0 53.529h53.529v53.529h-53.529z" transform="translate(1 3)"/><path id="path-2_10_" d="m0 160.588h53.529v53.529h-53.529z" transform="translate(1 7)"/><path id="path-2_9_" d="m0 267.647h53.529v53.529h-53.529z" transform="translate(1 11)"/></svg>
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
//	import Icons from '@/components/Icons.vue'
	import InfoNavigation from '@/components/InfoNavigation.vue'

	export default {
		methods: {
			hide () {
				this.$modal.hide('contact-info');
			}
		},
		components: {
		//	Icons,
			InfoNavigation
		}	
	};
</script>


<style>













</style>