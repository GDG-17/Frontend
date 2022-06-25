<script setup lang="ts">
import { useUserStore } from "../stores/user";
import AppCheckbox from "../components/app/checkbox/AppCheckbox.vue";
import { reactive, ref, watch } from "vue";
import EmojiSelector from "../components/EmojiSelector.vue";
import AppBottomSheet from "../components/app/bottom-sheet/AppBottomSheet.vue";
import NoticeItem from "../components/user/NoticeItem.vue";
import AppIcon from "../components/app/AppIcon.vue";
import { mdiArrowLeft, mdiCheck, mdiClockPlusOutline, mdiClose, mdiEmoticonHappyOutline } from "@mdi/js";
import moment from "moment";
import { computed } from "@vue/reactivity";

const userStore = useUserStore();

const templateItemList = ref([
    { emoji: "🍚", text: "배고파요 - 1시간" },
    { emoji: "🍺", text: "술 먹고싶어요 - 1시간" },
    { emoji: "⚽", text: "운동하고 싶어요 - 1시간" },
    { emoji: "🏠", text: "집에서 쉬고 있어요 - 오늘" },
]);

const isShowSelectTime = ref(false);
const isShowEmojiSelector = ref(false);

const emoji = ref("");
const description = ref("");
emoji.value = userStore.user.emoji;
description.value = userStore.user.description;

const selectedTime = ref([false, false, true, false, false, false] as boolean[]);

const timeString = computed(() => {
    switch (selectedTime.value.indexOf(true)) {
        case 0:
            return "지우지 않음";
        case 1:
            return "30분";
        case 2:
            return "1시간";
        case 3:
            return "4시간";
        case 4:
            return "오늘";
        case 5:
            return "이번주";
    }
});

async function submit(_emoji: string, _description: string) {
    emoji.value = _emoji;
    description.value = _description;
    console.log(_emoji, _description);
    await userStore.updateStatus({
        userName: userStore.user.userName,
        profileImage: userStore.user.profileImage,
        emoji: _emoji,
        description: _description,
        expiredAt: moment().add(1, "day").toDate(),
    });

    await userStore.refreshStatus(userStore.user.userId!);
}
</script>

<template>
    <div class="change-status" v-if="!isShowSelectTime">
        <div class="change-status__header">
            <router-link to="/" tag="div" class="change-status__header__actions1"> <AppIcon color="#FFFFFF" :path="mdiClose"></AppIcon> </router-link>
            <div class="change-status__header__title">상태 설정</div>
            <div class="change-status__header__actions2">
                <AppIcon color="#FFFFFF" :path="mdiCheck" @click="submit(emoji, description)"></AppIcon>
            </div>
        </div>
        <div class="change-status__list">
            <div class="change-status__list__item">
                <div class="change-status__list__item__emoji" @click="isShowEmojiSelector = true">
                    <AppIcon v-if="!emoji" :path="mdiEmoticonHappyOutline" color="#FFFFFF" :size="32"></AppIcon>
                    <span v-else>{{ emoji }}</span>
                </div>
                <input class="change-status__list__item__input" v-model="description" type="text" placeholder="고객 상태 텍스트 입력" />
            </div>
            <div class="change-status__list__item" @click="isShowSelectTime = true">
                <div class="change-status__list__item__emoji">
                    <AppIcon :path="mdiClockPlusOutline" color="#FFFFFF" :size="32"></AppIcon>
                </div>
                <p class="change-status__list__item__description">
                    <span style="font-weight: 400; font-size: 16px; line-height: 19px">다음 이후 지우기</span><br /><span style="font-weight: 400; font-size: 12px; line-height: 14px">
                        {{ timeString }}
                    </span>
                </p>
            </div>
            <h2>유저 이름의 경우</h2>
            <NoticeItem :notice="item" v-for="item of templateItemList" @click="submit(item.emoji, item.text)"></NoticeItem>
        </div>
        <AppBottomSheet v-model="isShowEmojiSelector"> <EmojiSelector @click-emoji="emoji = $event"></EmojiSelector></AppBottomSheet>
    </div>

    <div class="change-status--time" v-else>
        <div class="change-status__header">
            <div class="change-status__header__actions" @click="isShowSelectTime = false">
                <AppIcon color="#FFFFFF" :path="mdiArrowLeft"></AppIcon>
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
            left: 20px;
        }
        .change-status__header__actions2 {
            position: absolute;
            right: 20px;
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

        h2 {
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;

            height: 65px;

            padding: 16px 24px;

            background-color: $black;
            border-bottom: 1px solid $charcoal;

            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
        }
        .change-status__list__item {
            @include clickable();
            display: flex;
            align-items: center;

            padding: 16px 24px;

            background-color: $black;
            border-bottom: 1px solid $charcoal;

            &__input {
                background: none;
                outline: none;
                border: none;

                font-weight: 400;
                font-size: 16px;
                line-height: 19px;

                color: $white;

                &::placeholder {
                    color: $gray;
                }
            }

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
            left: 20px;
        }
    }
    .change-status__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        .change-status__list__item {
            @include clickable();

            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 16px 24px;

            background-color: $black;
        }
    }
}
</style>
