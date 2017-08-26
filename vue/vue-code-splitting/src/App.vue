<template> 
<div>
  <router-link to="/first">跳转第一个页面</router-link> 
  <router-link to="/second">跳转第二个页面</router-link> 
  <div id="view"> 
    <router-view></router-view> 
  </div> 
</div>
</template> 
  
<script> 
export default { 
 name: 'app'
} 
</script> 
<style> 
</style>
