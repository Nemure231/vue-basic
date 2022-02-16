<script>
import Slot from './basic/Slot.vue';
export default{
  components: { Slot },
  // components: {Refs},
    // Menjalankan method emit dari komponen Refs.vue
    methods: {
        onTekan(val) {
          alert('event dari child, menggunakan emits, dan mengirim value:' + val);
        },
    }
}
</script>

<template>


<router-view name="DecRender"></router-view>
<!-- Menset data untuk props -->
<router-view :pesan="'hello'" :angka="10" name="Props"></router-view>
<router-view name="Method"></router-view>
<router-view name="Model"></router-view>
<router-view name="Conditional"></router-view>
<router-view name="Looping"></router-view>
<router-view name="Lifecycle"></router-view>
<router-view name="Computed"></router-view>
<router-view name="Watcher"></router-view>
<router-view name="DynamicClass"></router-view>
<router-view name="Emits" @child-klik="onTekan"></router-view>
<router-view name="Slot"></router-view>
<router-view name="GlobalComponent"></router-view>
<router-view name="ProvideInject"></router-view>
<router-view name="KeepAlive"></router-view>
</template>

