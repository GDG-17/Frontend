<script setup lang="ts">
import { IUser } from "../../stores/user";

interface Props {
    user: IUser;
    isHideDescription?: boolean;
    isShowProfileImage?: boolean;
}
const props = defineProps<Props>();
</script>

<template>
    <div class="user-item">
        <div class="user-item__emoji" v-if="!isShowProfileImage">😀</div>
        <div class="user-item__emoji" v-else>
            <img :src="user.profileImage" alt="" />
        </div>
        <div class="user-item__profile">
            <h3 class="user-item__profile__name">{{ user.userName }}</h3>
            <p class="user-item__profile__description" v-if="!isHideDescription">{{ user.description }}</p>
        </div>
        <div class="user-item__actions">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user-item {
    @include clickable;
    height: fit-content;
    display: flex;
    align-items: center;

    padding: 16px 24px;

    border-bottom: 1px solid $gray;

    &__emoji {
        @include emoji-box();

        img {
            width: 100%;
        }
    }

    &__profile {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__name {
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;

            margin-bottom: 4px;
        }
        &__description {
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
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
