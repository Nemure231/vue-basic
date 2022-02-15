<script>
export default{
    // Mendefinisikan nama emits, yang keuidan menulis method onTkean, untuk didefiniskan
    // setelah didefiniskan akan dikirim ke app.vue, yang merupakan komponen utama
    emits: ['child-klik'],
    methods: {
        onTekan(){
            this.$emit('child-klik');
        }
    }
}
</script>

<template>

<!-- Menset eventnya eit di child  -->
<button @click="onTekan">Tekan</button>

</template>


<style scoped>

</style>




