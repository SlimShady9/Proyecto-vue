<template>
    <div>
        <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex md6>
                    <h1>Lista de tareas</h1>
                    <v-card class="mb-3" v-for="item in listaTareas" :key="item.id">
                        <v-card-text>
                            <v-chip
                            class="ma-2"
                            color="pink"
                            label
                            text-color="white"
                            >
                                <v-icon left>
                                    label
                                </v-icon>
                                {{item.titulo}}
                            </v-chip>
                            <p>{{item.descripcion}}</p>
                            <v-btn color="warning">Editar</v-btn>
                            <v-btn color="error" class="ml-3">Eliminar</v-btn>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md6>
                    <h1>Agregar Tareas</h1>
                    <InputForm/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

import InputForm from '@/components/InputForm.vue';
import {mapState} from 'vuex'

export default {
    components:{
        InputForm
    },

    computed: {
        ...mapState(['listaTareas'])
        }
}
</script>