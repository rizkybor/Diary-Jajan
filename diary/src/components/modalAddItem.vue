<template>
<div>

</div>
</template>

<script>

export default {
  data() {
    return {};
  },
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  mounted() {},

  methods: {
    closeModal(){
        this.$emit("close")
    }
  },
};
</script>

<style lang="scss" scoped></style>
