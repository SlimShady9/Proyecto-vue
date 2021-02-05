<template>
  <div>
    <v-card>
        <v-snackbar
        v-model="snackbar"
        absolute top
        right color="success"
        >
            <span>Registration successful!</span>
            <v-icon dark>
                mdi-checkbox-marked-circle
            </v-icon>
        </v-snackbar>
        <form class="crud-form">
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Titulo"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="descripcion"
            :error-messages="descripcionErrors"
            label="Descripcion"
            required
            @input="$v.descripcion.$touch()"
            @blur="$v.descripcion.$touch()"
          ></v-text-field>

          <v-btn
            class="mr-4"
            @click="submit"
          >
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </form>
    </v-card>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'

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
      name: '',
      descripcion: '',
      snackbar: false
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
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.descripcion = ''
      },
    },
  }
</script>

<style>

.crud-form{
  padding: 10px 10px 10px 10px;
}

</style>