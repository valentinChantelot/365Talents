<template>
    <Modal @close="$emit('close')">
        <template v-slot:illustration>
            <LoadingSvg class="illustration" />
        </template>

        <template v-slot:title>
            <h3>Loading...</h3>
        </template>

        <template v-slot:text>
            <p>
                We are retrieving the requested informations. :) <br />
                This operation could take a minute.
            </p>
        </template>
    </Modal>
</template>

<script>
import Modal from "../Modal.vue"
import LoadingSvg from "../../assets/undrw_loading.svg"
export default {
    name: "LoadingModal",
    components: {
        Modal,
        LoadingSvg,
    },
}
</script>

<style lang="scss" scoped></style>
