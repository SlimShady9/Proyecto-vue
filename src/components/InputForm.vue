<template>
  <div>
    <v-card>
        <form class="crud-form">
          <v-text-field
            v-model="input.name"
            :error-messages="nameErrors"
            :counter="15"
            label="Titulo"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-textarea
            v-model="input.descripcion"
            :error-messages="descripcionErrors"
            label="Descripcion"
            required
            @input="$v.descripcion.$touch()"
            @blur="$v.descripcion.$touch()"
          ></v-textarea>

          <v-btn
            class="mr-4 success mt-3"
            @click="submit"
          >
            {{btnName}}
          </v-btn>
          <v-btn @click="clear" class="mt-3">
            Limpiar campos
          </v-btn>
        </form>
    </v-card>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'
  import {mapMutations, mapState} from 'vuex'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(15) },
      descripcion: { required },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      snackbar: false,
      submitName : 'Agregar'
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('El titulo debe ser maximo de 11 caracteres.')
        !this.$v.name.required && errors.push('Titulo requerido.')
        return errors
      },
      descripcionErrors () {
        const errors = []
        if (!this.$v.descripcion.$dirty) return errors
        !this.$v.descripcion.required && errors.push('Descripcion es requerida.')
        return errors
      },
      ...mapState(['editionMode', 'input']),
      btnName(){
        if (this.editionMode === false)
          return 'Agregar'
        return 'Editar'
      }
    },

    methods: {
      ...mapMutations(['agregarTarea', 'editarTarea']),
      submit () {
        this.$v.$touch()
        if (this.editionMode === false){
          const obj = {titulo: this.input.name, descripcion: this.input.descripcion}
          this.agregarTarea(obj)
        } else{
          console.log(this.input)
          const obj = {id: this.input.id , titulo: this.input.name , descripcion: this.input.descripcion}
          this.editarTarea(obj)
        }
        this.clear()
        this.snackbar = true
      },
      clear () {
        this.$v.$reset()
        this.input.name = ''
        this.input.descripcion = ''
      }
      
    },
  }
</script>

<style>

.crud-form{
  padding: 10px 10px 10px 10px;
}

</style>