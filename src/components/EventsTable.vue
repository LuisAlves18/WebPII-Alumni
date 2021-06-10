<template>
    <div id="eventsTable">
        <table>
            <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Data</th>
                <th>Ações</th>
            </tr>
            <tr v-for="event in this.eventsContent" :key="event.id">
                <td>{{event.name}}</td>
                <td>{{event.id_event_type}}</td>
                <td>Data: {{event.date_time_event.split('T')[0]}} & Hora:{{event.date_time_event.split('T')[1].split(':')[0]}}:{{event.date_time_event.split('T')[1].split(':')[1]}}</td>
                <td>
                    <b-button @click="seeMoreEvent(event)" class="btns">Detalhes</b-button>
                    <b-button @click="manageEnrollments(event)" class="btns">Inscrições</b-button>
                    <b-button @click="removeEvent(event.id)" class="btns">Remover</b-button>
                </td>
            </tr>
        </table>
        <router-link :to="{name: 'AddEvent'}"><b-button id="routerLinkAddEvent" class="btns">Criar Evento</b-button></router-link>

    </div>
</template>

<script>
    export default {
        name: 'EventsTable',
        props: {
            eventsContent: {
                type: Array
            }
        },
         mounted(){
    
        this.storeEvents()
  },
        methods: {
            async storeEvents() {
            await this.$store.dispatch("fetchAllEvents");
    },
            getEventTypeById(id) {
                return this.$store.state.events_type.find(type => type.id == id).description
            },
            getDateAndTime(dateTime) {
                const dateAndTime = dateTime.split('/')
                return dateAndTime
            },
            seeMoreEvent(event) {
                this.$store.dispatch('seeMoreEvent', event)
                this.$router.push({name: 'EventsDetails'})
            },
            removeEvent(id) {
                this.$store.dispatch('removeEvent', id)
                this.$router.push({name: 'Home'})
            },
            manageEnrollments(event) {
                this.$store.dispatch('manageEnrollments', event)
                this.$router.push({name: 'EnrollmentsUsersList'})
            }
        }
    }
</script>

<style>

</style>