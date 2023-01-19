<template>
  <div>
    <div class="text-center mb-5">
      <h1>Diari Jajan Februari 2021</h1>
      <h3>Pengeluaran Bulan Ini Rp. {{ currentSubtotal }}</h3>

<!-- button modal -->
      <button type="button" @click="openModal" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAddItem" >Add Item</button>
<!-- modal -->
      <div v-if="showModal" class="modal fade" id="modalAddItem" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Tambah Entri</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
          <form class="text-start">
            <div class="form-group">
              <label for="nama">Nama</label>
              <input v-model="formData.nama" type="text" class="form-control" id="nama" placeholder="Enter Item">
            </div>
            <br />
            <div class="form-group">
              <label for="pengeluaran">Harga</label>
              <input v-model="formData.pengeluaraan" type="number" class="form-control" id="pengeluaran" placeholder="Rp.">
            </div>
          </form>
        </div>
            <div class="modal-footer">
              <button type="button" @click="closeModal" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
              <button type="button" @click="submitForm" class="btn btn-primary">Kirim</button>
            </div>
          </div>
        </div>
      </div>



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
import { mapState, mapGetters } from 'vuex';


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
      showModal : false,
      formData: {
        jam: new Date().getHours() + ':' + new Date().getMinutes(),
        tanggal: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
        nama: '',
        pengeluaraan: 0,
      }
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
  mounted(){
    var splitDate = this.formData.tanggal.split("/");
    var newDate = splitDate[1] + "/" + splitDate[0] + "/" + splitDate[2];
    var convertedDate = new Date(newDate);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    this.formData.tanggal = convertedDate.toLocaleDateString("id", options)
  },
  methods: {
    openModal(){
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    submitForm() {
      console.log('haha')
      this.closeModal = false
      // this.$store.dispatch('addData', this.formData)
    }
  },
};
</script>

<style lang="scss" scoped></style>
