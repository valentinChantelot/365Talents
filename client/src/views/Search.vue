<template>
    <div class="search-page wrapper">
        <Illustration
            class="illustration"
            aria-label="An illustration, showing a woman searching"
        />
        <section class="search-page__content">
            <h1>
                Here is where <br />
                the magic happen.
            </h1>

            <SearchForm
                @loading="handleLoading"
                @results="handleResults"
                @errors="handleError"
            />
            <button
                type="button"
                class="more-infos-button"
                @click="handleClick"
            >
                HOW TO
            </button>
        </section>
        <MoreInfosModal v-if="showMoreInfos" @close="closeAllModals" />
        <ResultsModal
            v-if="showResults && company"
            :company="company"
            @close="closeAllModals"
        />
        <LoadingModal v-if="isLoading" @close="closeAllModals" />
        <ErrorModal v-if="showError" @close="closeAllModals" :error="error" />

        <div
            class="overlay"
            v-if="overlayShouldBeDisplayed"
            @click="closeAllModals"
        ></div>
    </div>
</template>

<script>
import modalMixin from "../mixins/modals.vue"
import SearchForm from "../components/SearchPage/SearchForm.vue"
import LoadingModal from "../components/SearchPage/LoadingModal.vue"
import MoreInfosModal from "../components/SearchPage/MoreInfosModal.vue"
import ResultsModal from "../components/SearchPage/ResultsModal.vue"
import ErrorModal from "../components/SearchPage/ErrorModal.vue"
import Illustration from "../assets/undraw-search-2.svg"
import {
    ERROR_MODAL,
    MORE_INFOS_MODAL,
    RESULTS_MODAL,
} from "../utils/constants"

export default {
    name: "Search",
    mixins: [modalMixin],
    components: {
        Illustration,
        SearchForm,
        LoadingModal,
        ResultsModal,
        MoreInfosModal,
        ErrorModal,
    },
    data() {
        return {
            company: {
                companyName: "365Talents Global",
                website: "https://www.365talents.com/en/",
                activityArea: "Logiciels informatiques",
                description:
                    "365Talents uses AI to solve major talent management challenges related to internal mobility, predicting future skill gaps, skills mapping, employee engagement, employee turnover, workforce planning and more.\n\nWe help you solve your HR challenges, so you can focus on what matters most: Your people.\n\nOur AI platform is based on machine learning and NLP algorithms in multiple languages.",
                logo: "https://media-exp1.licdn.com/dms/image/C560BAQFp6v1JUfCBYg/company-logo_200_200/0/1569302232532?e=1646870400&v=beta&t=_sVPsjuxeGdHt-PJ_9bDXVGgvb0TsH7R3eEU2Idae1Q",
                globalLookup: [
                    { "Site web": "https://www.365talents.com/en/" },
                    {
                        Téléphone:
                            "+1 917 9098370\nLe numéro de téléphone est le +1 917 9098370",
                    },
                    { "Taille de l’entreprise": "11-50 employés" },
                    { "Siège social": "New York, New York City" },
                    { "Fondée en": "2015" },
                ],
            },
            results: null,
            error: null,
        }
    },
    methods: {
        handleClick: function () {
            this.openModal(MORE_INFOS_MODAL)
        },
        handleResults: function (results) {
            this.company = results
            this.openModal(RESULTS_MODAL)
        },
        handleError: function (error) {
            this.error = error
            this.openModal(ERROR_MODAL)
        },
    },
}
</script>

<style lang="scss" scoped>
.search-page {
    position: relative;
    height: 100%;

    display: flex;
    align-items: center;

    &__content {
        padding: 10vh 0 0 10vw;

        .more-infos-button {
            display: block;
            margin: 0 auto;
            border: none;
            border-bottom: solid 1px $dark;
            background: none;
        }
    }
    .illustration {
        position: absolute;
        top: 5vh;
        right: 5vh;

        max-height: 80vh;

        z-index: -1;
    }

    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-color: rgba($dark, 0.6);
        z-index: $overlay;
    }
}
</style>
