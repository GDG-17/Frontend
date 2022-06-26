<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../stores/user";

const histories = ref(["😀", "😥", "🤑", "😴", "🍺", "🍚", "☕"]);

const userStore = useUserStore();

function last() {
    userStore.user.emoji = "🍚";
    userStore.user.description = "배고파요";
}
</script>

<template>
    <div class="wrapper">
        <div class="status">
            <div class="emoji">{{ userStore.user.emoji }}</div>
            <div class="text">{{ userStore.user.description }}</div>
        </div>
        <div class="histories" @click="last">
            <div class="history" v-for="history of histories">
                {{ history }}
            </div>
            <router-link to="/change-status" tag="div" class="history">
                <img src="../img/Vector.svg" alt="추가" />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    padding: 4vw 8vw;
    .status {
        line-height: 13vw;
        display: flex;
        margin: 0 2vw 3vw;
        .emoji {
            font-size: 8vw;
            background: #e6e6e6;
            border-radius: 50%;
            width: 13vw;
            height: 13vw;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .text {
            margin-left: 6vw;
        }
    }
    .histories {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .history {
            background: $charcoal;
            border-radius: 50%;
            width: 17vw;
            height: 17vw;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2vw;
            font-size: 10vw;

            &:nth-child(1) {
                background: #edeaff;
                border: 1px solid #d9d3ff;
            }
            &:nth-child(2) {
                background: #fdebdf;
                border: 1px solid #ffd9bf;
            }
            &:nth-child(3) {
                background: #edf6f5;
                border: 1px solid #c7e7e3;
            }
            &:nth-child(4) {
                background: #ffe5e8;
                border: 1px solid #fec7ce;
            }
            &:nth-child(5) {
                background: #ffe5e8;
                border: 1px solid #fec7ce;
            }
            &:nth-child(6) {
                background: #edf6f5;
                border: 1px solid #c7e7e3;
            }
            &:nth-child(7) {
                background: #fdebdf;
                border: 1px solid #ffd9bf;
            }
            &:nth-child(8) {
                background: #edeaff;
                border: 1px solid #d9d3ff;
            }
        }
    }
}
</style>
