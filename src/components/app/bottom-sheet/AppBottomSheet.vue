<script setup lang="ts">
import { VNode, onMounted, render, ref, VNodeRef } from "vue";

interface Props {
    modelValue: boolean;
}
const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <div class="app-bottom-sheet" @click="emit('update:modelValue', false)" v-if="modelValue">
        <div class="app-bottom-sheet__box" @click="$event.stopImmediatePropagation()">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-bottom-sheet {
    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-end;

    background-color: rgba(0, 0, 0, 0.25);

    &__box {
        width: 100%;
        max-width: 720px;
        height: fit-content;

        margin: 0 auto;

        border-radius: 5px;
    }
}
</style>
