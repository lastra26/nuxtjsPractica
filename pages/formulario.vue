<template>
  <div>
    <br />
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Agregar Usuario
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="purple darken-2 text-center">
            <span class="white--text">Formulario</span>
          </v-card-title>
          <br />
          <PostComponentVue></PostComponentVue>

          <v-card-text class="text-right">
            <v-btn color="red darken-1 text-right" text @click="dialog = false">
              Cancelar
            </v-btn></v-card-text
          >
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import PostComponentVue from "../components/PostComponent.vue";
export default {
  name: "App",
  components: {
    PostComponentVue,
  },
  data() {
    return {
      dialog: false,
    };
  },

  methods: {},
};
</script>
