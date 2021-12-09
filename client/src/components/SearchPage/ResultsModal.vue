<template>
    <Modal @close="$emit('close')" class="results-modal">
        <picture>
            <img
                :src="company.logo"
                :alt="`${company.companyName}'s logo`"
                class="logo"
            />
        </picture>

        <template v-slot:title>
            <h3>{{ company.companyName }}</h3>
        </template>

        <p class="chip">{{ company.activityArea }}</p>

        <div class="results-modal__content">
            <p>{{ company.description }}</p>

            <div class="global-lookup" v-if="company.globalLookup.length">
                <p v-for="(stat, index) in company.globalLookup" :key="index">
                    {{ stat }}
                </p>
            </div>
        </div>
        <a
            :href="company.website"
            target="_blank"
            class="button button--primary"
        >
            See the company website
        </a>
    </Modal>
</template>

<script>
import Modal from "../Modal.vue"
export default {
    name: "ResultsModal",
    components: {
        Modal,
    },
    props: {
        company: Object,
    },
}
</script>

<style lang="scss" scoped>
.results-modal {
    h3 {
        font-size: 3rem;
    }

    &__content {
        max-width: 80%;
        margin: 0 auto;
    }

    .logo {
        position: absolute;
        top: -20%;
        left: 10vw;

        border-radius: 20px;
    }

    .chip {
        margin-bottom: 3rem;
        font-size: 1.6rem;
        color: $dark;
        font-weight: 400;
    }

    .button {
        margin: 4rem auto;
    }
}
</style>
