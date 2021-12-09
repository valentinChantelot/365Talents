<template>
    <div class="about-page wrapper">
        <h1>About this app</h1>
        <article>
            <h2>Why this app ?</h2>
            <p>
                This application was produced by Valentin Chantelot as part of a
                technical test for 365Talents.
            </p>

            <h2>Objective</h2>
            <p>
                Display dynamically scraped information on a given company on a
                web page.
            </p>

            <h2>Thanks</h2>
            <p>
                Thanks to <a href="https://undraw.co/">Undraw</a> for the
                usefull illustration kit.
            </p>
        </article>
    </div>
</template>

<script>
export default {
    name: "About",
}
</script>

<style lang="scss" scoped>
.about-page {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $dark;

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
    }

    p {
        margin-bottom: 2rem;
    }
}
</style>
