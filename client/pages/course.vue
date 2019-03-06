<template>
<v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap   pa-2>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Unlimited music now</div>
                  <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn  dark>Омӯзиш</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex lg6>
            <v-card >
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs6 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title xs6>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
          <v-progress-linear
              color="success"                                            
     v-model="buffer"
    :buffer-value="bufferValue"
    buffer
     ></v-progress-linear>
            </v-card>
          </v-flex>

          <v-flex lg6 >
            <v-card >
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs6 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions xs6>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
          <v-progress-linear
              color="success"                                            
     v-model="buffer"
    :buffer-value="bufferValue"
    buffer
     ></v-progress-linear>
            </v-card>
          </v-flex>
         </v-layout>
       </v-container>
    </v-card>
    
  
</template>
<script>
export default {
  middleware: 'authenticated',
  data () {
    return {
      value: 0,
      buffer: 50,
      bufferValue: 100,
      interval: 0
    }
  }
}
</script>