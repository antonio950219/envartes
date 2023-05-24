<script lang="ts">

export default defineComponent({
    name: "ProcessCard",
    components: {
    },
    props: ['id', 'name', 'icon', 'status'],
    data() {
        return {
        }
    }
});
</script>

<template>
    <div class="flex flex-row process-card justify-center">
        <div class="flex flex-col card-item">
            <div class="flex justify-center mx-auto" :class="[status ? 'active-card' : 'in-active-card']">
                <img :src="`${icon}`" />
            </div>
            <div class="card-name mt-4">{{name}}</div>
            <div :class="[status ? 'active-check' : 'inactive-check']" class="mx-auto mt-1">
                <img src="~/assets/images/icon-checked.svg"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.process-card {
    & .card-item {
        width: 70px;
        text-align: center;    
        & .active-card {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #030037;
        }
        & .in-active-card {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: rgba(12, 28, 71, 0.5);
        }
        & .card-name {
            font-size: 14px;
            height: 45px;
            color: #030037;
            font-weight: bold;
        }
        & .active-check {
            width: 20px;
            height: 20px;
        }
        & .inactive-check {
            display: none;
        }
    }
}
</style>