<template>
    <form>
        <label for="company_name"
            >Enter here the name of the company whose data you want to
            retrieve</label
        >
        <input
            type="text"
            name="company_name"
            id="company_name"
            v-model="companyName"
        />

        <button
            @click.prevent="sendToAPI"
            class="button button--primary"
            type="submit"
        >
            Search
        </button>
    </form>
</template>

<script>
import { getCompanyInfos } from "../../services/company"

export default {
    name: "SearchForm",
    data() {
        return {
            companyName: null,
        }
    },
    methods: {
        sendToAPI: async function () {
            this.$emit("loading", true)

            try {
                const { data } = await getCompanyInfos({
                    company: this.companyName,
                })
                console.log("data:", data)
                this.$emit("loading", false)
            } catch (error) {
                console.log("error:", error)

                this.$emit("loading", false)
            }

            // data.error
            //     ? this.$emit("errors", data.error)
            //     : this.$emit("results", data)
        },
    },
}
</script>

<style lang="scss" scoped>
form {
    padding-top: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    label {
        margin-bottom: 1rem;
        color: $dark;
    }

    input {
        margin-bottom: 1rem;
        outline: none;
        border: solid 2px $dark;

        width: 100%;
        line-height: 4rem;
        padding: 0 4rem;

        background: none;
        border-radius: 99999px;
    }

    .button {
        margin-bottom: 4rem;
    }
}
</style>
