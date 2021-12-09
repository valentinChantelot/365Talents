<template>
    <div class="main-wrapper">
        <Header />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
    components: {
        Header,
    },
}
</script>

<style lang="scss">
.main-wrapper {
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    main {
        flex: 1;
    }
}
</style>
