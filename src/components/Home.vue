<template>
  <div class="hello">
	  <router-link v-for="(item,index) in lists" key="index" :to="{ name: 'Detail', params: { id: item}}"><List :list = 'item'></List></router-link>

  </div>
</template>

<script>
import List from './List'
export default {
	name: 'HelloWorld',
	data () {
		return {
			lists:[],
			currentPosition:0
		}
	},
	components: {
	  List
	},
	created() {
	  //do something after creating vue instance
		setTimeout( ()=> {
			this.lists = [1,2,3,4,5,6,7,8,9,10,11]
		},10)
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
