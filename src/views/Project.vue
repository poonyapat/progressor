<template>
    <v-container fill-height fluid class="pa-0">
        
        <v-navigation-drawer color="primary lighten-1">
            <v-list dark class="pa-0">
                <v-list-item-group v-model="item">
                    <v-list-item v-for="(item, index) in menu" :key="index" @click="to_board(item.routeName)">
                        <v-list-item-icon>
                            <v-icon> {{item.icon}} </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title> {{item.name}} </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-col align-self='stretch' class="pa-0">
            <router-view/>
        </v-col>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            menu: [
                {
                    name: 'status',
                    icon: 'mdi-stairs',
                    routeName: 'ProjectStatus'
                },
                {
                    name: 'priority',
                    icon: 'mdi-priority-high',
                    routeName: 'ProjectPriority'
                },
                {
                    name: 'updation',
                    icon: 'mdi-timelapse',
                    routeName: 'ProjectUpdation'
                },
                {
                    name: 'schedule',
                    icon: 'mdi-calendar-month',
                    routeName: 'ProjectSchedule'
                }
            ]
        }
    },
    methods: {
        to_board(name) {
            this.$router.push({name: name}).catch(err => {err})
        }
    }
}
</script>
