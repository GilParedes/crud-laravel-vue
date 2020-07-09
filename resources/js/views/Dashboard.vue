<template>
<div>
  <v-container>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Users
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        Movies
      </v-tab>
      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Turnos
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <UserForm></UserForm>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <MovieForm></MovieForm>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
  </v-container>
  </div>
</template>


<script>
  import UserForm from './User/UserForm';
  import MovieForm from './movies/MovieComponent';

export default {
    components: {
      UserForm,
      MovieForm
    }
};
</script>