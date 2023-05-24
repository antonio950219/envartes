<script lang="ts">
import imgArrowUp from "~/assets/images/icon-arrowUp.svg"

export default defineComponent({
    name: "Payment",
    components: {
    },
    data () {
        return ({
            imgArrowUp,
            isCurrentTable : false
        })
    },
    props: ['paymentMethod', 'poNumber', 'shipMethod', 'shipDate'],
    methods: {
        onChangeTable() {
            this.$emit("icon-clicked", this.isCurrentTable);
        }
    }
});
</script>

<template>
    <div class="mx-auto payment-table">
        <div class="hidden-mobile-layout">
            <div class="grid grid-cols-9 items-center payment-title px-6 rounded-full">
                <img :src="imgArrowUp" @click="onChangeTable" class="pt-1" alt="" />
                <div class="col-span-2">Payment Method</div>
                <div class="col-span-2">PO Number</div>
                <div class="col-span-3">Ship Method</div>
                <div class="col-span-1">Ship Date</div>
            </div>
            <div class="payment-body px-6">
                <div class="grid grid-cols-9 items-center">
                    <div></div>
                    <div class="col-span-2">{{paymentMethod}}</div>
                    <div class="col-span-2">{{poNumber}}</div>
                    <div class="col-span-3">{{shipMethod}}</div>
                    <div class="col-span-1">{{shipDate}}</div>
                </div>
            </div>
        </div>
        <div class="show-mobile-layout">
            <div class="grid grid-cols-9 items-center payment-title px-6 rounded-full mb-5">
                <img :src="imgArrowUp" @click="onChangeTable" class="pt-1" alt="" />
                <div class="col-span-8">Payment Information</div>
            </div>
            <div class="payment-mobile-body rounded-xl py-2 px-7">
                <div class="my-5 mobile-body-title font-bold">Paypal</div>
                <div class="flex justify-between mobile-body-text">
                    <div>PO Number</div>
                    <div>101216</div>
                </div>
                <div class="payment-spacer my-5"></div>
                
                <div class="flex justify-between mobile-body-text">
                    <div>Ship Method</div>
                    <div>UPS</div>
                </div>
                <div class="payment-spacer my-5"></div>
                
                <div class="flex justify-between mobile-body-text">
                    <div>Ship Date</div>
                    <div>11/28/2022</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.payment-table {
    width: 90%;
    & .payment-title {
        font-size: 16px;
        color: #030037;
        background-color: rgba(12, 28, 71, 0.02);
        font-weight: bold;
    }
    & .payment-body {
        font-size: 16px;
        color: rgba(12, 28, 71, 0.75);
        & .payment-spacer {
            width: 100%;
            height: 1px;
            background-color: rgba(12, 28, 71, 0.1);
        }
        & .mobile-body-title {
            font-size: 17px;
            color: #030037;
            font-weight: bold;
        }
        & .mobile-body-text {
            color: #030037;
        }
    }
    & .payment-mobile-body {
        font-size: 16px;
        color: #030037;
        background-color: rgba(12, 28, 71, 0.02);
    }
    & .show-mobile-layout {
        display: none;
    }
    & .hidden-mobile-layout {
        display: block;
    }
    @media (max-width: 1024px) {        
        & .show-mobile-layout {
            display: block;
        }
        & .hidden-mobile-layout {
            display: none;
        }
    }
}
</style>