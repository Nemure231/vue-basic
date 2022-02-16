<script>
import Home from './KeepAliveHome.vue'
import Post from './KeepAlivePost.vue'
export default{
    components:{Home, Post},
    data(){
        return {
            currentTab: "Home",
            tabs: ["Home", "Post"],
        }
    },
    computed:{
        currentTabComponent(){
            return this.currentTab.toLowerCase();
        }
    }
}
</script>

<template>

<div class="tab">
    <!-- Fungsi menampilkan tabs berdasarkan komponen yang berbeda -->
    <button v-for="t in tabs" :key="t"
        @click="currentTab = t"
        :class="{active: currentTab === t}
    ">
    {{t}}
    </button>

</div>

<!-- Keep alive adalah sebuah fungsi yang membuat data menjadi statis, 
artinya setiap kita menekan tab yang terdapat request api, 
web akan meload ulang data api tersebut sehingga dapat tampil
tapi dengan keep-alive dia hanya akan meload satu kali dan pada 
percobaan ke-2 akan dijadikan data statis 
(tidak akan melakukan request lagi) -->
<keep-alive>
    <component :is="currentTabComponent" />
</keep-alive>
 <!-- Tag componens menampilkan komponen berdasarkan tabs yang berbeda -->
</template>


<style scoped>

.tab {
    display: flex;
    padding-right: 5px;
    padding-left: 5px;
    justify-content: space-around;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
}

</style>




