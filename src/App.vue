<template>
	<div id="app">
	<keep-alive>
		<router-view v-if="$route.meta.keepAlive"></router-view>
	</keep-alive>
	<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>
<script>
export default {
  name: 'app',

}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
</style>
