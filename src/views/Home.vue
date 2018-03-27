<template>
    <div class="home">
        <add-person @addPerson="addPerson"></add-person>
        <section>
            <h2>The Cool Table</h2>
            <ul class="person-cards">
                <li v-for="person in people">
                    <person-card :person="person"></person-card>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import PersonCard from "../components/PersonCard.vue";
import AddPerson from "../components/AddPerson.vue";

export default {
    name: "home",
    components: {
        PersonCard,
        AddPerson
    },
    computed: {
        people(){
            return this.$store.getters.peopleWithAge;
        }
    },
    methods:{
        addPerson(person){
            console.log("person", person);
            this.$store.dispatch("addPerson", person);
        },
    }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700");

.home {
    section {
        h2 {
            font-weight: 300;
        }
        .person-cards {
            max-width: 20rem;
            list-style-type: none;
            padding: 0;
        }
    }
}
</style>
