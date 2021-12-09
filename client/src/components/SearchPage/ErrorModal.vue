<template>
    <section class="error-modal modal modal--from-bottom">
        <button class="close-button" @click="$emit('close')">
            <Close class="close-button__icon" />
        </button>

        <h3>Oups, it failed. :/</h3>
        <p>
            Problem encountered : <br />
            {{ errors }}
        </p>

        <ErrorSvg class="illustration" />
    </section>
</template>

<script>
import ErrorSvg from "../../assets/error.svg"
import Close from "../../assets/close.svg"
export default {
    name: "MoreInfos",
    components: {
        ErrorSvg,
        Close,
    },
    props: {
        errors: String,
    },
}
</script>

<style lang="scss" scoped>
@import "../../styles/modals.scss";

.error-modal {
    padding: 2rem 4rem;

    border-radius: 30px;
    background-color: $light;
    text-align: center;
    color: $dark;

    h3 {
        margin-bottom: 2rem;
        font-weight: 700;
        font-size: 2rem;
    }

    p {
        margin-bottom: 5rem;
    }

    .illustration {
        display: block;
        max-height: 30vh;
        margin: 0 auto;
    }
}
</style>
