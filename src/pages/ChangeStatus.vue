<script setup lang="ts">
import { useUserStore } from "../stores/user";
import AppCheckbox from "../components/app/checkbox/AppCheckbox.vue";
import { reactive, ref, watch } from "vue";
import EmojiSelector from "../components/EmojiSelector.vue";
import AppBottomSheet from "../components/app/bottom-sheet/AppBottomSheet.vue";
import AppInput from "../components/app/input/AppInput.vue";
import NoticeItem from "../components/user/NoticeItem.vue";
import AppIcon from "../components/app/AppIcon.vue";
import { mdiArrowLeft, mdiCheck, mdiClose } from "@mdi/js";
import moment from "moment";

const userStore = useUserStore();

const templateItemList = ref([
    { emoji: "❤️", text: "테스트1" },
    { emoji: "❤️", text: "테스트2" },
    { emoji: "❤️", text: "테스트3" },
]);

const isShowSelectTime = ref(false);
const isShowEmojiSelector = ref(false);

const description = ref("");
const selectedTime = ref([] as boolean[]);

async function submit(emoji: string, description: string) {
    await userStore.updateStatus({
        emoji,
        description,
        expiredAt: moment().add(1, "day").toDate(),
    });
}
</script>

<template>
    <div class="change-status" v-if="!isShowSelectTime">
        <div class="change-status__header">
            <router-link to="/" tag="div" class="change-status__header__actions1">
                <AppIcon :path="mdiClose"></AppIcon>
            </router-link>
            <div class="change-status__header__title">상태 설정</div>
            <div class="change-status__header__actions2">
                <AppIcon :path="mdiCheck"></AppIcon>
            </div>
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
            <NoticeItem :notice="notice" v-for="notice of templateItemList"></NoticeItem>
        </div>
        <AppBottomSheet v-model="isShowEmojiSelector"> <EmojiSelector></EmojiSelector></AppBottomSheet>
    </div>

    <div class="change-status--time" v-else>
        <div class="change-status__header">
            <div class="change-status__header__actions" @click="isShowSelectTime = false">
                <AppIcon :path="mdiArrowLeft"></AppIcon>
            </div>
            <div class="change-status__header__title">상태 설정</div>
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
        justify-content: space-between;
        align-items: center;

        height: 60px;

        padding: 10px;

        .change-status__header__actions1 {
            position: absolute;
            left: 0;
        }
        .change-status__header__actions2 {
            position: absolute;
            right: 0;
        }

        .change-status__header__title {
            width: 100%;
            text-align: center;
        }
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
        justify-content: space-between;
        align-items: center;

        height: 60px;

        padding: 10px;

        .change-status__header__title {
            width: 100%;
            text-align: center;
        }

        .change-status__header__actions {
            position: absolute;
            left: 0;
        }
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
