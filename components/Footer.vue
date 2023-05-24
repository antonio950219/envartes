<template>
    <div class="container footer my-10">
        <div class="footer-divider my-5"></div>
        <div class="flex flex-col lg:flex-row items-center lg:justify-end">
            <div class="flex flex-col mr-auto">
                <img :src="imgLogo" width="255" alt="" />
                <div class="footer-date mt-5">All Rights Reserved @ 2023</div>
            </div>
            <div class="flex w-full lg:w-auto justify-between mt-10 lg:mt-0">
                <div class="footer-text">
                    Entartes <br />
                    PO Box 219254 <br />
                    Houston TX 77218
                </div>
                <div class="footer-text ml-12">
                    Parent Company <br />
                    PO Box 219254 <br />
                    Houston TX 77218
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import imgLogo from 'assets/images/logo.png'

    export default {
    name: 'Footer',
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
.footer {
    & .footer-divider {
        background-color: rgba(12, 28, 71, 0.1);
        height: 1px;
        widows: 100%;
    }
    & .footer-text {
        font-size: 16px;
        color: rgba(12, 28, 71, 0.75);
    }
    & .footer-date {
        font-size: 16px;
        color: rgba(12, 28, 71, 0.75);
    }
}
</style>