<template>
  <div>
    <div class="text-center mb-5">
    <h1>Diari Jajan Februari 2021</h1>
    <h3>Pengeluaran Bulan Ini Rp. 5.605.475</h3>

    <button type="button" class="btn btn-warning">Tambah Item</button>
</div>
    <div class="container">
      <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
        <div class="col">
          <div class="p-3">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title"><strong>Date</strong></h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
              <p class="text-end"><strong>Rp. 316.000</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-3">Row column</div>
        </div>
        <div class="col">
          <div class="p-3">Row column</div>
        </div>
        <div class="col">
          <div class="p-3">Row column</div>
        </div>
        <div class="col">
          <div class="p-3">Row column</div>
        </div>
        <div class="col">
          <div class="p-3">Row column</div>
        </div>
        <div class="col">
          <div class="p-3">Row column</div>
        </div>
        <div class="col">
          <div class="p-3">Row column</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiaryJajanHome",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
