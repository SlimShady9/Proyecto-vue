import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[{nombre:'Manzana', cantidad:0},{nombre:'Pera', cantidad:2},{nombre:'Naranja', cantidad:3}]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    reiniciar(state){
      state.frutas.forEach(x => x.cantidad = 0)
    }
  },
  
  actions: {
  },
  modules: {
  }
})
