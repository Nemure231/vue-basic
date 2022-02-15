<script>
import Nav from './components/Nav.vue'

export default{
    components: {Nav},
    // Menjalankan method emit dari komponen Refs.vue
    methods: {
        onTekan(val){
          alert('event dari child, menggunakan emits, dan mengirim value:' + val);
        }
    }
}

</script>

<template>
  <h1 class="title">Web Belajar Vue Saya</h1>
  <br><br>
  <Nav/>
  
  <hr/>

<router-view @child-klik="onTekan"></router-view>



</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  color: rgb(82, 0, 123);
}
</style>
