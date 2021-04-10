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
	template: `
<form>
	<div>input form</div>
	<div>{{ inputValue }}</div>
	<input type="text" placeholder="input something" v-model="inputValue">
	<button v-on:click.prevent="send" type="submit">send</button>
</form>
	`,
}
