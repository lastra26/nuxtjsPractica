<template>
  <div>
    <h2>Lista Clientes</h2>
    <Barra />
    <Post />
  </div>
</template>

<script>
import axios from "axios";
import Barra from "../../components/Barra";
import Post from "../../components/Post";
export default {
  components: {
    Post,
    Barra,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/person/");
      this.posts = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
