<script>
export default{
    // Mendefinisikan data yang akan kita buat, misanya data surat
    // Yang isinya penting
    data(){
        return {
            surat: 'penting'
        }
    }
}
</script>

<template>
 <!-- 01. Declarative rendering, artinya merender data yang beradd
di dala export default, dan dapat ditampilkan di dalam html
menggunakan {{}}. Sama kayak alpine bedanya di sini harus pake
tag script di atas tag template -->
<div>
    {{surat}}
</div>

<!-- Contoh merender dengan menggunakan kelas value tambah : 
(titik dua) di depan, nanti data dalam export default masuk
 ke dalam value mirip dengan alpine -->
<input :value='surat'>
 
</template>

<style scoped>


</style>

