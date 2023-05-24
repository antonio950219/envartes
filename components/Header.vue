<template>
  <main class="container">
    <div class="flex flex-col items-center justify-center lg:flex-row md:justify-end mt-12">
      <img :src="imgLogo" class="img-logo" width="300" alt="">

      <div class="mobile-order-status">
        <div class="flex justify-center mt-7 mx-auto">
          <div class="text-order mr-2 text-center">Order Status:</div>
          <div class="text-pending text-center">Pending Production</div>
        </div>
        <div class="flex justify-center mt-2">
          <div class="text-delivery-title mr-1">Estimated Delivery Date:</div>
          <div class="text-delivery-date">10 May - 25 May</div>
        </div>
      </div>

      <div class="flex mt-10 lg:mt-0">
        <ButtonRounded text="Approve" />
        <ButtonOutlined text="Reject" />
      </div>
    </div>
  </main>
</template>

<script>
import imgLogo from 'assets/images/logo.png'

export default {
  name: 'Header',
  components: {
  },
  data () {
    return ({
      imgLogo
    })
  }
}
</script>

<style lang="scss" scoped>
.mobile-order-status {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1024px) {
  .mobile-order-status {
    display: none;
  }
}
@media (min-width: 1024px) {
  .img-logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  } 
}
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
</style>