<template>
<v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Формаи воридшавӣ</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
               <v-form   action="#"
               ref="form"
    v-model="valid"
    lazy-validation>
              <v-card-text>
               <v-text-field prepend-icon="person"  label="Email" type="email"  v-model="userForm.email" :rules="emailRules"
  required autofocus></v-text-field>
                  <v-text-field prepend-icon="lock"  label="Password" id="password"  type="password" v-model="userForm.password" :rules="passwordRules" required></v-text-field>
               
              </v-card-text>
              <v-card-actions>
              
                <v-btn color="warning" to="/">Баргаштан</v-btn>
             <v-spacer></v-spacer>
                 <v-btn color="success" to="/register">Бақайдгирӣ</v-btn>
             <v-spacer></v-spacer>
                <v-btn color="primary"  :disabled="!valid"
      @click="validate">Воридшавӣ</v-btn>
      
              </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      </template>
<script>
export default {
  layout: 'login',
  // middleware: 'backtohome',
  data: () => ({
    valid: true,

    userForm: {
      email: '',
      password: ''
    },
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length <= 10) || 'Password must be less than 10 characters'
    ],

    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],

    checkbox: false
  }),

  methods: {
    async validate () {
      if (this.$refs.form.validate()) {
        await this.$auth.login({
          data: this.userForm
        })
        this.$router.push({
          path: '/'
        })
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>