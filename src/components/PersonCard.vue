<template>
    <div class="person-card">
        <span class="name">{{person.name}}</span>
        <span class="age">{{person.age}}</span>
    </div>
</template>

<script>
export default {
    name: "PersonCard",
    props: {
        person: Object
    }
}
</script>

<style scoped lang="scss">
    .person-card {
        display: flex;
        justify-content: space-between;
        .age {
            font-weight: 700;
        }
    }
</style>
