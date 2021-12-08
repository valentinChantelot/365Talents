<template>
    <div class="home">
        <input type="text" v-model="inputValue" />
        <button @click="sendToAPI">click</button>

        <h1>HOME</h1>
    </div>
</template>

<script>
import { getCompanyInfos } from "../services/company"

export default {
    name: "Home",
    data() {
        return {
            inputValue: "test",
        }
    },
    methods: {
        sendToAPI: async function () {
            const { data } = await getCompanyInfos({ company: this.inputValue })
            data.error
                ? console.log(`ERREUR : ${data.error}`)
                : console.log(data)
        },
    },
}
</script>

<style lang="scss">
h1 {
    color: $accent;
}
</style>
