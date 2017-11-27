<template>
    <div id="">
		{{$route.params.id}}
		<router-link to="/"><div>跳转到主页(非浏览器返回)</div></router-link>
    </div>
</template>
<script>
export default {
    name: "",
    data: () => ({

    })
}
</script>
<style lang="css" scoped>

</style>
