<script lang="ts">
import PaymentTableDown from "./PaymentDown.vue";
import PaymentTableUp from "./PaymentUp.vue"

export default defineComponent({
    name: "Payment",
    components: {
        PaymentTableDown,
        PaymentTableUp,
    },
    data () {
        return ({
            tableType : false
        })
    },
    props: [],
    methods: {
        onClicked: function(params) {
            this.tableType = params;
        }
    }
});
</script>

<template>
    <div class="my-10">
        <template v-if="tableType">
            <PaymentTableDown
                @icon-clicked="onClicked"
                paymentMethod="Paypal"
                poNumber="101216"
                shipMethod="UPS"
                shipDate="11/28/2022"
            />
        </template>
        <template v-else>
            <PaymentTableUp 
                @icon-clicked="onClicked"
            />
        </template>
    </div>
</template>

<style lang="scss" scoped>
</style>