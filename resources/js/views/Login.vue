<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="600"
    outlined
  >     
  
        <h1>Login</h1> 
        <v-alert type="error" v-if="error">
          <p>{{ this.error }}</p>
        </v-alert> 
        <v-form @submit.prevent="login" method="post">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="12"
            >
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <v-text-field
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                name="input-10-1"
                label="Normal with hint text"
                hint="At least 8 characters"
                counter
                @click:append="show = !show"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-btn type="submit" color="#fa76fc">Sign in</v-btn>
          </v-card-actions>
    </v-container>
    </v-form>
  </v-card>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      error: null,
      show: false,
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
      },
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(error => {
          this.error = error.response.data.message;
          console.log(this.error);
        });
    }
  },
  
};

</script>