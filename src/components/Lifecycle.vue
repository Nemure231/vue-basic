<script>
export default{

    data(){
        return {
            pesan: 'helllppp'
        }
    },


    // Kasus NYATA
    // Yang Paling sering dipakai adalah Created dan MOunted
    // Created contohnya untiuk mengambild ata di api
    // Sebelum komponen dirender dia akan mencoba untuk dapetin
    // data atau nge-fetch lalu disimpan dulu
    // Nanti kalo sudah selesai dirender hasil data
    // dari api tadi ditampilkan di komponennya.
    // Created cocok untuk ngembil data di api
    // Mounted untuk memproses data yang tdai berhasil diambil



    // Ketika komponen dimuat, atau direfresh, 
    //akan menjalankan keempat fungsi ini
    // dipanggil sebelum create
    beforeCreate(){
        console.log('before create');
    },
    // DIpanggil sebelum templatenya dirender
    created(){
        console.log('created');
        console.log(this.pesan);
        // Gak bisa diambil, karena belum dirender
        console.log(document.getElementById('lifecycle'));
    },
    // Dipanggil sebelum mounted
    beforeMount(){
        console.log('before mount');
    },
    // DIpanggil setelah templatenya selesai dirender
    mounted(){
        console.log('mounted');
        console.log(this.pesan);
        // Bisa kebaca karena udah dirender
        console.log(document.getElementById('lifecycle'));
    },


    // Dijalankan sebelum update, artinya ngambil text sebelum diupdate
    beforeUpdate(){
        console.log('before update');
        console.log(document.getElementById('lifecycle').textContent);
    },
    // Dijalankan ketika ada update (tanpa refresh), yang
    // akan merender ulang, dan ngambil text yang udah diupdate
    updated(){
        console.log('updated');
        console.log(document.getElementById('lifecycle').textContent);
    },


    // DIjalankan sebelum unmounted
    beforeUnmount(){
        console.log('before destroy');
    },
    // Dijalankan ketika komponen dibuang atau dihancurkan,
    // Mungkin maksudnya kalo ada yang dihapus
    unmounted(){
        console.log('before destroyed');
    }
}
</script>

<template>
<div id="lifecycle">{{pesan}}</div>
<br>
<br>
<button @click="pesan = 'ketika telah diubah atau dirender ulang'">
Tekan
</button>
</template>

<style scoped>


</style>









