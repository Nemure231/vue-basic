<script>
export default{
    // Mendefinisikan data yang akan kita buat
    data(){
        return {
            sapaan: 'selamat pagi'
        }
    },
    // FUngsi mengawasi suatu data, ketika data yang telah berubah dapat didapatkan
    watch:{
        sapaan(value){
            alert('Inputan telah berubah menjadi: ' + value);
        }
    }
}
</script>

<template>

<div>{{sapaan}}</div>
<br>
<input v-model="sapaan">

</template>


// Scoped berarti stylenya hanya dipakai pada file ini saja,
// TIdak dapat berpengaruh pada file-file vue yang lain
<style scoped>

div {
    color: red;
}

</style>




