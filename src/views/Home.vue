<template>
  <div class="home">
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card>
          <v-date-picker v-model="fecha" full-width
          locale="es-cl"
          :min="minimo"
          :max="maximo"
          @change="getDolar(fecha)">
          </v-date-picker>    
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            ${{valor}}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return{
      fecha : new Date().toISOString().substr(0, 10),
      minimo: '1984',
      maximo: new Date().toISOString().substr(0, 10),
      valor : 0
    }
  },
  methods: {
    async getDolar(dia){
      let datos = await axios.get(`https://trm-colombia.vercel.app/?date=${dia}`)
      this.valor = datos.data.data.value

    }
  },
  created(){
    this.getDolar(this.fecha)
  }
}
</script>
