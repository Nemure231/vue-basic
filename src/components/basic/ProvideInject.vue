<script>

// Definisikan slotnya
import PIChild from './ProvideInjectChild.vue'

export default{
    components:{
        PIChild,
    },
     data(){
        return {
          data: 'nih gw bagi lu data'
        }
    },
    provide(){
        return{
            bagiData: this.data
        }
    }
}
</script>

<template>

<PIChild/>

</template>
