import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaTareas:[
      {id:1, titulo: 'Tarea numero 1', descripcion: 'Hacer la cama'},
      {id:2, titulo: 'Tarea numero 2', descripcion: 'Lavar trastes sucios'},
    ],
    snackbar: false,
    snackMessage: '',
    editionMode : false,
    editionMessage : 'Agregar Tarea',
    input: {id:-1 , name: '', descripcion : ''}
  },

  mutations: {
    eliminarTarea(state, id){
      const index = state.listaTareas.findIndex(x => x.id === id)
      if(index != -1){
        state.listaTareas.splice(index, 1)
        state.snackMessage = 'Elemento eliminado'      
        state.snackbar = true
      }

    },

    agregarTarea(state, obj){
      const len = state.listaTareas.length + 1;
      state.listaTareas.push({id: len, titulo: obj.titulo, descripcion: obj.descripcion})
      state.snackMessage = 'Se agrego exitosamente'
      state.snackbar = true

    },

    editarTarea(state, obj){
      const index = state.listaTareas.findIndex(x => x.id == obj.id)
      state.listaTareas[index].titulo = obj.titulo
      state.listaTareas[index].descripcion = obj.descripcion
      state.snackMessage = 'Elemento modificado exitosamente'
      state.snackbar = true

    },
    setEditionMode(state, obj){
      state.editionMode = !obj.editionMode
      state.editionMessage = 'Agregar Tarea'
      state.input.name = ''
      state.input.descripcion = ''
      if (state.editionMode === true){
        state.editionMessage = 'Editar Tarea'
        state.input.id = obj.item.id
        state.input.name = obj.item.titulo
        state.input.descripcion = obj.item.descripcion
      }
    }
  },
  actions: {
     
  },
  modules: {
  }
})
