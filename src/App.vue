<script setup>

// Memaanggil komponen vue dari folder coponens, dan mendefinisikannya
// Sehingga dapat dipakai di dengan tab html yang namanya
// <DecRender>
import DecRender from './components/DeclarativeRendering.vue'
import Props from './components/Props.vue'
import Method from './components/Method.vue'
import Model from './components/Model.vue'
import Conditional from './components/Conditional.vue'
import Looping from './components/Looping.vue'
import Lifecycle from './components/Lifecycle.vue'

</script>

<template>
  <h2>Contoh Declarative Rendering</h2>
  <DecRender/>
  <hr>
   <h2>Props</h2>
    <!-- Mendampilkan data yang ada di komponen Props, 
    dan mengisi datannya dengan menggunakan
    kelas message. Message ini adalah nama data yang telah 
    didefinisikan Sebelumnya-->
  <Props :pesan="'Helloooo'" :angka="11" :teks="'MMMM'"/>
  <hr>
   <h2>Contoh Method @Click</h2>
  <Method/>
  <hr>
  <h2>Contoh Model</h2>
  <Model/>
  <hr>
  <h2>Contoh Conditional</h2>
  <Conditional/>
  <hr>
  <h2>Contoh Looping</h2>
  <Looping/>
  <hr>
 
  <h2>Contoh Lifecycle</h2>
  <Lifecycle/>

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
</style>
