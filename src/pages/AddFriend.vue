<script setup lang="ts">
import { ref } from "vue";
import UserItem from "../components/user/UserItem.vue";
import { IUser, useUserStore } from "../stores/user";
import AppButton from "../components/app/button/AppButton.vue";
import AppSmallButton from "../components/app/button/AppSmallButton.vue";
const userStore = useUserStore();

const searchFriendList = ref([] as IUser[]);

getSearchFriendList();
async function getSearchFriendList() {
    searchFriendList.value = await userStore.getSearchFriendList();
}
</script>

<template>
    <div class="add-friend">
        <div class="add-friend__header">
            <div class="add-friend__header__logo">앱 이름</div>
            <div class="add-friend__header__actions"></div>
        </div>
        <div class="add-friend__list">
            <UserItem :user="user" v-for="user of searchFriendList">
                <AppSmallButton>초대하기</AppSmallButton>
            </UserItem>
        </div>
        <div class="add-friend__footer">상태 설정</div>
    </div>
</template>

<style lang="scss" scoped>
.add-friend {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 720px;
    height: 100%;

    margin: 0 auto;

    .add-friend__header {
        width: 100%;

        display: flex;
        align-items: center;

        height: 80px;

        padding: 10px;

        background-color: $primary-color;
    }
    .add-friend__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .add-friend__cta-button {
        position: absolute;
        right: 40px;
        bottom: 40px;

        width: 46px;
        height: 46px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: $sub-dark-gray;

        border-radius: 7px;
    }
}
</style>
