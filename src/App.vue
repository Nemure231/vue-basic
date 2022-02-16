<script>

</script>

<template>
  <h1 class="title">Web Belajar Vue Saya</h1>
  <router-view name="Nav"></router-view>
  <hr/>

  <router-view name="Home"></router-view>


<!-- <router-view ></router-view> -->

<!-- 
  <button @click="klikRef">Tekan</button>
  <br> -->



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
