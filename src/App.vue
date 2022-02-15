<script>

export default{
    // Menjalankan method emit dari komponen Refs.vue
    methods: {
        onTekan(){
          alert('event dari child, menggunakan emits');
        }
    }
}

</script>

<template>
  <!-- <refs @child-klik="onTekan"></refs> -->

  <h1 class="title">Web Belajar Vue Saya</h1>
  <br><br>
  
  <div class="wrap-link">
    <router-link to="/dec-render">Decrender</router-link>
    <router-link to="/props">Props</router-link>
    <router-link to="/method">Method</router-link>
    <router-link to="/model">Model</router-link>
    <router-link to="/conditional">Conditional</router-link>
    <router-link to="/looping">Looping</router-link>
    <router-link to="/lifecycle">Lifecycle</router-link>
    <router-link to="/computed">Computed</router-link>
    <router-link to="/watcher">Watcher</router-link>
    <router-link to="/dynamic-class">Dynamic Class</router-link>
    <router-link to="/refs">Refs/Emit</router-link>
  </div>

  <br /><br />
  <hr />

  <router-view @child-klik="onTekan">
    
  </router-view>
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

.wrap-link {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

a {
  text-decoration-line: none;
  font-weight: 600;
  color: cornflowerblue;
}

.title {
  color: rgb(82, 0, 123);
}

.wrap-link > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}

.wrap-link > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-top: calc(1rem * var(--tw-space-x-reverse));
  margin-bottom: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
</style>
