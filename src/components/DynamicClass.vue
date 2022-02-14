<script>
export default{
    // Mendefinisikan data yang akan kita buat
    data(){
        return {
            notif: true,
            classTebal: 'tebal',
            classSukses: 'sukses'

        }
    },
}
</script>

<template>

<div :class="notif ? 'sukses' : 'bahaya' ">
STATUS
</div>

<br>
<!-- 
    Kelas Dinamis berfungsi untuk memberi pngkondisian pada
    kelas dari sebuah perubahan. Kelasnya dapt dicampur menjadi satu
    Dengan array, baik itu dari data(classTebal) atau non-data(bahaya)
-->
<div :class="notif ? 'sukses' : ['bahaya', classTebal]">
STATUS
</div>
<br>
<button @click="notif =! notif">
    Ubah status
</button>


</template>

<style scoped>
    .tebal{
        font-weight: 700;
    }
    .sukses{
        color: green;
    }
    .bahaya{
        color: red;
    }
</style>




