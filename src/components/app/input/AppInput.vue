<script setup lang="ts">
import { computed } from "@vue/reactivity";
import AppSmallButton from "../button/AppSmallButton.vue";

interface Props {
    buttonText?: string;
    hintText?: string;
    modelValue: string;
}
const props = defineProps<Props>();
const emit = defineEmits(["click-button", "update:modelValue"]);

const modelValue = computed(() => props.modelValue);

function handleInput(e: Event) {
    emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<template>
    <div class="app-input">
        <input v-bind="$attrs" :value="modelValue" @input="handleInput" @keypress.enter="emit('click-button')" class="app-input__input" type="text" />
        <AppSmallButton v-if="props.buttonText" class="app-input__button" @click="emit('click-button')">{{ props.buttonText }}</AppSmallButton>
        <div v-if="props.hintText" class="app-input__hint-text">{{ hintText }}</div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.app-input {
    position: relative;

    display: flex;
    padding: 0 28px 0 24px;
    width: auto;
    &__input {
        @include input;
        border: 1px solid #a0a0a0;
        border-radius: 8px;
    }
    &__button {
        margin-left: 10px;
    }
    &__hint-text {
        @include hint-text;
    }
}
</style>
