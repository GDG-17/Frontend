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

    background-color: $black;
    border-bottom: 1px solid $charcoal;

    &__emoji {
        @include emoji-box();
    }

    &__description {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }
}
</style>
