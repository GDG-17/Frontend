<script setup lang="ts">
import { IUser } from "../../stores/user";

interface Props {
    user: IUser;
}
const props = defineProps<Props>();
</script>

<template>
    <div>
        <div class="user">
            <div class="user__profile-image">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            </div>
            <div class="user__profile">
                <h3 class="user__profile__name">유저 이름</h3>
                <p class="user__profile__description">상태 텍스트</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user {
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
</style>
