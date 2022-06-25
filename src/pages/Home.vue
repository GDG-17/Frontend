<script setup lang="ts">
import { ref } from "vue";
import UserItem from "../components/user/UserItem.vue";

import { IUser, useUserStore } from "../stores/user";
import UserDetail from "../components/user/UserDetail.vue";
import AppButton from "../components/app/button/AppButton.vue";
import AppIcon from "../components/app/AppIcon.vue";
import { mdiBell, mdiPlus } from "@mdi/js";
import AppBottomSheet from "../components/app/bottom-sheet/AppBottomSheet.vue";
import AppFlexibleButton from "../components/app/button/AppFlexibleButton.vue";

const userStore = useUserStore();
// userStore.createUser("테스트6");
userStore.refreshFriendList();

const selectedUser = ref({} as IUser);
const isShowUserDetail = ref(false);
</script>

<template>
    <div class="home">
        <div class="home__header">
            <div class="home__header__logo"></div>
            <div class="home__header__actions">
                <router-link to="/add-friend">
                    <AppIcon color="#FFFFFF" :path="mdiPlus" style="margin-right: 10px"></AppIcon>
                </router-link>
                <router-link to="/notice">
                    <AppIcon color="#FFFFFF" :path="mdiBell"></AppIcon>
                </router-link>
            </div>
        </div>
        <div class="home__list">
            <UserItem
                :user="user"
                v-for="user of userStore.friendList"
                @click="
                    isShowUserDetail = true;
                    selectedUser = user;
                "
            ></UserItem>
        </div>
        <AppFlexibleButton style="height: fit-content; border-radius: 7px; margin: 16px" class="home__cta" @click="$router.push('/change-status')">상태 설정</AppFlexibleButton>
        <AppBottomSheet v-model="isShowUserDetail">
            <UserDetail :user="selectedUser"></UserDetail>
        </AppBottomSheet>
    </div>
</template>

<style lang="scss" scoped>
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
        justify-content: space-between;
        align-items: center;

        height: 60px;

        padding: 10px;
    }

    .home__list {
        flex: 1;
        overflow-y: scroll;

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
