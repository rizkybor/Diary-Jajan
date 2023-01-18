<template>
    <di>
      <h1>{{ msg }}</h1>
      <ul>
        <li v-for="todo of todos" :key="todo.id">
          {{ todo.name }}
        </li>
      </ul>
    </di>
  </template>

<script>
import axios from "axios"
export default {
    name: 'DiaryJajanCardDiary',
    props: {
        msg: String
    },

    data() {
    return {
      todos: []
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3001/todos`);

      this.todos = res.data;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>