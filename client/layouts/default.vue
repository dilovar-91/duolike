<template>
  <v-app baseline>
    <navigation/>
   
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Navigation from '~/components/Navigation.vue'
  // import Toolbar from '~/components/Toolbar.vue'
  export default {
    components: {
      Navigation
    //  Toolbar
    },
    data () {
      return {
        fixed: false
      }
    }

  }
</script>