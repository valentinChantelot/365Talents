<template>
    <section class="more-infos modal modal--from-bottom">
        <button class="close-button" @click="$emit('close')">
            <Close class="close-button__icon" />
        </button>
        <p>
            To get relevant results, you need to type the corresponding
            highlighted part in the image below. You can find it in the URL of
            the company's LinkedIn page.
        </p>
        <MoreInfosUrl class="illustration" />
    </section>
</template>

<script>
import MoreInfosUrl from "../../assets/info.svg"
import Close from "../../assets/close.svg"
export default {
    name: "MoreInfos",
    components: {
        MoreInfosUrl,
        Close,
    },
}
</script>

<style lang="scss" scoped>
@import "../../styles/modals.scss";

.more-infos {
    padding: 2rem 4rem;

    background-color: $light;
    border-radius: 30px;

    p {
        margin-bottom: 2rem;
        color: $dark;
    }

    .illustration {
        display: block;
        max-width: 80%;
        margin: 0 auto;
    }
}
</style>
