<template>
  <div class="home">
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card>
          <v-date-picker v-model="fecha" full-width
          locale="es-cl"
          :min="minimo"
          :max="maximo"
          show-current="false"
          @change="actualizarCurrency(fecha)">
          </v-date-picker>    
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            Precio dolar ${{valorUSD}} COP 
          </v-card-text>
          <v-card-text class="display-1 text-center">
            Precio bitcoin ${{valorBitcoin}} USD 
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
      valorUSD : 0,
      valorBitcoin : 0
    }
  },
  methods: {
    async getDolar(dia){
      let datos = await axios.get(`https://trm-colombia.vercel.app/?date=${dia}`)
      this.valorUSD = datos.data.data.value

    },
    async getBitcoin(dia){
      try {
        let datos
      if (dia ===  new Date().toISOString().substr(0, 10)){
        datos = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        this.valorBitcoin = await datos.data.bpi.USD.rate
      }
      else{
        datos = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${dia}&end=${dia}`)
        this.valorBitcoin = await datos.data.bpi[dia]
      }
      } catch (error) {
        this.valorBitcoin = "Error al cargar"
      }
      
    },
    actualizarCurrency(dia){
      this.getDolar(dia)
      this.getBitcoin(dia)
    }
  },
  created(){
    this.actualizarCurrency(this.fecha)
  }
}
</script>
