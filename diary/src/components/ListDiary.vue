<template>
  <div>
    <h5 class="card-title">
      <strong>{{ ListItem[0].tanggal.substring(0, 11) }}</strong>
    </h5>
    <listing v-for="(item, index) in ListItem" :list="item" :key="index" />
    <p class="text-end"><strong>{{handleData(ListItem).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).split(',')[0]}} </strong></p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Listing from "./Listing.vue";
export default {
  components: { Listing },
  props: ["ListItem"],
  computed: {
    ...mapGetters(["currentListing"]),
  },
  mounted() {
    this.handleData();
  },
  methods: {
    handleData() {
      const data = this.currentListing;
      const totalByDate = Object.keys(data).reduce((acc, date) => {
        acc[date] = data[date].reduce(
          (total, item) => total + item.pengeluaraan,
          0
        );
        return acc;
      }, {});
      const result = totalByDate[this.ListItem[0].tanggal]
      const subTotalTemp = Object.values(totalByDate).reduce((acc, total) => acc + total, 0)
      this.$store.dispatch('getCalc', subTotalTemp)

      return result;
    },
  },
};
</script>

<style lang="scss" scoped></style>
