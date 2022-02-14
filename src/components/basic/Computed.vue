<script>
export default{
    // Mendefinisikan data yang akan kita buat
    data(){
        return {
            angka_1: 0,
            angka_2: 0,
            harga_1: 0,
            harga_2: 0
        }
    },
    // Sebuah fungsi yang mengubah data pertambahan secara langsung
    // dan pada kasus asli untuk menampung logika tentang angka
    // misal jika buku sudah dibeli habis, maka logicnya bisa diatur di sini
    computed:{
        total(){
            return parseInt(this.angka_1) + parseInt(this.angka_2)
        },
        jumlah_max(){
             return parseInt(this.angka_1) > parseInt(this.angka_2) ? 'Angka_1 lebih besar dari Angka_2' : 'Angka_1 lebih kecil dari Angka_2'
        },
        //Menggunakan computed get dan set, yang artinya dapat mendefinisikan
        //Value yang telah diset sebelumnya, dan value tersebut
        //dapat dibagungkan ke fungsi
        diskon: {
            get(){
                return parseInt(this.harga_1) + parseInt(this.harga_2)
            },
            set(value){
                this.harga_1 -= value;
                this.harga_2 -= value;
            }

        }
    },
    methods:{
        // Di sini computed yang bernama diskon dapat ditaruh di dalam
        // ethod, sehingga akan dijalankan lewat event click
        tambahDiskon(){
            this.diskon = 500;
        }
    }

}
</script>

<template>
<div>{{total}}</div>
<br>
<div>{{jumlah_max}}</div>
<br>
<input v-model="angka_1"> 
<br><br>
<input v-model="angka_2"> 


<br><br><br>
<span>Coputed Set dan Get</span>
<br>
<div>{{diskon}}</div>
<br>
<input v-model="harga_1"> 
<br><br>
<input v-model="harga_2">
<br><br>
<button @click="tambahDiskon">Tambah Diskon</button>
</template>


<style scoped>


</style>




