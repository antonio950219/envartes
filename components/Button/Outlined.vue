<script setup lang="ts">

interface Props {
  text?: string;
}

const emits = defineEmits(["pressButton"]);

const clicked = () => emits("pressButton");
const { text } = defineProps<Props>();
</script>

<template>
  <button
    @click.prevent="clicked"
    class="flex items-center justify-center mx-4 px-9 py-2 outlined"
  >
    {{text}}
    <slot />
  </button>
</template>

<style scoped>
  .outlined {
    border-radius: 8px;
    border: 1px solid #DD1818;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    background-color: white;
    color: #DD1818;
}
</style>