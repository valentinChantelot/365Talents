<template>
    <Modal @close="$emit('close')" class="results-modal">
        <template v-slot:title>
            <h3>{{ company.companyName }}</h3>
        </template>

        <picture>
            <img
                :src="company.logo"
                :alt="`${company.companyName}'s logo`"
                class="logo"
            />
        </picture>

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
    @include phone {
        overflow-y: scroll;
    }

    h3 {
        font-size: 3rem;

        @include phone {
            text-align: center;
        }
    }

    &__content {
        text-align: left;
        max-width: 80%;
        margin: 0 auto;

        @include phone {
            max-width: 100%;
        }

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

        @include phone {
            position: inherit;
            display: block;
            margin: 0 auto 2rem auto;
        }
    }

    .chip {
        margin-bottom: 3rem;
        font-size: 1.6rem;
        color: $dark;
        font-weight: 400;

        @include phone {
            text-align: center;
        }
    }

    .button {
        margin: 4rem auto;

        @include phone {
            font-size: 1.2rem;
        }
    }
}
</style>
