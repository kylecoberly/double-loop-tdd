<template>
    <div id="app">
        <header>
            <h1>Lunch Bunch</h1>
        </header>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<style lang="scss">
$light-grey: hsl(240, 40%, 90%);

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
}


header {
    background-color: $light-grey;
    h1 {
        margin: 0;
        font-weight: 300;
    }
}

header, main {
    padding: 1rem;
}
</style>
