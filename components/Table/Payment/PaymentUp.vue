<script lang="ts">
import imgArrowDown from "~/assets/images/icon-arrowDown.svg"

export default defineComponent({
    name: "Payment",
    components: {
    },
    data () {
        return ({
            imgArrowDown,
            isCurrentTable : true
        })
    },
    props: [],
    methods: {
        onChangeTable() {
            this.$emit("icon-clicked", this.isCurrentTable);
        }
    }
});
</script>

<template>
    <div class="payment-table px-6 mx-auto rounded-full">
        <div class="grid grid-cols-9 items-center">
            <img :src="imgArrowDown" @click="onChangeTable" class="col-span-1 pt-1" alt="" />
            <div class="col-span-5 lg:col-span-2 payment-title">Payment Information</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.payment-table {
    width: 90%;
    background-color: #030037;
    & .payment-title {
        font-size: 16px;
        color: white;
        font-weight: bold;
    }
}
</style>