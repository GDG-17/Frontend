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
    @include clickable();

    height: fit-content;
    display: flex;
    align-items: center;

    padding: 16px 24px;

    border-bottom: 1px solid $gray;

    &__emoji {
        @include emoji-box();
    }

    &__description {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }

    &:hover {
        filter: brightness(0.9);
    }
    &:active {
        filter: brightness(0.8);
    }
}
</style>
