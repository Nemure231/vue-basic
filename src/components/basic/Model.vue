<script>
// Mengimport komponen untuk emit model
import ModelChild from './ModelChild.vue'


export default{
    // Mendefinisikan koponen untuk emit model
    components:{
        ModelChild
    },
    // Mendefinisikan data yang akan kita buat
    data(){
        return {
            sapaan: 'selamat pagi',
            child_sapaan: ''
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
<label>Sama aja, tapi pakai method</label>
<br>
<input :value="sapaan" @input="sapaan = $event.target.value">
<br>
<br>

<!-- Sama aja, tapi pakai method yang dideklarasikan, 
di atas, dan pake tambahan event-->
<label>Ini pake method tambah event</label>
<br>
<input :value="sapaan" @input="ketik_event($event)"> 


<br>

<h2> Mengupdate model melalui child component</h2>

<div>{{child_sapaan}}</div>

<br><br>
<label>Cara ribet pake emit</label>
<br>
<!-- Menset emitnya -->
<ModelChild
    :model-value="child_sapaan"
    @update:model-value="child_sapaan = $event"
/>

<br><br>

<label>Cara gampang pake model</label>
<br>
<!-- Menset emitnya -->
<ModelChild v-model="child_sapaan"
/>

</template>


<style scoped>


</style>




