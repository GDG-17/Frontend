<script setup lang="ts">
import { useUserStore } from "../stores/user";
import AppCheckbox from "../components/app/checkbox/AppCheckbox.vue";
import { reactive, ref, watch } from "vue";
import EmojiSelector from "../components/EmojiSelector.vue";
import AppBottomSheet from "../components/app/bottom-sheet/AppBottomSheet.vue";
import AppInput from "../components/app/input/AppInput.vue";
import NoticeItem from "../components/user/NoticeItem.vue";

const userStore = useUserStore();

const isShowSelectTime = ref(false);
const isShowEmojiSelector = ref(false);

const description = ref("");
const selectedTime = ref([] as boolean[]);
</script>

<template>
    <div class="change-status" v-if="!isShowSelectTime">
        <div class="change-status__header">
            <div class="change-status__header__logo">앱 이름</div>
            <div class="change-status__header__actions"></div>
        </div>
        <div class="change-status__list">
            <div class="change-status__list__item">
                <div class="change-status__list__item__emoji" @click="isShowEmojiSelector = true">😀</div>
                <AppInput v-model="description" class="change-status__list__item__description" placeholder="고객 상태 텍스트 입력" />
            </div>
            <div class="change-status__list__item" @click="isShowSelectTime = true">
                <div class="change-status__list__item__emoji">😀</div>
                <p class="change-status__list__item__description">다음 이후 지우기<br />default 시간</p>
            </div>
            <h2>유저 이름의 경우</h2>
            <NoticeItem :notice="{ emoji: '1', text: '1' }"></NoticeItem>
            <NoticeItem :notice="{ emoji: '1', text: '1' }"></NoticeItem>
            <NoticeItem :notice="{ emoji: '1', text: '1' }"></NoticeItem>
            <NoticeItem :notice="{ emoji: '1', text: '1' }"></NoticeItem>
            <NoticeItem :notice="{ emoji: '1', text: '1' }"></NoticeItem>
            <NoticeItem :notice="{ emoji: '1', text: '1' }"></NoticeItem>
        </div>
        <AppBottomSheet v-model="isShowEmojiSelector"> <EmojiSelector></EmojiSelector></AppBottomSheet>
    </div>

    <div class="change-status--time" v-else>
        <div class="change-status__header">
            <div class="change-status__header__logo">앱 이름</div>
            <div class="change-status__header__actions"></div>
        </div>
        <div class="change-status__list">
            <div
                class="change-status__list__item"
                @click="
                    selectedTime = [true, false, false, false, false, false];
                    $event.preventDefault();
                "
            >
                <p>지우지 않음</p>
                <AppCheckbox v-model="selectedTime[0]"></AppCheckbox>
            </div>
            <div
                class="change-status__list__item"
                @click="
                    selectedTime = [false, true, false, false, false, false];
                    $event.preventDefault();
                "
            >
                <p>30분</p>
                <AppCheckbox v-model="selectedTime[1]"></AppCheckbox>
            </div>
            <div
                class="change-status__list__item"
                @click="
                    selectedTime = [false, false, true, false, false, false];
                    $event.preventDefault();
                "
            >
                <p>1시간</p>
                <AppCheckbox v-model="selectedTime[2]"></AppCheckbox>
            </div>
            <div
                class="change-status__list__item"
                @click="
                    selectedTime = [false, false, false, true, false, false];
                    $event.preventDefault();
                "
            >
                <p>4시간</p>
                <AppCheckbox v-model="selectedTime[3]"></AppCheckbox>
            </div>
            <div
                class="change-status__list__item"
                @click="
                    selectedTime = [false, false, false, false, true, false];
                    $event.preventDefault();
                "
            >
                <p>오늘</p>
                <AppCheckbox v-model="selectedTime[4]"></AppCheckbox>
            </div>
            <div
                class="change-status__list__item"
                @click="
                    selectedTime = [false, false, false, false, false, true];
                    $event.preventDefault();
                "
            >
                <p>이번 주</p>
                <AppCheckbox v-model="selectedTime[5]"></AppCheckbox>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.change-status {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 720px;
    height: 100%;

    margin: 0 auto;

    .change-status__header {
        width: 100%;

        display: flex;
        align-items: center;

        height: 80px;

        padding: 10px;

        background-color: $primary-color;
    }

    .change-status__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;

        .change-status__list__item {
            display: flex;
            align-items: center;

            padding: 10px 15px;

            background-color: $sub-light-gray;

            &__emoji {
                @include emoji-box();
            }
            &__description {
            }
        }
    }
}
.change-status--time {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 720px;
    height: 100%;

    margin: 0 auto;
    .change-status__header {
        width: 100%;

        display: flex;
        align-items: center;

        height: 80px;

        padding: 10px;

        background-color: $primary-color;
    }
    .change-status__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        .change-status__list__item {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 10px 15px;

            background-color: $sub-light-gray;
        }
    }
}
</style>
