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
		<h1>hello world</h1>
		<p>vue-sample/nginx</p>
		<div id="app">
			<output-list></output-list>
			<input-form></input-form>
			<hr>
			<form>
				{{ test }}<br>
				<input type="text" name="" v-model="test">
				<button v-on:click.prevent="send" type="submit">button</button>
			</form>
		</div>
		<script type="text/javascript">
			console.log(window.vue)

			const app = Vue.createApp({
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
			app.mount('#app')
		</script>
		<!-- <div id="app2">
			<output-list></output-list>
			<input-form></input-form>
			<hr>
			<form>
				{{ test }}<br>
				<input type="text" name="" v-model="test">
				<button v-on:click.prevent="send" type="submit">button</button>
			</form>
		</div>
		<script type="text/javascript" src="/js/bundle.js?<?php echo time() ?>"></script> -->
	</body>
</html>
