
// import { createApp } from 'vue'
import InputForm from './js/components/InputForm.js'
import OutputList from './js/components/OutputList.js'
import style from './sass/style.scss'

window.vue = {
	components: {
		InputForm: InputForm,
		OutputList: OutputList,
	},
}

/*
document.addEventListener('DOMContentLoaded', () => {
	const app = createApp({
		data: function() {
			return {
				test: '',
			}
		},
		methods: {
			send() {
				console.log(this.test)
			},
		},
	})

	app.component('input-form', window.vue.components.InputForm)
	app.component('output-list', window.vue.components.OutputList)
 	app.mount('#app2')
});
*/
