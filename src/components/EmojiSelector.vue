<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const emojis = ref([
    {
        keyword: "밥",
        emoji: "🍚",
    },
    {
        keyword: "자전거",
        emoji: "🚲",
    },
    {
        keyword: "게임",
        emoji: "💻",
    },
    {
        keyword: "공부",
        emoji: "📖",
    },
    {
        keyword: "1",
        emoji: "⚽️",
    },
    {
        keyword: "2",
        emoji: "🍻",
    },
    {
        keyword: "3",
        emoji: "🎱",
    },
    {
        keyword: "4",
        emoji: "🛒",
    },
    {
        keyword: "5",
        emoji: "🎬",
    },
    {
        keyword: "6",
        emoji: "🎤",
    },
    {
        keyword: "7",
        emoji: "🎮",
    },
    {
        keyword: "8",
        emoji: "🏓",
    },
    {
        keyword: "9",
        emoji: "🏸",
    },
    {
        keyword: "10",
        emoji: "⚾️",
    },
    {
        keyword: "11",
        emoji: "☕️",
    },
    {
        keyword: "12",
        emoji: "🥐",
    },
]);

const emit = defineEmits(["click-emoji"]);
const emojiValue = ref();

const filteredEmojis = computed(() => {
    if (!emojiValue.value) return emojis.value;
    return emojis.value.filter((i) => i.keyword.includes(emojiValue.value));
});
</script>

<template>
    <div class="emoji-selector">
        <input v-model="emojiValue" type="text" placeholder="이모티콘 검색..." />
        <div class="frequent">
            <div class="title">자주 사용됨</div>
            <div class="emoji-list">
                <div class="emoji" v-for="emoji of filteredEmojis" @click="emit('click-emoji', emoji.emoji)">
                    {{ emoji.emoji }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.emoji-selector {
    padding: 30px 20px;
    border-radius: 24px 24px 0 0;
    background-color: white;

    input {
        @include input;
        width: 100%;
        height: 44px;
        background: #e6e6e6;
        border-radius: 10px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        padding: 6px 10px;
        padding-left: 55px;
        border: none;
        background-image: url(../img/Search.svg);
        background-repeat: no-repeat;
        background-position: 12px center;

        &::placeholder {
            color: #313439;
        }
    }
    .frequent {
        .title {
            padding: 18px 9px;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
        }
        .emoji-list {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            .emoji {
                @include clickable();
                width: 36px;
                height: 36px;
                font-size: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s;
                &:hover {
                    transform: scale(1.2);
                }
            }
        }
    }
}
</style>
