<template>
  <div id="app">
    <router-view></router-view>
    <footer-buttom></footer-buttom>
  </div>
</template>

<script>
	import footerButtom from "@/components/common/footer"
export default {
  name: 'app',
  components:{
  	footerButtom
  }
}
</script>

<style lang="less">
@import "~style/sj-reset.css";
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html,body{
		width: 100%;
		height: 100%;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
