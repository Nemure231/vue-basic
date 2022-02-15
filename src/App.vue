<script>
// import Nav from './components/Nav.vue'

export default{
    // components: {Nav},
    // Menjalankan method emit dari komponen Refs.vue
    methods: {
        onTekan(val) {
          alert('event dari child, menggunakan emits, dan mengirim value:' + val);
        }
    }
}

</script>

<template>
  <h1 class="title">Web Belajar Vue Saya</h1>
  <br><br>
  <router-view name="Nav"></router-view>
  
  <hr/>

<router-view name="DecRender"></router-view>
<router-view name="Props"></router-view>
<router-view name="Method"></router-view>
<router-view name="Model"></router-view>
<router-view name="Conditional"></router-view>
<router-view name="Looping"></router-view>
<router-view name="Lifecycle"></router-view>
<router-view name="Computed"></router-view>
<router-view name="Watcher"></router-view>
<router-view name="DynamicClass"></router-view>
<router-view name="Refs" @child-klik="onTekan"></router-view>



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
