<template>
    <footer class="footer-wrapper">
      <p>我是footer</p>
    </footer>
</template>
<script>
   
    export default {
       
    }
</script>
<style scoped>
    .footer-wrapper {
        position: absolute;
        left: 0;bottom: 0;
        width: 100%;
        height: 0.5rem;
        font-size: 0.16rem;
        z-index: 99;
        background-color: #fff;
    }
    p{
    	text-align:center;
    	line-height:.5rem;
    	color:red;
    }
</style>