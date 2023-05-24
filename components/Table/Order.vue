<script lang="ts">

export default defineComponent({
    name: "Order",
    components: {
    },
    props: ['sequenceNumber', 'date', 'orderNumber', 'name'],
});
</script>

<template>
    <div class="order mt-12 mx-auto">
        <div class="order-table">
            <div class="order-title flex justify-center mb-5">Sales Order</div>

            <div class="order-container">
                <div class="order-item flex flex-row justify-between">
                    <div class="order-item-title">Line Sequence Number</div>
                    <div>{{sequenceNumber}}</div>
                </div>
                <div class="order-divider my-5"></div>
            </div>

            <div class="order-container">
                <div class="order-item flex flex-row justify-between">
                    <div class="order-item-title">Date</div>
                    <div>{{date}}</div>
                </div>
                <div class="order-divider my-5"></div>
            </div>

            <div class="order-container">
                <div class="order-item flex flex-row justify-between">
                    <div class="order-item-title">Order Number</div>
                    <div>{{orderNumber}}</div>
                </div>
                <div class="order-divider my-5"></div>
            </div>

            <div class="order-container">
                <div class="order-item flex flex-row justify-between">
                    <div class="order-item-title">Name</div>
                    <div>{{name}}</div>
                </div>
                <div class="order-divider my-5"></div>
            </div>
        </div>

        <div class="order-total mt-5">
            <div class="flex flex-row justify-between">
                <div class="order-total-item">Total</div>
                <div class="order-total-item">$70.00</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.order {
    width: 90%;
    & .order-table {
        background-color: rgba(12, 28, 71, 0.02);
        padding: 25px;
        margin-bottom: 15px;
        border-radius: 20px;

        & .order-title {
            font-size: 36px;
            color: #030037;
            font-weight: bold;
        }

        & .order-container {
            & .order-item {
                & .order-item-title {
                    font-size: 16px;
                    color: #030037;
                    font-weight: bold;
                }
            }

            & .order-divider {
                width: 100%;
                height: 1px;
                background-color: rgba(12, 28, 71, 0.1);
            }
        }
    }

    & .order-total {
        & .order-total-item {
            font-size: 24px;
            color: #030037;
            font-weight: bold;
        }
    }
}
</style>