<template>
    <div>
        <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex md6>
                    <v-card class="mb-3">
                        <v-card-text>
                            <v-chip
                            class="ma-2"
                            color="pink"
                            label
                            text-color="white"
                            >
                                <v-icon left>
                                    mdi-label
                                </v-icon>
                                Tags
                            </v-chip>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab neque aut in odio cupiditate harum incidunt numquam ipsam error ipsum deleniti vel, ad temporibus animi facilis, unde libero alias.</p>
                            <v-btn color="warning">Editar</v-btn>
                            <v-btn color="error" class="ml-3">Eliminar</v-btn>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md6>
                    <v-card class="mb-3">
                        Jiji
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>