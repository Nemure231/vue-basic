<script>
export default{
    // Bisa juga melempar data ke dalam props
    data(){
        return {
            lempar_data: 'INi data yang dilempar! Tangkap!'
        }
    },
    // Mendefisinikan message sebagai string, sehingga yang 
    // ditampilkan Adalah sting, jika kita mendefinisikan yang 
    // berbeda seperti  Interger maka tipe datanya harus sesuai
    props: {
        // Bisa definisisskan typenya, dan data defaultnya
        teks: {
            type: String,
            default: 'kosong'
        },
        // Sama aja tapi lebih singkat
        pesan: String,
        angka: Number
    }
}
</script>

<template>
<!-- Lalu ini sama saja, tapi declarative renderingnya menggunakan
Perantara props, yang harus dikirim ke app -->

<div>{{teks}}</div>
<br>
<!-- Hsil yang lebih sederhana -->
<div>{{pesan}}</div>
<div>{{angka}}</div>

<br>

<!-- Hasil tangkapan data dari data() yang lebih dinamis-->
<input :value="lempar_data">
 
</template>

<style scoped>


</style>









