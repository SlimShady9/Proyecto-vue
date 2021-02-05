import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaTareas:[
      {id:1, titulo: 'Tarea numero 1', descripcion: 'Hacer la cama'},
      {id:2, titulo: 'Tarea numero 2', descripcion: 'Lavar trastes sucios'},
    ]
  },
  mutations: {
    eliminarTarea(state, id){
      const index = state.listaTarea.findIndex(x => x.id === id)
      if(index != -1){
        state.listaTarea.splice(index, 1)
      }

    },
    agregarTarea(state, titulo, descripcion){
      const len = state.listaTarea.length;
      state.listaTarea.push({id: len, titulo: titulo, descripcion: descripcion})

    },
    editarTarea(state, id, titulo, descripcion){
      const index = state.listaTarea.findIndex(x => x.id == id)
      state.listaTareas[index].titulo = titulo
      state.listaTareas[index].descripcion = descripcion

    }
  },
  actions: {
  },
  modules: {
  }
})
