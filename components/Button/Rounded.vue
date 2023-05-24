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
    class="flex items-center justify-center px-9 py-2 cursor-pointer round"
  >
    {{text}}
    <slot />
  </button>
</template>

<style scoped>
.round {
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    background-color: #0895F1;
    color: white;
}
</style>