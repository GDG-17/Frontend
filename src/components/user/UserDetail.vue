<script setup lang="ts">
import { ref } from "vue";
let interesting = true;
const emojis = ref(["❤️", "🍺", "🍚", "☕", "🎮", "🎬", "⚽", "🎢"]);
</script>

<template>
  <div class="user-detail">
    <div class="profile">
      <div class="fire" v-if="interesting">
        <div class="particle" v-for="item in 50"></div>
      </div>
      <img src="../../img/profile_mock.jpg" alt="프로필" />
      <a class="call" href="tel: 01033654992">
        <img src="../../img/Phone.svg" alt="폰" />
      </a>
    </div>
    <div class="user-name">강동원</div>
    <div class="emoji-list">
      <div class="emoji" v-for="emoji of emojis">{{ emoji }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$fireColor: rgb(255, 80, 0);
$fireColorT: rgba(255, 80, 0, 0);
$dur: 1s;
$blur: 0.02em;
$fireRad: 3em;
$parts: 50;
$partSize: 5em;
.user-detail {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 60px;
  position: relative;
  background-color: $black;
  border-radius: 20px 20px 0 0;
  &::before {
    content: "";
    width: 80px;
    height: 4px;
    position: absolute;
    background: $dark-gray;
    border-radius: 50px;
    top: 16px;
    left: 50%;
    transform: translate(-50%);
  }
  .profile {
    margin: 0 auto;
    position: relative;
    img {
      width: 116px;
      position: relative;
      border-radius: 50%;
    }
    .fire {
      font-size: 20px;
      filter: blur($blur);
      -webkit-filter: blur($blur);
      margin: 3em auto 0 auto;
      width: 10em;
      height: 12em;
      top: -155px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
    .call {
      all: unset;
      width: 40px;
      height: 40px;
      position: absolute;
      border: none;
      border-radius: 50%;
      background-color: $light-green;
      bottom: 6px;
      right: -16px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 24px;
      }
    }
  }
  .user-name {
    margin: 20px auto 28px;
    height: 37px;
    font-family: "Roboto";
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: $white;
  }
  .emoji-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 28px;
    .emoji {
      background: #313439;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 82px;
      height: 82px;
      margin: 8px 5px;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 44px;
      line-height: 52px;
    }
  }

  .particle {
    animation: rise $dur ease-in infinite;
    background-image: radial-gradient($fireColor 20%, $fireColorT 70%);
    border-radius: 50%;
    mix-blend-mode: screen;
    opacity: 0;
    position: absolute;
    bottom: 0;
    width: $partSize;
    height: $partSize;
    // spread particles out in time and x-position to get desired effect
    @for $p from 1 through $parts {
      &:nth-of-type(#{$p}) {
        animation-delay: $dur * random();
        left: calc((100% - #{$partSize}) * #{($p - 1) / $parts});
      }
    }
  }
  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(0) scale(1);
    }
    25% {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateY(-10em) scale(0);
    }
  }
}
</style>
