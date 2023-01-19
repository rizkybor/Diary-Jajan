<template>
  <div>
    <div class="col">
      <div class="p-0">
        <div class="card" style="width: 16rem">
          <div class="card-body">
            <Items :ListItem="CardList"></Items>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Items from '@/components/ListDiary.vue'
export default {
  props: ["CardList"],
  components: {
    Items
  },
  mounted(){
  
  },
  methods:{
  
  }
};
</script>

<style lang="scss" scoped></style>
