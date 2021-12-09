<script>
import {
    ERROR_MODAL,
    MORE_INFOS_MODAL,
    RESULTS_MODAL,
    LOADING_MODAL,
} from "../utils/constants"

export default {
    components: {},
    data() {
        return {
            isLoading: false,
            showMoreInfos: false,
            showError: false,
            showResults: true,
        }
    },
    computed: {
        overlayShouldBeDisplayed: function () {
            return (
                this.isLoading ||
                this.showMoreInfos ||
                this.showError ||
                this.showResults
            )
        },
    },
    methods: {
        closeAllModals: function () {
            this.isLoading = false
            this.showMoreInfos = false
            this.showError = false
            this.showResults = false
        },
        openModal: function (modal) {
            this.closeAllModals()
            switch (modal) {
                case ERROR_MODAL:
                    this.showError = true
                    break
                case MORE_INFOS_MODAL:
                    this.showMoreInfos = true
                    break
                case RESULTS_MODAL:
                    this.showResults = true
                    break
                case LOADING_MODAL:
                    this.isLoading = true
                    break
            }
        },
        handleLoading: function (boolean) {
            this.isLoading = boolean
        },
    },
}
</script>
