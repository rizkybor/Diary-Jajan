<template>
<CardDiary msg="TODOS"></CardDiary>
</template>

<script>

import CardDiary from './components/CardDiary.vue';

export default {
  name: 'App',
  components: {
    CardDiary
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
