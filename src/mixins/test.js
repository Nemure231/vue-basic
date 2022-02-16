//Mixins adalah fungsi javascript terpisah dengan extensioan js
// Yang dapat terhubung secara langsung dengan file vue

const test = {
// Pada kasus data, jika kita mendambahkan data di sini
// Maka mixins yang telah didefinisikan di file vue akan menambahkan
// data di bawah ini. Pada kasus nyata ini berguna untuk menambahkan
// data yang sifatnya universal dan diperlukan di segala komponen
// jadi tingal isi di sini dan iport datanya sudah tertambah
    data(){
        return {
            hobi: 'nonton film'
        }
    },
    // Mixins juga dapat menjalankan lifecycle vue
    mounted(){
        alert('ini ngetes vue mixins, pas mounted tampil notif');
    },
    // MIxins juga bisa menjalankan event yang apat ditangkap
    // Oleh file vue
    methods: {
        onKelik(){
            alert('hi, ini fungsi yg dijalain mixin');
        }
    }
}

export default test;