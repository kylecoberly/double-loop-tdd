<template>
    <form @submit.prevent="addPerson">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="What's your name?" v-model="name" />
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" @input="getFormattedDate(birthday)" placeholder="What's your birthday?" v-model="birthday" />
        <input id="add" type="submit" value="Add" />
    </form>
</template>

<script>

export default {
    name: "AddPerson",
    props: {
        person: Object
    },
    data(){
        return {
            name: "",
            birthday: ""
        };
    },
    methods: {
        getFormattedDate(dateString){
            this.formattedBirthday = new Date(dateString)
        },
        addPerson(){
            this.$emit("addPerson", {
                name: this.name,
                birthday: this.formattedBirthday,
            });
        },
    }
}
</script>

<style scoped lang="scss">
    $medium-grey: #ccc;
    $accent-color: hsl(240, 40%, 50%);
    $white: #fff;
    form {
        max-width: 20rem;
        label, input {
            width: 100%;
            display: block;
        }
        label {
            font-size: 0.75rem;
        }
        input {
            padding: 0.5rem 0.25rem;
            margin-bottom: 1rem;
            border: none;
            border-bottom: 1px solid $medium-grey;
            font-size: 1.25rem;
        }
        input[type=submit] {
            border: none;
            box-shadow: 2px 2px 3px $medium-grey;
            background-color: $accent-color;
            color: $white;
            font-weight: 700;
            transition: all 0.2s;
            cursor: pointer;
            &:hover {
                background-color: lighten($accent-color, 10%);
            }
        }
    }
</style>
