<script>
export default{
    // Mendefinisikan data yang akan kita buat, misanya data surat
    // Yang isinya penting
    data(){
        return {
            count: 0
        }
    },
    // Mendefinisikan method, yang mengambil data count di atas
    // Dengan menggunakan this.count, artinya data count yang INI,
    // DI SINI
    methods: {
        tekan(){
            this.count +=2;
        }
    }
}
</script>

<template>


<div>{{count}}</div>
<button @click="count++">
    Tekan
</button>

<br>
<br>
<!-- Sekarang pakai method -->
<button @click="tekan">
Tekan Pakai Method tambah 2
</button>
 
</template>

<style scoped>


</style>




