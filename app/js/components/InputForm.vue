
<template>
	<form>
		<div>input form</div>
		<div>{{ inputValue }}</div>
		<input type="text" placeholder="input something" v-model="inputValue">
		<button v-on:click.prevent="send" type="submit">send</button>
	</form>
</template>

<script type="text/javascript">
	export default {
		data: function() {
			return {
				inputValue: '',
			}
		},
		methods: {
			send() {
				console.log(this.inputValue)
			},
		},
	}
</script>

<style lang="scss">
	form {
		background: #eee;
		padding: 12px;
	}
</style>
