<script lang="ts">
import imgArrowUp from "~/assets/images/icon-arrowUp.svg"

export default defineComponent({
    name: "ItemInfo",
    components: {
    },
    data () {
        return ({
            imgArrowUp,
            isCurrentTable : false
        })
    },
    props: ['item', 'description', 'quantity', 'amount'],
    methods: {
        onChangeTable() {
            this.$emit("icon-clicked", this.isCurrentTable);
        }
    }
});
</script>

<template>
    <div class="mx-auto item-table">
        <div class="hidden-mobile-layout">
            <div class="grid grid-cols-9 items-center item-title px-6 rounded-full">
                    <img :src="imgArrowUp"  @click="onChangeTable" class="pt-1" alt="" />
                    <div class="col-span-2">Item</div>
                    <div class="col-span-4">Description</div>
                    <div class="col-span-1">Quantity</div>
                    <div class="col-span-1">Amount</div>
            </div>
            <div class="item-body px-6">
                <div class="grid grid-cols-9 items-center my-2">
                    <div></div>
                    <div class="col-span-2">PA00002 : PA00002-W</div>
                    <div class="col-span-4">Lorem ipsum dolor sit amet consectetur. Id vitae venenatis orci nec gravida.</div>
                    <div class="col-span-1">1</div>
                    <div class="col-span-1">1.00</div>
                </div>
                <div class="grid grid-cols-9 items-center my-2">
                    <div></div>
                    <div class="col-span-2">PA00002 : PA00002-W</div>
                    <div class="col-span-4">Lorem ipsum dolor sit amet consectetur. Id vitae venenatis orci nec gravida.</div>
                    <div class="col-span-1">1</div>
                    <div class="col-span-1">13.00</div>
                </div>
                <div class="grid grid-cols-9 items-center my-2">
                    <div></div>
                    <div class="col-span-2">PA00002 : PA00002-W</div>
                    <div class="col-span-4">Lorem ipsum dolor sit amet consectetur. Id vitae venenatis orci nec gravida.</div>
                    <div class="col-span-1">1</div>
                    <div class="col-span-1">46.00</div>
                </div>
            </div>
            <div class="item-table-divider my-5"></div>
            <div class="item-table-tvalue px-6">
                <div class="grid grid-cols-9 items-center">
                    <div></div>
                    <div class="col-span-2">Total</div>
                    <div class="col-span-4"></div>
                    <div class="col-span-1"></div>
                    <div class="col-span-1">$70.00</div>
                </div>
            </div>
        </div>
        <div class="show-mobile-layout">
            <div class="grid grid-cols-9 items-center item-title px-6 rounded-full mb-5">
                <img :src="imgArrowUp" @click="onChangeTable" class="pt-1" alt="" />
                <div class="col-span-4">Items Information</div>
                <div class="col-span-3">Total Amount</div>
                <div class="col-span-1">$70.00</div>
            </div>
            <div class="item-mobile-body">
                <div class="my-5 item-container rounded-xl py-2 px-7">
                    <div class="font-bold">PA00002 : PA00002-W</div>
                    <div class="my-3">Lorem ipsum dolor sit amet consectetur. Id vitae venenatis orci nec gravida.</div>
                    <div class="flex justify-center rounded-full">
                        <div class="flex justify-between w-1/2 px-5 rounded-part rounded-full">
                            <div class="font-bold">Quantity</div>
                            <div>1</div>
                        </div>
                        <div class="flex justify-between w-1/2 px-5 rounded-part rounded-full">
                            <div class="font-bold">Amount</div>
                            <div>1.00</div>
                        </div>
                    </div>
                </div>
                
                <div class="my-5 item-container rounded-xl py-2 px-7">
                    <div class="font-bold">PA00002 : PA00002-W</div>
                    <div class="my-3">Lorem ipsum dolor sit amet consectetur. Id vitae venenatis orci nec gravida.</div>
                    <div class="flex justify-center rounded-full">
                        <div class="flex justify-between w-1/2 px-5 rounded-part rounded-full">
                            <div class="font-bold">Quantity</div>
                            <div>1</div>
                        </div>
                        <div class="flex justify-between w-1/2 px-5 rounded-part rounded-full">
                            <div class="font-bold">Amount</div>
                            <div>13.00</div>
                        </div>
                    </div>
                </div>
                
                <div class="my-5 item-container rounded-xl py-2 px-7">
                    <div class="font-bold">PA00002 : PA00002-W</div>
                    <div class="my-3">Lorem ipsum dolor sit amet consectetur. Id vitae venenatis orci nec gravida.</div>
                    <div class="flex justify-center rounded-full">
                        <div class="flex justify-between w-1/2 px-5 rounded-part rounded-full">
                            <div class="font-bold">Quantity</div>
                            <div>1</div>
                        </div>
                        <div class="flex justify-between w-1/2 px-5 rounded-part rounded-full">
                            <div class="font-bold">Amount</div>
                            <div>46.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item-table {
    width: 90%;
    font-size: 16px;

    & .item-title {
        color: #030037;
        background-color: rgba(12, 28, 71, 0.02);
        font-weight: bold;
    }

    & .item-body {
        color: rgba(12, 28, 71, 0.75);
    }
    & .item-mobile-body {
        color: #030037;
        & .item-container {
            background-color: rgba(12, 28, 71, 0.02);
            & .rounded-part {
                background-color: rgba(12, 28, 71, 0.02);
            }
        }
    }

    & .item-table-divider {
        background-color: rgba(12, 28, 71, 0.1);
        height: 1px;
        width: 100%;
    }

    & .item-table-tvalue {
        width: 100%;
        color: #030037;
        font-weight: bold;
    }
    & .show-mobile-layout {
        display: none;
    }
    & .hidden-mobile-layout {
        display: block;
    }
    @media (max-width: 1024px) {        
        .show-mobile-layout {
            display: block;
        }
        .hidden-mobile-layout {
            display: none;
        }
    }
}
</style>