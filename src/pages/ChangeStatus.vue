<script setup lang="ts">
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
</script>

<template>
    <div class="change-status">
        <div class="change-status__header">
            <div class="change-status__header__logo">앱 이름</div>
            <div class="change-status__header__actions"></div>
        </div>
        <div class="change-status__list">
            <div class="change-status__list__item">
                <div class="change-status__list__item__emoji">:)</div>
                <p class="change-status__list__item__description">고객 상태 텍스트 입력</p>
            </div>
            <div class="change-status__list__item">
                <div class="change-status__list__item__emoji">:)</div>
                <p class="change-status__list__item__description">다음 이후 지우기<br />default 시간</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.change-status {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 720px;
    height: 100%;

    margin: 0 auto;

    .change-status__header {
        width: 100%;

        display: flex;
        align-items: center;

        height: 80px;

        padding: 10px;

        background-color: $primary-color;
    }

    .change-status__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;

        padding: 10px 15px;

        background-color: $sub-light-gray;
        .change-status__list__item {
            display: flex;
            align-items: center;

            &__emoji {
                width: 46px;
                height: 46px;

                display: flex;
                justify-content: center;
                align-items: center;

                overflow: hidden;
                border-radius: 7px;

                background-color: $sub-dark-gray;

                margin-right: 10px;
            }
            &__description {
            }
        }
    }
}
</style>
