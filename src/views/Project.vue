<template>
    <v-container fill-height fluid class="pa-0">
        
        <v-navigation-drawer color="primary">
            <v-list dark>
                <v-list-item v-for="(item, index) in menu" :key="index">
                    <v-list-item-icon>
                        <v-icon> {{item.icon}} </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title> {{item.name}} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-card
            class="pa-2"
            outlined
            tile
        >
            hello
        </v-card>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            menu: [
                {
                    name: 'status',
                    icon: 'mdi-stairs'
                },
                {
                    name: 'priority',
                    icon: 'mdi-priority-high'
                },
                {
                    name: 'updation',
                    icon: 'mdi-timelapse'
                },
                {
                    name: 'schedule',
                    icon: 'mdi-calendar-month'
                }
            ]
        }
    },
}
</script>
