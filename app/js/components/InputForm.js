
export default {
	emits: ['didClick'],
	data: function() {
		return {
			inputValue: '',
		}
	},
	methods: {
		send() {
			// console.log(this.inputValue)
			this.$emit('didClick', this.inputValue)
			this.inputValue = ''
		},
	},
	template: `
<form>
	<div>component/input-form</div>
	<div>{{ inputValue }}</div>
	<input type="text" placeholder="input something" v-model="inputValue">
	<button v-on:click.prevent="send" type="submit">send</button>
	<!-- <button v-on:click.prevent="$emit('didClick', inputValue)" type="submit">send</button> -->
</form>
	`,
}
