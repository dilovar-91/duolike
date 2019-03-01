<template>
<v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Формаи воридшавӣ</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
              
                <v-btn color="warning" to="/">Баргаштан</v-btn>
             <v-spacer></v-spacer>
                 <v-btn color="success" to="/register">Бақайдгирӣ</v-btn>
             <v-spacer></v-spacer>
                <v-btn color="primary">Воридшавӣ</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      </template>
<script>
export default {
  layout: 'login'
}
</script>