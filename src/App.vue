<template>
   <div id="app">
        <keep-alive>
            <router-view id="view"></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style type="text/css" media="screen">
	#app{
		width:100%;
		height:100%;
	}
	#view{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
</style>
