<script>
export default{
    // Mendefinisikan data yang akan kita buat, misanya data surat
    // Yang isinya penting
    data(){
        return {
            // Mendefinisikan data awal sebagai false
            status: false
        }
    },
    methods: {
        // Lalu mendeklarasikan method tekan yang mengubah
        // Status flase di atas menjadi true
        tampil(){
            this.status = !this.status
        }
    }
}
</script>

<template>
<!-- Menggunakan pengkondisian dengan vue -->
<div v-if="status">DITAMPILKAN</div>
<div v-else>DISEMBUNYIKAN</div>

<!-- Menampilkan data di atas yang defaultnya false, ke
true dan dappat ditampilkan -->
<button @click="status = true">
    Tampil
</button>
<br>
<br>

<!-- Sama saja, tapi bisa tampil dan sembunyikan -->
<button @click="status =! status">
    Tampil
</button>
<br>
<br>
<!-- Sama saja tapi pakai methods -->
<button @click="tampil">
    Tampil
</button>

</template>

<style scoped>


</style>




