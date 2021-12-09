<template>
    <header>
        <nav>
            <router-link to="/">
                <Logo />
            </router-link>
        </nav>
        <nav class="main-nav">
            <router-link to="/search">Search</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <nav>
            <a
                href="https://github.com/valentinChantelot/365Talents"
                target="_blank"
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
    position: relative;
    padding: 1rem 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: $dark;
        font-weight: 700;
    }

    .main-nav {
        position: absolute;
        top: -2rem;
        left: 50%;

        display: flex;
        padding: 4rem 8rem;

        border-radius: 9999px;
        gap: 4rem;
        background-color: white;

        transform: translateX(-50%);

        a {
            display: block;
        }
    }
}
</style>
