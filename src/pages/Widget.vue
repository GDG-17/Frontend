<script setup lang="ts">
import { ref } from "vue";

const histories = ref(["😀", "😥", "🤑", "😴", "🍺", "🍚", "☕"]);
</script>

<template>
  <div class="wrapper">
    <div class="status">
      <div class="emoji">😀</div>
      <div class="text">배고파요</div>
    </div>
    <div class="histories">
      <div class="history" v-for="history of histories">
        {{ history }}
      </div>
      <div class="history">
        <img src="../img/Vector.svg" alt="추가" />
      </div>
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
      background-color: $charcoal;
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
    }
  }
}
</style>
