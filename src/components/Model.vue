<script>
export default{
    // Mendefinisikan data yang akan kita buat
    data(){
        return {
            sapaan: 'selamat pagi'
        }
    },
    methods: {
        ketik_event($event){
            this.sapaan = $event.target.value;
        }
    }
}
</script>

<template>

<div>{{sapaan}}</div>
<!-- V model mendampilkan inputan secara langsung 
di data sapaan di atas-->
<input v-model="sapaan">
<br>
<br>

<!-- Sama aja, tapi pakai method, 
tapi ini namanya 2 way data binding -->
<input :value="sapaan + ' ini pakai method'" @input="sapaan = $event.target.value">
<br>
<br>

<!-- Sama aja, tapi pakai method yang dideklarasikan, 
di atas, dan pake tambahan event-->
<input :value="sapaan +' ini pake method tambah event'" @input="ketik_event($event)"> 
</template>


<style scoped>


</style>




