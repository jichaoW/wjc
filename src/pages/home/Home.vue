<template>
	
	
	<index-header />
	
	
</template>
<script>
	import header from './header.vue';
	export default {
		name: "home",
		data() {
			return {
				msg: "home"
			}
		},
		components: {
			"index-header" : header
		}
	}
</script>
<style>
	
</style>