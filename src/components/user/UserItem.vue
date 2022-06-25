<script setup lang="ts">
import { IUser } from "../../stores/user";

interface Props {
    user: IUser;
}
const props = defineProps<Props>();
</script>

<template>
    <div class="user-item">
        <div class="user-item__profile-image">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        </div>
        <div class="user-item__profile">
            <h3 class="user-item__profile__name">{{ user.userId }}</h3>
            <p class="user-item__profile__description">{{ user.description }}</p>
        </div>
        <div class="user-item__actions">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user-item {
    height: fit-content;
    display: flex;
    align-items: center;

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
    &__actions {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}
</style>
