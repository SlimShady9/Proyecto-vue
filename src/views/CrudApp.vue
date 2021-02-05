<template>
    <div>
        <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex md8>
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
                            <v-btn color="warning" @click="setEditionMode({editionMode, item})">
                                <v-icon left>
                                    mode_edit
                                </v-icon>
                                Editar
                            </v-btn>
                            <v-btn color="error" class="ml-3" @click="eliminarTarea(item.id)">
                                <v-icon left>
                                    delete
                                </v-icon>
                                Eliminar
                                </v-btn>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4>
                    <h1>{{editionMessage}}</h1>
                    <InputForm id="id"/>
                </v-flex>
            </v-layout>
        </v-container>
        <v-snackbar
            v-model="snackbar"
            fixed
            right color="success"
            timeout="3000" 
            >
                <span>{{snackMessage}}</span>
            </v-snackbar>
    </div>
</template>

<script>

import InputForm from '@/components/InputForm.vue';
import {mapState, mapMutations} from 'vuex'

export default {
    components:{
        InputForm,
    },
    computed: {
        ...mapState(['listaTareas', 'snackMessage', 'editionMessage', 'editionMode']),
        snackbar:{
            get () {return this.$store.state.snackbar},
            set (value) {this.$store.state.snackbar = value}
        }
    },
    watch:{
        snackbar (newVal, oldVal){
              console.log('value changed from ' + oldVal + ' to ' + newVal);
        }
    },
    methods:{
        ...mapMutations(['eliminarTarea', 'setEditionMode']),
    }
    
}
</script>
