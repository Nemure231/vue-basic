<script>
// Mengimport komponen untuk proses event refs
import Refs from '/src/components/basic/Refs.vue'

export default{
    // Mendefinisikan komponen untuk event refs
    components: {
        Refs
    },
    // Mendefinisikan nama emits, yang keuidan menulis method onTkean, untuk didefiniskan
    // setelah didefiniskan akan dikirim ke app.vue, yang merupakan komponen utama
    emits: ['child-klik'],
    methods: {
        onTekan(){
            this.$emit('child-klik', 'ini value');
        },
        // Membungkus event refs dengan method onKLik, sehingga dapat dipanggil di button
        onKlik(){
          this.$refs.childRefs.klikRefs();
        }
    }
}
</script>

<template>

<!-- Menset eventnya emit di child  -->
<div>Mengirim event child menggunakan emit, Event dari Child</div>
<button @click="onTekan">Tekan</button>
<br><br>

<!-- Memanggil komponen refs dengan tag html -->
<refs ref="childRefs"></refs>
<div>Mengirim event child menggunakan Refs, Event dari Parents</div>
<button @click="onKlik">Tekan</button>
<br><br>

</template>


<style scoped>

</style>




