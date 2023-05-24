<script lang="ts">
    import SummaryTable from "@/components/Summary.vue";

    export default {
        name: 'DetailPage',
        components: {
            SummaryTable
        },
        data () {
            return ({
                isCurrentPage : false
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
        <div class="summary-container mt-10 text-center">
            <SummaryTable />
            <div @click="onChangePage" class="detail-btn rounded-full flex justify-center items-center mx-auto">
                View
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.summary-container {
    padding: 40px;
    background-color: rgba(12, 28, 71, 0.02);
    border-radius: 20px;
    .detail-btn {
        padding: 15px 70px;
        width: 250px;
        font-size: 16px;
        font-weight: bold;
        background-color: #C9A347;
        color: white;
        cursor: pointer;
    }
}
</style>