<template>
    <v-container justify-center fill-height align-center>
        <v-col
            cols="3"
        >
            <v-row>
                <v-select solo
                    rounded
                    v-model="selectedProject"
                    :items="projects"
                    label="select your project"
                    outlined
                    clearable
                >
                    <template v-slot:append-item>
                        <v-list-item @click="newProject">
                            <v-list-item-content>
                                <v-list-item-title>
                                    + new project
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-select>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-btn 
                    class="primary" 
                    :disabled="!selectedProject"
                    rounded
                    @click="to_project(selectedProject)"
                >confirm</v-btn>
                <v-spacer></v-spacer>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
export default {
    data() {
        return {
            selectedProject: ''
        }
    },
    computed: {
        ...mapState(['projects'])
    },
    methods: {
        newProject() {
            console.log('new project')
        },
        to_project(project){
            this.$router.push({ name: 'Project', params: {'project': project}}).catch(err => {err})
        }
    },
}
</script>
