<template>
  <div>
    <div class="text-center mb-5">
      <h1>Diari Jajan Februari 2021</h1>
      <h3>Pengeluaran Bulan Ini Rp. {{ currentSubtotal }}</h3>
      <button type="button" class="btn btn-warning">Tambah Item</button>
    </div>
    <div class="container">
      <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-2">
        <card-diary v-for="(item, index) in dataListing" :CardList="item" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CardDiary from "@/components/CardDiary.vue";
import { mapState, mapGetters } from 'vuex'


export default {
  name: "DiaryJajanHome",
  components: {
    CardDiary,
  },
  computed: {
    ...mapState(['dataListing']),
    ...mapGetters(['currentSubtotal'])
  },
  data(){
    return{
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/items`)
      this.$store.dispatch('getData', res.data)
    } catch(e) {
      console.error(e.error)
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
