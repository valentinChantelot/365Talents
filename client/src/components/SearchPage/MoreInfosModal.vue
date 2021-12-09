<template>
    <Modal @close="$emit('close')">
        <template v-slot:illustration>
            <MoreInfosUrl class="illustration" />
        </template>

        <template v-slot:text>
            <p>
                To get relevant results, you need to type the corresponding
                highlighted part in the image above. You can find it in the URL
                of the company's LinkedIn page.
            </p>
        </template>
    </Modal>
</template>

<script>
import Modal from "../Modal.vue"
import MoreInfosUrl from "../../assets/info.svg"
export default {
    name: "MoreInfosModal",
    components: {
        Modal,
        MoreInfosUrl,
    },
}
</script>

<style lang="scss" scoped>
.illustration {
    display: block;
    max-width: 600px;
    margin: 0 auto;
}
</style>
