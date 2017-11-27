<template>
    <div class="list">
		{{list}}
    </div>
</template>
<script>
export default {
    name: "",
    data: () => ({

    }),
	props: {
		list:{
			type:Number,
			required:true,
		}
	}
}
</script>
<style lang="css" scoped>
	.list {
		height: 100px;
		background-color: #ffffff33;
		border: 1px solid #000;
	}
</style>
