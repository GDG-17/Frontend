<script setup lang="ts">
import { ref } from "vue";
import { IUser, useUserStore } from "../../stores/user";
import groupTransition from "../../transitions/groupTransition.vue";
interface Props {
  user: IUser;
}
const props = defineProps<Props>();
const emojis = ref(["❤️", "🍺", "🍚", "☕", "🎮", "🎬", "⚽", "🎢"]);

const userStore = useUserStore();
const animationList = ref([] as any[]);

async function toggleInterestingr() {
  if (props.user.interesting) {
    await userStore.removeSubscribe(props.user.userId!);
    props.user.interesting = false;
  } else {
    await userStore.addSubscribe(props.user.userId!);
    props.user.interesting = true;
  }
}

async function pushNotice(emoji: string, userId: string) {
  userStore.pushNotice(emoji, userId);
  if (animationList.value.length < 10) {
    animationList.value.push({
      emoji,
      randomX: Math.floor(Math.random() * 100) - 50,
      randomY: Math.floor(Math.random() * 100) - 50,
      key: new Date().getTime(),
    });
    setTimeout(() => {
      animationList.value.shift();
    }, 1000);
  }
}
</script>

<template>
  <div class="user-detail">
    <div class="profile" @click="toggleInterestingr">
      <div class="fire" v-if="user.interesting">
        <div class="particle" v-for="item in 50"></div>
      </div>
      <img :src="user.profileImage" alt="프로필" />
      <a class="call" href="tel: 01033654992">
        <img src="../../img/Phone.svg" alt="폰" />
      </a>
    </div>
    <div class="user-name">{{ user.userName }}</div>
    <div class="emoji-list">
      <div
        class="emoji"
        v-for="emoji of emojis"
        @click="pushNotice(emoji,user.userId!)"
      >
        {{ emoji }}
      </div>
    </div>
    <div class="user-detail__animation">
      <transition-group name="group" :duration="1000">
        <div
          class="user-detail__animation__item"
          v-for="item of animationList"
          :key="item.key"
          :style="{
            transform: `translateX(${item.randomX}px) translateY(${item.randomY}px)`,
          }"
        >
          {{ item.emoji }}
        </div>
      </transition-group>
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
  background-color: $white;
  border-radius: 20px 20px 0 0;

  .user-detail__animation {
    pointer-events: none;
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 100%;

    z-index: 1;

    .user-detail__animation__item {
      font-size: 64px;
      width: 64px;
      height: 64px;

      position: absolute;
      left: calc(50% - 32px);
      bottom: 70%;
      opacity: 1;
    }
  }
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
      width: 120px;
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
      background-color: $primary-blue;
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
    color: $black;
  }
  .emoji-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    align-self: center;
    justify-self: center;
    margin-bottom: 28px;
    .emoji {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 82px;
      height: 82px;
      margin: 8px 0px;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 44px;
      line-height: 52px;

      transition: 0.25s;

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

      @include clickable;

      &:hover {
        transform: scale(1.1);
      }
      &:active {
        transform: scale(0.9);
      }
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
.group-enter-active {
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.group-leave-active {
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.group-enter-from {
  left: calc(50% - 32px) !important;
  bottom: 0 !important;
  opacity: 0 !important;
  font-size: 0px !important;
}
.group-enter-to {
  position: absolute !important;
  left: calc(50% - 32px) !important;
  bottom: 70% !important;
  opacity: 1 !important;
  font-size: 64px !important;
}
.group-leave-from {
  opacity: 1 !important;
}
.group-leave-to {
  opacity: 0 !important;
}
</style>
