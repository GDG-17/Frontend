<script setup lang="ts">
import { ref } from "vue";
import UserItem from "../components/user/UserItem.vue";

import { IUser, useUserStore } from "../stores/user";
import EmojiSelector from "../components/EmojiSelector.vue";

const friends = ref([] as IUser[]);

const userStore = useUserStore();
userStore.updateFriendList();
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
        <div class="home__footer">상태 설정</div>
        <EmojiSelector class="tmp"></EmojiSelector>
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
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;

        .home__list__item {
            height: fit-content;
            display: flex;

            &__profile-image {
                width: 50px;
                height: 50px;

                display: flex;
                justify-content: center;
                align-items: center;

                overflow: hidden;
                border-radius: 100%;

                margin-right: 10px;

                img {
                    width: 100%;
                }
            }

            &__profile {
                display: flex;
                flex-direction: column;
                justify-content: center;

                &__name {
                }
                &__description {
                }
            }
        }
    }

    .home__cta-button {
        position: absolute;
        right: 40px;
        bottom: 40px;

        width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: $sub-dark-gray;

        border-radius: 100%;
    }
}
</style>
