<script setup lang="ts">
import { computed } from "@vue/reactivity";

interface Props {
    modelValue: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(["click-button", "update:modelValue"]);

const modelValue = computed(() => props.modelValue);

function handleInput(e: Event) {
    let target = e.target as HTMLInputElement;
    emit("update:modelValue", target.checked);
}
function toggle() {
    emit("update:modelValue", !modelValue.value);
}
</script>

<template>
    <label class="app-checkbox" @keypress.enter="toggle">
        <input :checked="modelValue" v-bind="$attrs" @input="handleInput" type="checkbox" class="app-checkbox__input" />
        <span class="app-checkbox__button"> </span>
        <span class="app-checkbox__content"><slot></slot></span>
    </label>
</template>

<style lang="scss" scoped>
.app-checkbox {
    cursor: pointer;
    display: flex;
    align-items: center;
    .app-checkbox__input {
        display: none;
    }
    .app-checkbox__button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        border: 1px solid #ababab;
        border-radius: 100%;
        /* margin: 10px; */
        transition: 0.25s;
        .material-icons {
            transform: translateY(8px) scale(0);
            color: white;
            font-size: 18px;
            font-weight: bold;
            transition: 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            // transition-delay: 0.05s;
        }
    }
    .app-checkbox__content {
    }
    // 체크 시
    .app-checkbox__input:checked + .app-checkbox__button {
        border: 1px solid $white;
        background-color: $white;
        .material-icons {
            transform: translateY(0px) scale(1);
        }
    }
}
</style>
