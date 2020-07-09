<template>
  <div>
    <v-container>
        <form @submit.prevent="addUser">
        <v-row>
            <v-col cols="12" sm="6" md="12">
              <v-text-field
                label="Name"
                name="name"
                single-line
                outlined
                v-model="name = clear.name"
              ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" md="12">
              <v-text-field
                single-line
                outlined
                label="Email"
                name="email"
                v-model="email = clear.email"
              ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" md="12">
              <v-text-field
                single-line
                outlined
                label="Password"
                name="password"
                v-model="password = clear.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="12">
              <button class="btn btn-primary" type="submit">Add Todo</button>
          </v-col>
        </v-row>
      </form>
  </v-container>
    <UserTable></UserTable>
    <UserEdit></UserEdit>
  </div>
</template>
<script>
    import UserTable from './UserTable.vue'
    import UserEdit from './UserEdit.vue'

    import { mapState, mapGetters } from 'vuex';

    export default {
        components: {
            UserTable,
            UserEdit
        },
        data() {
          return {
            name: '',
            email: '',
            password: '',
            user: [],
            show1: false,
          }
        },
        methods: {
            addUser(){
              this.user = {
                name: this.name,
                email: this.email,
                password: this.password
              }
              
              this.$store.dispatch('addUser', this.user)
              this.$store.dispatch('clearInputs')
            },
        },
        computed: {
            clear(){
              return this.$store.getters.clearInputs
            },
        },
    }
</script>