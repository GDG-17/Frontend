<script setup lang="ts">
import { useUserStore } from "../stores/user";
import NoticeItem from "../components/user/NoticeItem.vue";

const userStore = useUserStore();
userStore.refreshNoticeList();
</script>

<template>
    <div class="notice">
        <div class="notice__header">
            <div class="notice__header__logo">앱 이름</div>
            <div class="notice__header__actions"></div>
        </div>
        <div class="notice__list">
            <NoticeItem :notice="notice" v-for="notice of userStore.noticeList"></NoticeItem>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.notice {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 720px;
    height: 100%;

    margin: 0 auto;

    .notice__header {
        width: 100%;

        display: flex;
        align-items: center;

        height: 80px;

        padding: 10px;

        background-color: $primary-color;
    }
    .notice__list {
        width: 100%;
    }
}
</style>
