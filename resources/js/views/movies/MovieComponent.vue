<template>
<div>
<v-container>
    <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Fecha Publicación</th>
          <th class="text-left">Estado</th>
          <th class="text-left">Turno</th>
          <th class="text-left">Actualizar</th>
          <th class="text-left">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies.movies" :key="movie.id">
          <td>{{ movie.nombre }}</td>
          <td>{{ movie.fecha_publicacion }}</td>
          <td>{{ movie.estado }}</td>
          <td>{{ movie.turno }}</td>
          <td>
            <v-btn class="mx-1" @click="edit(movie)" fab small color="#4fa7ff">
              <v-icon color="#ffffff">mdi-pencil</v-icon>
            </v-btn>
          </td>
          <td>
            <v-btn class="mx-1" fab small color="#ff0000">
              <v-icon color="#ffffff" dark>mdi-trash-can</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    <EditMovie></EditMovie>
</v-container>
</div>
</template>

<script>
import EditMovie from './EditMovie';
  export default {
    components: {
        EditMovie
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        edit(movie){
            this.$store.dispatch('editMovie', movie)
            console.log("click edit" + movie.id)
        },
    },
    computed: {
        movies(){
            return this.$store.state.movies
        },
    },
    created() {
        this.$store.dispatch('getmovies') // dispatch movies loading
    }
  }
</script>