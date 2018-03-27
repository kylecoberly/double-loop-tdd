import Vue from "vue";
import Vuex from "vuex";
import {birthdayToAge} from "@/utilities";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        people: [{
            name: "Kyle Coberly",
            birthday: "1984-02-18"
        }]
    },
    getters: {
        peopleWithAge: state => {
            return state.people.map(person => {
                person.age = birthdayToAge(person.birthday, new Date());
                return person;
            });
        }
    },
    mutations: {
        addPerson(state, person){
            state.people.push(person);
        }
    },
    actions: {
        addPerson(store, person){
            store.commit("addPerson", person);
        }
    }
});
