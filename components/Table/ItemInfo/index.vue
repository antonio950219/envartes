<script lang="ts">
import ItemTableDown from "./ItemInfoDown.vue";
import ItemTableUp from "./ItemInfoUp.vue"

export default defineComponent({
    name: "ItemInfo",
    components: {
        ItemTableDown,
        ItemTableUp,
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
            <ItemTableDown 
                @icon-clicked="onClicked"
            />
        </template>
        <template v-else>
            <ItemTableUp
                @icon-clicked="onClicked"
            />
        </template>
    </div>
</template>

<style lang="scss" scoped>
</style>