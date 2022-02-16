<script>

// Definisikan slotnya
import SlotChild from './SlotChild.vue'

export default{
    components:{

        SlotChild,
    },
     data(){
        return {
            pesan: 'pesan',
            data: 'el3',
            data1: 'el4'
        }
    },
}
</script>

<template>

<!-- SLot child berguna untuk mentransfer 
suatu teks html dari child element ke parent -->
<SlotChild>
    <!-- Bisa pake data -->
    {{pesan}}

    <!-- Di sini bisa dikasih percabangan juga -->
    
    <!-- Bisa juga dipanggil sesuai v-slot -->
    <template v-slot:el2>
        <p>Cabang pake V-slot:</p>
    </template>

    <!-- Bisa dipanggil sesuai namanya pake tagar -->
    <template #el>
        <p>Cabang pake #tagar</p>
    </template>

     <!-- Bisa dipanggil secara dinamis lewat data, dengan v-slot -->
    <template v-slot:[data]>
        <p>Cabang dinamis pake #v-slot</p>
    </template>

    <!-- Bisa dipanggil secara dinamis lewat data, dengan tagar -->
    <template #[data1]="{bebas}">
        <!-- Bisa ambil data juga dari child
        Caranya dengan mengambil class bebas di atas -->
        <p>{{bebas}}</p>
    </template>
</SlotChild>

<br><br>


</template>
