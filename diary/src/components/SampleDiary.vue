<template>
    <div>
        <ul>
            <li v-for="(note, index) in notes" :key ="index">{{ note }}</li>
          </ul>
    
        <input type="text" v-model="title" @keypress.enter="save"/>
  </div>
    </template>
  
  <script>
  import { ref } from "vue"
  
  export default {
    setup(){
      const notes = ref([]);
      const title = ref("");

      function save() {
        notes.value.push(title.value);
        title.value = ""
      }
      return {
        notes,
        title,
        save
      }
    }
  
    // async created() {
    //   try {
    //     const res = await axios.get(`http://localhost:3000/items`);
  
    //     this.todos = res.data;
    //     console.log(this.todos,'<< ')
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>