<script setup lang="ts">
import { ref } from "vue";

const histories = ref(["🍚", "🚲", "💻", "📖", "⚽️", "🍻"]);
</script>

<template>
  <div class="wrapper">
    <nav>
      <div class="status">🍚 배고파요</div>
      <button>+</button>
    </nav>
    <div class="histories">
      <div class="history" v-for="history of histories">
        {{ history }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  /* height: 80vh; */
  text-align: center;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  padding: 5vw;
  nav {
    display: flex;
    justify-content: space-between;
    font-size: 10vw;
    margin: 0 10vw;

    .status {
      border: 1px solid #333;
    }
    button {
      border: 1px solid #333;
      width: 10vw;
      height: 10vw;
      border-radius: 50%;
      font-size: 8vw;
      margin: auto 0;
    }
  }
  .histories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .history {
      width: 23vw;
      height: 23vw;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2vw;
      font-size: 15vw;
    }
  }
}
</style>
