<script>
export default{
    // Mendefinisikan nama emits, yang keuidan menulis method onTkean, untuk didefiniskan
    // setelah didefiniskan akan dikirim ke app.vue, yang merupakan komponen utama
    emits: ['child-klik'],
    methods: {
        onTekan(){
            this.$emit('child-klik', 'ini value');
        },
        // onKlik(){
        //     alert('ini event dari parents');

        // }
    }
}
</script>

<template>

<!-- Menset eventnya emit di child  -->
<div>Mengirim event child menggunakan emit</div>
<button @click="onTekan">Tekan</button>
<br><br>

<!-- Menset eventnya refs di child  -->
<!-- <div>Mengirim event child menggunakan refs</div>
<button @click="">Tekan</button>
<br> -->
</template>


<style scoped>

</style>




