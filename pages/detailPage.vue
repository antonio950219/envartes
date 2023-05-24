<script lang="ts">
  import OrderTable from "@/components/Table/Order.vue";
  import AddressTable from "@/components/Table/Address.vue";
  import ItemTable from "@/components/Table/ItemInfo/index.vue";
  import PaymentTable from "@/components/Table/Payment/index.vue"
  import Attachment from "@/components/Attachment.vue";

  const ADDRESS_DATA = [
    {
      title: "Billing Address",
      testName: "Maher test",
      address: "3511 Tall Sycamore Trail",
      location: "United States"
    },
    {
      title: "Shipping Address",
      testName: "Maher test",
      address: "3511 Tall Sycamore Trail",
      location: "United States"
    },
    
  ];

export default {
  name: 'DetailPage',
  components: {
    OrderTable,
    AddressTable,
    ItemTable,
    PaymentTable,
    Attachment
  },
  data () {
    return ({
      ADDRESS_DATA,
      isCurrentPage : true
    })
  },
  methods: {
    onChangePage() {
        this.$emit("detail-clicked", this.isCurrentPage);
    }
  }
}
</script>

<template>
  <main class="container">
      <OrderTable
        sequenceNumber="0"
        date="11/28/2022"
        orderNumber="SO-0006"
        name="70088"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 justify-center my-12">
        <AddressTable 
          v-for="(data, index) in ADDRESS_DATA"
          :key="index"
          :title="data.title"
          :testName="data.testName"
          :address="data.address"
          :location="data.location"
        />
      </div>

      <ItemTable />
      <PaymentTable />
      <Attachment />

      <div @click="onChangePage" class="detail-btn rounded-full flex justify-center items-center mx-auto">
        Overview
      </div>
    </main>
</template>

<style lang="scss" scoped>
.detail-btn {
    padding: 15px 70px;
    width: 250px;
    font-size: 16px;
    font-weight: bold;
    background-color: #C9A347;
    color: white;
    cursor: pointer;
}
</style>