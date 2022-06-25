<script setup lang="ts">
import { IUser } from "../../stores/user";

interface Props {
    user: IUser;
}
const props = defineProps<Props>();
</script>

<template>
    <div class="user-item">
        <div class="user-item__emoji">😀</div>
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
    @include clickable;
    height: fit-content;
    display: flex;
    align-items: center;

    padding: 10px 15px;

    background-color: $sub-light-gray;

    &__emoji {
        @include emoji-box();
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
