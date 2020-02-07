<template>
	<div>
		<div 
			class="contact"
			v-for="contact in contacts" :key="contact.id"
			>
				<h4>{{ contact.name }}</h4>

			<p>
				{{ contact.msg }}
			</p>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'contacts',
		data: () => ({
			contacts: [
				{name: 'Maxim', img: '', id: 1, msg: 'Lorem ipsum dolor sit amet.'},
				{name: 'Toni', img: '', id: 2, msg: 'Далеко-далеко за словесными горами в стране.'},
				{name: 'Den', img: '', id: 3, msg: 'Lorem ipsum dolor sit amet.'},
			]
		}),
	};
</script>


<style>
	.contact {
		color: #222222;
		background: transparent;
		width: 100%;
		height: 70px;
		margin-bottom: 2px;
		text-align: left;
		cursor: pointer;

	}

	.contact h4 {
		padding-top: 14px;
		padding-left: 70px;
		font-weight: 600;
	}

	.contact p {
		color: #999999;
		padding-top: 10px;
		padding-left: 70px;		
		width: inherit;
		white-space: nowrap;
	}

	.contact:hover {
		background: #F1F1F1;
		transition: .1s;
	}
</style>
