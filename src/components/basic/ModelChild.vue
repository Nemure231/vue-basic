<script>
export default {
    // Menjalankan emiitnya menggunakan get dan setter
    props: ["modelValue"],
    computed: {
        value: {
            // Pertama ambil value dari data di parents
            // melalui props yang sudah didefinisikan
            get() {
                return this.modelValue;
            },
            // Lalu ambil valuenya untuk diupdate ke emit yang ada di parents
            set(value) {
                this.$emit('update:modelValue', value);
            },
    },
  },
};
</script>

<template>
  <!-- Menjalankan fungsi emitnya di child coponent, cara ribet -->
  <!-- <input :value="modelValue"
@input="$emit('update:modelValue', $event.target.value)"/> -->

  <!-- Menjalankan fungsi emitnya di child coponent, cara gampang -->
  <input v-model="value" />
</template>






