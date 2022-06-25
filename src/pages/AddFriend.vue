<script setup lang="ts">
import { ref } from "vue";
import UserItem from "../components/user/UserItem.vue";
import { IUser, useUserStore } from "../stores/user";
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
            <UserItem :user="user" v-for="user of searchFriendList"></UserItem>
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

        .add-friend__list__item {
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

    .add-friend__cta-button {
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
