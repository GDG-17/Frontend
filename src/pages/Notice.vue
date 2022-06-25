<script setup lang="ts">
import { useUserStore } from "../stores/user";
import NoticeItem from "../components/user/NoticeItem.vue";
import { mdiArrowLeft } from "@mdi/js";
import AppIcon from "../components/app/AppIcon.vue";

const userStore = useUserStore();
userStore.refreshNoticeList();
setInterval(() => {
    userStore.refreshNoticeList();
}, 1000);
</script>

<template>
    <div class="notice">
        <div class="notice__header">
            <router-link to="/" tag="div" class="notice__header__actions">
                <AppIcon color="#000000" :path="mdiArrowLeft"></AppIcon>
            </router-link>
            <div class="notice__header__title">알림 확인하기</div>
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
        justify-content: space-between;
        align-items: center;

        height: 60px;

        padding: 10px;

        .notice__header__title {
            width: 100%;
            text-align: center;
        }

        .notice__header__actions {
            position: absolute;
            left: 20px;
        }
    }
    .notice__list {
        flex: 1;
        overflow-y: scroll;

        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
}
</style>
