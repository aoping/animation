<template>
    <div @click="click">
        {{msg}}</div>
</template> 
  
<script> 
export default {
    name: 'first',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        click() {
            alert('hello')
            aaa
        }
    }

} 
</script> 
  
<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped>
h1,
h2 {
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
