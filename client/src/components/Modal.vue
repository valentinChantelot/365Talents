<template>
    <section class="modal modal--from-bottom">
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
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    padding: 2rem 4rem;

    border-radius: 30px;
    text-align: center;

    background-color: $light;
    z-index: $modal;

    &--from-bottom {
        width: 80vw;
        bottom: 4rem;
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
        font-size: 1.8rem;
        font-weight: 700;
        color: rgba($dark, 0.7);
    }
    .illustration {
        display: block;
        max-height: 30vh;
        margin: 0 auto 3rem auto;
    }
}
</style>
