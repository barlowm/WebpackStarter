// AppComponent.vue
<template>
	<div>
		<h1>Hello from the AppComponent</h1>
		<section1></section1>
	</div>
</template>

<script>
	import section1 from "./section1.vue";
	export default {
		name: "App",
		components: {
			section1
		}
	}
</script>
