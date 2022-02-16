<script>

export default{

    data(){
        return {
            kirim_data: 'Ini data',
        }
    },
}
</script>

<template>
<!-- Slot defautl gak pake nama -->
<div class="slot">
  <slot/>
  <slot name="el"/>
  <slot name="el2"/>
  <slot name="el3"/>
  <!-- Bisa kirim data dari child ke parents 
  Pertama definisikan dulu classnya, namanya
  bebas boleh apa aja-->
  <slot :bebas="kirim_data" name="el4"/>
</div>


</template>

<style scoped>
.slot{
  background-color: rgb(131, 20, 165);
  width: max-content;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  color: white;
}

</style>