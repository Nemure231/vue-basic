<script>
// Import file mixins 
import test from '/src/mixins/test';

export default{
    // Definisikan mixisn
    mixins: [ test ],
    data(){
        return {
            nama: 'Cyrollin',
        }
    }


}
</script>

<template>

<pre>{{$data}}</pre>
<!-- Event yang dijalankan oleh mixins -->
<button @click="onKelik">
Klik
</button>

</template>


<style scoped>

</style>




