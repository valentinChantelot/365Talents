<template>
    <Modal @close="$emit('close')">
        <template v-slot:illustration>
            <ErrorSvg class="illustration" />
        </template>

        <template v-slot:title>
            <h3>Oups, it failed !</h3>
        </template>

        <template v-slot:text>
            <p>
                Problem encountered : <br />
                {{ error }}
            </p>
        </template>
    </Modal>
</template>

<script>
import Modal from "../Modal.vue"
import ErrorSvg from "../../assets/error.svg"
export default {
    name: "ErrorModal",
    components: {
        Modal,
        ErrorSvg,
    },
    props: {
        error: String,
    },
}
</script>

<style lang="scss" scoped></style>
