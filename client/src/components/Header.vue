<template>
    <header>
        <nav>
            <router-link to="/">
                <Logo />
            </router-link>
        </nav>
        <nav>
            <router-link to="/search">Search</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <nav>
            <a
                href="https://github.com/valentinChantelot/365Talents"
                class="button button--accent"
            >
                See code
            </a>
        </nav>
    </header>
</template>

<script>
import Logo from "@/assets/logo.svg"

export default {
    components: {
        Logo,
    },
}
</script>

<style lang="scss" scoped>
header {
    padding: 1rem 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        gap: 4rem;

        a {
            display: block;

            color: $dark;
            font-weight: 700;
        }
    }
}
</style>
