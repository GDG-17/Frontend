<script setup lang="ts">
import { ref } from "vue";
import UserItem from "../components/user/UserItem.vue";
import { IUser, useUserStore } from "../stores/user";
import AppSmallButton from "../components/app/button/AppSmallButton.vue";
import { mdiArrowLeft } from "@mdi/js";
import AppIcon from "../components/app/AppIcon.vue";
import AppInput from "../components/app/input/AppInput.vue";
const userStore = useUserStore();

const searchFriendList = ref([] as IUser[]);
const search = ref("");

getSearchFriendList();
async function getSearchFriendList(name?: string) {
    searchFriendList.value = await userStore.getSearchFriendList(name);
}
</script>

<template>
    <div class="add-friend">
        <div class="add-friend__header">
            <router-link to="/" tag="div" class="add-friend__header__actions">
                <AppIcon :path="mdiArrowLeft"></AppIcon>
            </router-link>
            <div class="add-friend__header__title">친구 추가하기</div>
        </div>
        <AppInput style="width: 100%; margin-bottom: 10px" v-model="search" button-text="검색" @click-button="getSearchFriendList"></AppInput>
        <div class="add-friend__list">
            <UserItem :user="user" v-for="user of searchFriendList">
                <AppSmallButton>초대하기</AppSmallButton>
            </UserItem>
        </div>
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
        justify-content: space-between;
        align-items: center;

        height: 60px;

        padding: 10px;

        .add-friend__header__title {
            width: 100%;
            text-align: center;
        }

        .add-friend__header__actions {
            position: absolute;
            left: 0;
        }
    }
    .add-friend__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .add-friend__cta {
    }
}
</style>
