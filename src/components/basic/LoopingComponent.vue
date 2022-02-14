<script>
export default{
    // Mendefinisikan data yang akan kita buat, misanya data surat
    // Yang isinya penting
    data(){
        return {
            // Mendefinisikkan banyak data array untik dilooping
            kegiatan: [
                {
                    id: 1,
                    aktifitas: 'Makan'
                },
                {
                    id: 2,
                    aktifitas: 'Minum'
                },
                {
                    id: 3,
                    aktifitas: 'Tidur'
                }
            ]
        }
    },
}
</script>

<template>
<ul>
    <!-- Menampilkan data yang telah didefinisikan di atas
    index adalah hasil urutan data, array yang dimilau dari nol-->
    <li v-for="(k, index) in kegiatan" :key="k.id">
       {{index}} - {{k.aktifitas}}
    </li>
</ul>

</template>

<style scoped>


</style>




