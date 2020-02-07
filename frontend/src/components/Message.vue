<template>
	<div>
		<div class="message">
			<p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.</p>
		</div>		
	</div>
</template>


<script>
	export default {
		data: () => ({

		})
	};
</script>


<style>
	.back-img {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.image {
		background-image: url('../assets/images/wails.png');
		background-size: cover;
		width: 450px;
		height: 450px;
		opacity: .7;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.message {
		max-width: 80%;
		width: 600px;
		height: auto;
		padding: 10px;
		background: #EFFDDE;
		border-radius: 8px;
		float: right;
		margin-right: 15px;
		margin-top: 20px;
		z-index: 99;
	}
</style>