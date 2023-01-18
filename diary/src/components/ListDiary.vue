<template>
    <div>

        <h5 class="card-title"><strong>{{ ListItem[0].tanggal.substring(0, 12) }}</strong></h5>
                <listing v-for="(item, index) in ListItem" :list="item" :key="index"  />
         <p class="text-end"><strong>Rp. 316.000</strong></p>
          
    </div>
</template>

<script>
import Listing from './Listing.vue';
export default {
  components: { Listing },
    props: ['ListItem'],
};
</script>

<style lang="scss" scoped>

</style>