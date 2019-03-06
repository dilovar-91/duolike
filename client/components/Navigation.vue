<template>
<div>
  <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      stateless
    >
    
      <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>

          <v-flex shrink>
            <v-avatar
          :tile="tile"
          :size="90"
          color="grey lighten-4"
        >
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
            <div class="subheading">{{ $store.state.auth.user.name }}</div>
            <div class="body-1">{{ $store.state.auth.user.email }}</div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-list>

             
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
     <v-toolbar fixed app :clipped-left="clipped" color="indigo" grey lighten-4 dark>
    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-btn icon @click.stop="miniVariant = !miniVariant">
      <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
  <!--  <v-btn icon @click.stop="clipped = !clipped">
      <v-icon>web</v-icon>
    </v-btn>-->
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>

    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-3"
      flat
      hide-no-data
      hide-details
      label="Чиро меҷӯед?"
      solo-inverted
    ></v-autocomplete>

    <v-badge overlap  color="red">
      <template v-slot:badge>
        <span>3</span>
      </template>

      <v-avatar
        color="purple red--after"
      >
        <v-icon dark>notifications</v-icon>
      </v-avatar>
    </v-badge>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
  <template v-if="loggedIn">
    <v-btn icon @click="logout">
    <v-icon>exit_to_app</v-icon>
    </v-btn>
    </template>
  </v-toolbar>
  </div>
</template>
    </template>
    <script>
    export default {
  data () {
        return {
          clipped: false,
          drawer: true,
          fixed: false,
          right: true,
          rightDrawer: false,
          miniVariant: false,
    
          tile: false,
          title: 'Duolike',
    
          items: [
            { icon: 'home', title: 'Welcome', to: '/' },
            { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
            { icon: 'account_balance', title: 'Курсҳо', to: '/course' }
          ],
          loading: false,
    
          search: null,
          select: null,
          states: [
            'Alabama',
            'Alaska',
            'American Samoa',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District of Columbia',
            'Federated States of Micronesia',
            'Florida',
            'Georgia',
            'Guam',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Marshall Islands',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Northern Mariana Islands',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Palau',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virgin Island',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
          ]
    
        }
  },
  watch: {
        search (val) {
          val && val !== this.select && this.querySelections(val)
        }
  },
  methods: {
        querySelections (v) {
          this.loading = true
          // Simulated ajax query
          setTimeout(() => {
            this.items = this.states.filter(e => {
              return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
            })
            this.loading = false
          }, 500)
        },
        logout () {
          this.$auth.logout()
          localStorage.removeItem('token')
          this.$router.push('/login')
        }
  }
}
</script>   