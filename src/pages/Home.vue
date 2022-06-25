<script setup lang="ts">
import { ref } from "vue";
import UserItem from "../components/user/UserItem.vue";

import { IUser, useUserStore } from "../stores/user";
import UserDetail from "../components/user/UserDetail.vue";
import AppButton from "../components/app/button/AppButton.vue";

const userStore = useUserStore();
userStore.refreshFriendList();
</script>

<template>
    <div class="home">
        <div class="home__header">
            <div class="home__header__logo">앱 이름</div>
            <div class="home__header__actions"></div>
        </div>
        <div class="home__list">
            <UserItem :user="user" v-for="user of userStore.friendList"></UserItem>
        </div>
        <AppButton class="home__cta">상태 설정</AppButton>
        <UserDetail class="tmp"></UserDetail>
    </div>
</template>

<style lang="scss" scoped>
.tmp {
    position: absolute;
    bottom: 0;

    width: 100%;

    background-color: $sub-dark-gray;
}
.home {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 720px;
    height: 100%;

    margin: 0 auto;

    .home__header {
        width: 100%;

        display: flex;
        align-items: center;

        height: 80px;

        padding: 10px;

        background-color: $primary-color;
    }

    .home__list {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .home__cta {
        width: 100%;
        margin-bottom: 20px;
    }
}
</style>
