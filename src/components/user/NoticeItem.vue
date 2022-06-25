<script setup lang="ts">
import { INotice } from "../../stores/user";

interface Props {
    notice: INotice;
}
const props = defineProps<Props>();
</script>

<template>
    <div class="notice-item">
        <div class="notice-item__emoji">{{ notice.emoji }}</div>
        <p class="notice-item__description">{{ notice.text || notice.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
.notice-item {
    height: fit-content;
    display: flex;
    align-items: center;

    padding: 10px 15px;

    background-color: $sub-light-gray;

    &__emoji {
        @include emoji-box();
    }

    &__description {
    }
}
</style>
