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
import SlideTransition from "../transitions/SlideTransition.vue";

const userStore = useUserStore();
// userStore.createUser("테스트6");
userStore.refreshFriendList();

const selectedUser = ref({} as IUser);
const isShowUserDetail = ref(false);
</script>

<template>
    <div class="home">
        <div class="home__header">
            <div class="home__header__logo">
                <img src="../img/logo.svg" alt="" />
            </div>
            <div class="home__header__actions">
                <router-link to="/notice" tag="div" class="home__header__actions__item">
                    <AppIcon color="#FFFFFF" :path="mdiBell" :size="28"></AppIcon>
                </router-link>
                <router-link to="/add-friend" tag="div" class="home__header__actions__item">
                    <AppIcon color="#FFFFFF" :path="mdiPlus" :size="28"></AppIcon>
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
        <div style="width: 100%; padding: 0 20px">
            <AppFlexibleButton style="height: fit-content; border-radius: 7px" class="home__cta" @click="$router.push('/change-status')">상태 설정</AppFlexibleButton>
        </div>
        <SlideTransition>
            <AppBottomSheet v-model="isShowUserDetail">
                <UserDetail :user="selectedUser"></UserDetail>
            </AppBottomSheet>
        </SlideTransition>
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

        padding: 26px;

        .home__header__logo {
            display: flex;
            align-items: center;
        }
        .home__header__actions {
            display: flex;
            gap: 10px;
            .home__header__actions__item {
                width: 48px;
                height: 48px;

                display: flex;
                justify-content: center;
                align-items: center;

                background-color: #67d0b8;
                border-radius: 7px;
            }
        }
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
