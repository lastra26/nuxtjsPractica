<template>
  <div class="center">
    <p class="text-center">Ingrese Sus Datos</p>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }"> </template>
    </v-dialog>
    <form>
      <v-form ref="signUpForm" v-model="formValidity">
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                prop="nombre"
                label="Nombre"
                :rules="rules"
                outlined
                v-model="Blog.first_name"
              ></v-text-field>
              <v-text-field
                label="Apellido"
                :rules="apellido"
                outlined
                v-model="Blog.last_name"
              ></v-text-field>
              <v-text-field
                label="email"
                outlined
                v-model="Blog.email"
              ></v-text-field>
              <v-text-field
                label="phone"
                :rules="phone"
                outlined
                v-model="Blog.phone"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-card-text class="text-right">
          <v-btn
            type="submit"
            @click="addPost"
            color="green darken-1"
            :disabled="!formValidity"
            text
          >
            Guardar
          </v-btn></v-card-text
        >
      </v-card-actions>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      Blog: {
        nombre: "",
        apellido: "",
        email: "",
        phone: "",
      },

      rules: [(nombre) => !!nombre || "Nombre es requerido"],
      apellido: [(apellido) => !!apellido || "Apellido es requerido"],
      phone: [(phone) => !!phone || "Telefono es requerido"],
      formValidity: false,
    };
  },
  methods: {
    resetForm() {
      this.$refs.signUpForm.reset();
    },
    async addPost() {
      await axios
        .post("http://127.0.0.1:8000/api/person", this.Blog)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          this.$swal({
            title: "are you sure",
            text: "you wont be able to rever",
            showCancelButton: true,
            cancelButtonText: "cancel",
          });
          console.log(err);
        });
    },
  },
};
</script>
