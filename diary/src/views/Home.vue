<template>
  <div>
    <div class="text-center mb-5">
      <h1>Diari Jajan Februari 2021</h1>
      <h3>Pengeluaran Bulan Ini Rp. 5.605.475</h3>

      <button type="button" class="btn btn-warning">Tambah Item</button>
      <sample></sample>
    </div>
    <div class="container">
      <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
        <card-diary v-for="(item, index) in dataListing" :CardList="item" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import sample from "@/components/SampleDiary.vue";
import CardDiary from "@/components/CardDiary.vue";
import { mapState } from 'vuex'


export default {
  name: "DiaryJajanHome",
  components: {
    CardDiary,
    sample,
  },
  computed: {
    ...mapState(['dataListing']),
  },
  data(){
    return{
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/items`)
      // this.listing = res.data;
      this.$store.dispatch('getData', res.data)
    } catch(e) {
      console.error(e.error)
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
