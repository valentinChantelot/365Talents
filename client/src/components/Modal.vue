<template>
    <section class="modal">
        <button class="close-button" @click="$emit('close')">
            <Close class="close-button__icon" />
        </button>

        <slot name="illustration"></slot>
        <slot name="title"></slot>
        <slot name="text"></slot>
        <slot></slot>
    </section>
</template>

<script>
import Close from "../assets/close.svg"
export default {
    components: {
        Close,
    },
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    left: 50%;
    bottom: 4rem;
    transform: translateX(-50%);

    width: 80vw;
    padding: 2rem 4rem;

    border-radius: 30px;
    text-align: center;

    background-color: $light;
    z-index: $modal;

    @include phone {
        top: 1rem;
        right: 1rem;
        bottom: 1rem;
        left: 1rem;

        width: inherit;
        transform: inherit;
        text-align: left;
    }

    .close-button {
        display: block;
        margin-left: auto;
        margin-bottom: 2rem;

        border: none;
        background: none;

        &__icon {
            width: 2rem;
            height: 2rem;
        }
    }

    h3 {
        margin-bottom: 2rem;
        font-size: 2.5rem;
        font-weight: 700;
        color: $dark;
    }

    p {
        font-size: 1.6rem;
        font-weight: 400;
        color: $dark;
    }
    .illustration {
        display: block;
        max-height: 30vh;
        margin: 0 auto 3rem auto;
    }
}
</style>
