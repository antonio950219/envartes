<script lang="ts">

export default defineComponent({
    name: "Address",
    components: {
    },
    props: ['title', 'testName', 'address', 'location', 'country'],
});
</script>

<template>
    <div class="table mx-auto my-3 lg:my-0">
        <div class="table-title">{{title}}</div>
        <div class="table-content">
            <div>{{testName}}</div>
            <div>{{address}}</div>
            <div>{{location}}</div>
            <div>{{country}}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.table {
    padding: 30px;
    border: 1px solid rgba(12, 28, 71, 0.5);
    border-radius: 20px;
    width: 90%;
    & .table-title {
        font-size: 18px;
        color: #030037;
        font-weight: bold;
        margin-bottom: 20px;
    }
    & .table-content {
        font-size: 18px;
        color: rgba(3, 0, 55, 0.75);
    }
}
</style>