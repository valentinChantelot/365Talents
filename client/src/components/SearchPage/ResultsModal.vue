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
            <p class="description">{{ company.description }}</p>

            <div class="global-lookup" v-if="company.globalLookup.length">
                <div v-for="(stat, index) in company.globalLookup" :key="index">
                    <h4>{{ Object.keys(stat)[0] }}</h4>
                    <p>{{ Object.values(stat)[0] }}</p>
                </div>
                <h4>{{ Object.keys(this.phoneNumber)[0] }}</h4>
                <p>{{ Object.values(this.phoneNumber)[0] }}</p>
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
    data() {
        return {
            phoneNumber: null,
        }
    },
    mounted() {
        this.company.globalLookup.forEach((stat, index) => {
            for (const [key, value] of Object.entries(stat)) {
                if (value.startsWith("+") && !isNaN(value.charAt(1))) {
                    const splittedString = value.split("\n")
                    this.phoneNumber = { [key]: splittedString[0] }
                    this.company.globalLookup.splice(1, index)
                }
            }
        })
    },
}
</script>

<style lang="scss" scoped>
.results-modal {
    h3 {
        font-size: 3rem;
    }

    &__content {
        text-align: left;
        max-width: 80%;
        margin: 0 auto;

        .description {
            margin-bottom: 3rem;
        }

        .global-lookup {
            h4 {
                font-size: 1.6rem;
                font-weight: 700;
                color: $dark;
            }

            p {
                margin-bottom: 1rem;
                font-size: 1.6rem;
                font-weight: 400;
                color: $dark;
            }
        }
    }

    .logo {
        position: absolute;
        top: -5rem;
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
