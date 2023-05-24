<script lang="ts">
import imgArrowDown from "~/assets/images/icon-arrowDown.svg"

export default defineComponent({
    name: "ItemInfo",
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
    <div class="item-table px-6 rounded-full mx-auto">
        <div class="grid grid-cols-9 items-center">
            <img :src="imgArrowDown" @click="onChangeTable" class="col-span-1 pt-1 mr-auto" alt="" />
            <div class="col-span-4 lg:col-span-2">Items Information</div>
            <div class="hidden lg:flex lg:col-span-3"></div>
            <div class="col-span-3 lg:col-span-2">Total Amount</div>
            <div class="col-span-1">$70.00</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item-table {
    width: 90%;
    background-color: #030037;

    font-size: 16px;
    color: white;
    font-weight: bold;
}
</style>