<script setup lang="ts">
import { ref } from "vue";

const emojis = ref(["❤️", "🍺", "📅", "⚽", "🎮", "☕", "🎬", "🍚"]);
</script>

<template>
    <div class="user-detail">
        <img src="../../img/profile_mock.jpg" alt="프로필" />
        <div class="user-name">강동원</div>
        <div class="emoji-list">
            <div class="emoji" v-for="emoji of emojis">{{ emoji }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user-detail {
    display: flex;
    flex-direction: column;
    text-align: center;

    padding-top: 30px;

    img {
        width: 116px;
        margin: 0 auto;
        border-radius: 50%;
    }
    .user-name {
        margin: 24px auto 31px;
        background: #f0f0f0;
        border-radius: 5px;
        width: 414px;
        height: 37px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 38px;
    }
    .emoji-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 35px;
        .emoji {
            flex: 1 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 82px;
            height: 82px;
            margin: 5px;
            font-size: 50px;
        }
    }
}
</style>
