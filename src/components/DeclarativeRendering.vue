<script>
export default{
    // Mendefinisikan data yang akan kita buat, misanya data surat
    // Yang isinya penting
    data(){
        return {
            surat: 'penting',
            html: `<span style="color:blue;">Pakai V-html, ngerender span yang warna biru</span>`,
            tampil: false
        }
    }
}
</script>

<template>
 <!-- 01. Declarative rendering, artinya merender data yang beradd
di dala export default, dan dapat ditampilkan di dalam html
menggunakan {{}}. Sama kayak alpine bedanya di sini harus pake
tag script di atas tag template -->
<div v-text="surat + ' ini pakai v-text'">

</div>
<br>

<!-- Contoh merender dengan menggunakan kelas value tambah : 
(titik dua) di depan, nanti data dalam export default masuk
 ke dalam value mirip dengan alpine -->
<input :value="surat + ' ini pakai v-bind atau : di depan kelas'">

<br><br>

<div v-html="html">
</div>


<br>

<div v-show="tampil">
    tampil
</div>

<div v-once v-show="tampil = true">
    tampil, tapi gak dijalanin, karena pake v-once
</div>
<br>

<button @click="tampil =! tampil">
Tampil pakai v-show + method
</button>
 
</template>

<style scoped>




</style>

