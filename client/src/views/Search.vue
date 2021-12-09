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
                @errors="handleErrors"
            />
            <button
                type="button"
                class="more-infos-button"
                @click="handleClick"
            >
                MORE INFOS
            </button>
            <MoreInfosModal v-if="showMoreInfos" @close="closeAllModals" />
            <ErrorModal
                v-if="showError"
                @close="closeAllModals"
                :errors="errors"
            />

            <div
                class="overlay"
                v-if="overlayShouldBeDisplayed"
                @click="closeAllModals"
            ></div>
        </section>
    </div>
</template>

<script>
import modalMixin from "../mixins/modals.vue"
import SearchForm from "../components/SearchPage/SearchForm.vue"
import MoreInfosModal from "../components/SearchPage/MoreInfosModal.vue"
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
        MoreInfosModal,
        ErrorModal,
    },
    data() {
        return {
            results: null,
            errors: null,
        }
    },
    methods: {
        handleClick: function () {
            this.openModal(MORE_INFOS_MODAL)
        },
        handleResults: function (results) {
            this.results = results
            this.openModal(RESULTS_MODAL)
        },
        handleErrors: function (errors) {
            this.errors = errors
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
