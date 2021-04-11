<!DOCTYPE html>
<html lang="ja" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>vue sample</title>
		<link rel="stylesheet" href="/css/bundle.css?<?php echo time() ?>">
	</head>
	<body>
		<script type="text/javascript" src="/js/bundle.js?<?php echo time() ?>"></script>
		<script type="text/javascript" src="https://unpkg.com/vue@next"></script>
		<h1>vue-sample</h1>
		<div id="app">
			<output-list v-on:did-click="didClick2" v-on:did-init="didInit"></output-list>
			<input-form v-on:did-click="didClick"></input-form>
		</div>
		<script type="text/javascript">
			// console.log(window.vue)
			const app = Vue.createApp({
				data: function() {
					return {
						outputList: null,
						test: [1, 2, 3],
					}
				},
				methods: {
					didClick(e) {
						// console.log('did click')
						// console.log(e)
						this.outputList.addItem(e)
					},
					didClick2(e) {
						console.log('did click 2')
					},
					didInit(e) {
						console.log('didInit')
						this.outputList = e
					},
				},
			})

			app.component('input-form', window.vue.components.InputForm)
			app.component('output-list', window.vue.components.OutputList)
			app.mount('#app')

			console.log(app)
		</script>
	</body>
</html>
