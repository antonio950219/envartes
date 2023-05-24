<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { FreeMode, Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';
  import ProcessCard from "@/components/Card/index.vue";
  import DetailPage from "./detailPage.vue";
  import SummaryPage from "./summaryPage.vue"

  
  import imgPendingApproval from "~/assets/images/pending-approval.svg"
  import imgPendingFlight from "~/assets/images/pending-flight.svg"
  import imgFlight from "~/assets/images/flight.svg"
  import imgCustomerApproval from "~/assets/images/customer-approval.svg"
  import imgPendingProduction from "~/assets/images/pending-production.svg"
  import imgProduction from "~/assets/images/production.svg"
  import imgPendingDelivery from "~/assets/images/pending-delivery.svg"
  import imgDelivery from "~/assets/images/delivery.svg"
  import imgDelivered from "~/assets/images/delivered.svg"


  const CARD_DATA = [
    {
      id: 1,
      name: "Pending Approval",
      icon: imgPendingApproval,
      status: true,
    },
    { id: 2 },
    {
      id: 3,
      name: "Pending Pre-Flight",
      icon: imgPendingFlight,
      status: true,
    },
    { id: 4 },
    {
      id: 5,
      name: "Preflight Passed",
      icon: imgFlight,
      status: true,
    },
    { id: 6 },
    {
      id: 7,
      name: "Customer Approval",
      icon: imgCustomerApproval,
      status: true,
    },
    { id: 8 },
    {
      id: 9,
      name: "Pending Production",
      icon: imgPendingProduction,
      status: false,
    },
    { id: 10 },
    {
      id: 11,
      name: "In Production",
      icon: imgProduction,
      status: false,
    },
    { id: 12 },
    {
      id: 13,
      name: "Pending Delivery",
      icon: imgPendingDelivery,
      status: false,
    },
    { id: 14 },
    {
      id: 15,
      name: "In Delivery",
      icon: imgDelivery,
      status: false,
    },
    {  id: 16 },
    {
      id: 17,
      name: "Delivered",
      icon: imgDelivered,
      status: false,
    },
  ];

  export default {
    el: '#app',
    name: 'HomePage',
    components: {
      ProcessCard,
      DetailPage,
      SummaryPage,
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [FreeMode],
      };
    },
    data () {
      return ({
        CARD_DATA,
        pageType : false,
      })
    },
    methods: {
      onClicked: function(params) {
        this.pageType = params;
      }
    },
}
</script>

<template>
  <main class="container">
      <div class="desktop-order-status">
        <div class="flex justify-center mt-4 mx-auto">
          <div class="text-order mr-2">Order Status:</div>
          <div class="text-pending">Pending Production</div>
        </div>
        <div class="flex justify-center mt-2">
          <div class="text-delivery-title mr-1">Estimated Delivery Date:</div>
          <div class="text-delivery-date">10 May - 25 May</div>
        </div>
      </div>

      <div class="mt-10 mx-auto">
        <div class="show-mobile-layout">
          <Swiper
            class="flex justify-center"
            :slidesPerView="5"
            :spaceBetween="0"                
            :freeMode="true"
            :modules="modules"
          >
            <SwiperSlide class="flex justify-center" v-for="(item, index) in CARD_DATA" :key="index">
              <template v-if="item.id%2==1">
                <ProcessCard
                  :name="item.name"
                  :icon="item.icon"
                  :status="item.status"
                />
              </template>
              <template v-else>
                <div class="spacer mx-auto"></div>
              </template>
            </SwiperSlide>
          </Swiper> 
        </div>
        <div class="hidden-mobile-layout flex">
          <Swiper
            class="flex justify-center"
            :slidesPerView="17"
            :spaceBetween="0"                
            :freeMode="true"
            :modules="modules"
          >
            <SwiperSlide class="flex justify-center" v-for="(item, index) in CARD_DATA" :key="index">
              <template v-if="item.id%2==1">
                <ProcessCard
                  :name="item.name"
                  :icon="item.icon"
                  :status="item.status"
                />
              </template>
              <template v-else>
                <div class="spacer mx-auto"></div>
              </template>
            </SwiperSlide>
          </Swiper> 
        </div>
      </div>

      <template v-if="pageType">
        <SummaryPage
            @detail-clicked="onClicked"
        />
      </template>
      <template v-else>
        <DetailPage
            @detail-clicked="onClicked"
        />
      </template>
  </main>
</template>

<style lang="scss" scoped>
.text-order {
  font-size: 24px;
  font-weight: bold;
  color: #030037;
}

.text-pending {
  font-size: 24px;
  font-weight: bold;
  color: #C9A347;
}

.text-delivery-title {
  font-size: 16px;
  color: #030037;
}

.text-delivery-date {
  font-size: 16px;
  color: #0C1C47;
}
.desktop-order-status {
  display: none;
}
@media (min-width: 1024px) {
  .desktop-order-status {
    display: flex;
    flex-direction: column;
  }
}
.spacer {
    position: relative;
    top: 30px;
    width:80%;
    height: 1px;
    background-color:  #030037;
    margin-left: 5px;
}
.show-mobile-layout {
    display: none;
  }
.hidden-mobile-layout {
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
</style>