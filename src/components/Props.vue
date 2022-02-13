<script>
export default{
    // Mendefisinikan message sebagai string, sehingga yang 
    // ditampilkan Adalah sting, jika kita mendefinisikan yang 
    // berbeda seperti  Interger maka tipe datanya harus sesuai
    props: {
        pesan: String,
        angka: Number
    }
}
</script>

<template>
<!-- Lalu ini sama saja, tapi declarative renderingnya menggunakan
Perantara props, yang harus dikirim ke app -->
<div>{{pesan}}</div>
<div>{{angka}}</div>
 
</template>

<style scoped>


</style>









