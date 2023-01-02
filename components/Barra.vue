<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="posts"
      item-key="first_name"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Buscar"
          class="mx-4"
        ></v-text-field>
      </template>

      <template #[`item.actions`]>
        <div :key="posts.id">
          <v-btn small fab dark color="indigo">
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
          <v-btn v-on:click="deletePost(posts.id)" small fab dark color="red">
            <v-icon dark> mdi-cancel </v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "",
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
  computed: {
    headers() {
      return [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "first_name",
        },
        {
          text: "Apellido",
          value: "last_name",
        },

        { text: "Telefono", value: "phone" },
        { text: "Email", value: "email" },
        { text: "Actions", value: "actions" },
      ];
    },
  },
  methods: {
    async deletePost(id) {
      await axios
        .delete("http://127.0.0.1:8000/api/person/" + id)
        .then(() => {
          console.warn(res);
          this.posts = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
