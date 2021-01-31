<template>
  <div>
      <ul>
          <li v-for="(fruta, index) in arrayOrdena"
          :key="fruta.id">
              {{fruta.nombre}}
              <button @click="aumentar(index)">{{fruta.cantidad}}</button>
          </li>
          <button class="reiniciar" @click="reiniciar">Reiniciar</button>
      </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {

    computed:{
        ...mapState(['frutas']),
        arrayOrdena(){
             let frutas = this.frutas;
            return frutas.sort((a, b) => b.cantidad - a.cantidad);

        }
    },

    methods:{
        ...mapMutations(['aumentar', 'reiniciar'])
    }

}
</script>

<style>

ul{
    list-style: none;
    padding: 0;
    
}

li{
    height: 2em;
    border-radius: 5px;
    margin: .75em 0 0 0;
    background-color: rgb(98, 155, 98);
    color: white;
    padding-top: 15px;
    padding-left: 25px;
    text-align: left;
    
}
li > button{
    background-color: rgb(60, 60, 223);
    color: white;
    float: right;
    margin-right: 10px;
    padding-right: .7em;
    border: transparent;
    border-radius: 25px
}

li > button:active{
    background-color: rgb(157, 157, 211);
}

.reiniciar{
    margin-top: 1em;
    width: 100%;
    background-color: rgb(212, 63, 63);
    border: transparent;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    font-size: 1.45em;
    padding: 10px 0 10px 0;
}

</style>