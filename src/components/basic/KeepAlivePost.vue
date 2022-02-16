<script>
export default {
    data(){
        return {
            posts: []
        }
    },
    // Fungsi mengambil data api planet star warsm, untuk percobaan keep-alive vue
    async created(){
        const res = await fetch('https://swapi.dev/api/planets/')
        const { results } = await res.json();
        this.posts = results;
    }
}

</script>

<template>

<ul>
    <!-- Menampilkan data yang sudah diamil dengan Api -->
    <li v-for="p in posts" :key="p">
        {{p.name}}

    </li>
</ul>

</template>


<style scoped>

</style>




