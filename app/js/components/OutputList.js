
export default {
	// props: ['item'],
	emits: ['didClick', 'didInit'],
	data: function() {
		return {
			lists: [],
		}
	},
	methods: {
		addItem(item) {
			// console.log('add item')
			// console.log(item)
			this.lists.push(item)
		},
	},
	template: `
<div v-on:click.prevent="$emit('didClick')">component/output-list</div>
<ul>
	<li v-for="list in lists">{{ list }}</li>
</ul>
	`,
	mounted: function() {
		// console.log('mounted!')
		this.$emit('didInit', this)
		console.log(this.item)
	},
}
