<script setup lang="ts">
import { INotice } from "../../stores/user";

interface Props {
    notice: INotice;
}
const props = defineProps<Props>();
</script>

<template>
    <div class="notice-item">
        <div class="notice-item__profile-image">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        </div>
        <p class="notice-item__description">상태 텍스트</p>
    </div>
</template>

<style lang="scss" scoped>
.notice-item {
    height: fit-content;
    display: flex;
    align-items: center;

    padding: 10px 15px;

    background-color: $sub-light-gray;

    &__profile-image {
        width: 46px;
        height: 46px;

        display: flex;
        justify-content: center;
        align-items: center;

        overflow: hidden;
        border-radius: 7px;

        margin-right: 10px;

        img {
            width: 100%;
        }
    }

    &__description {
    }
}
</style>
