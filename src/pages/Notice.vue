<script setup lang="ts"></script>

<template>
    <div class="notice">
        <div class="home__cta-button">+</div>
    </div>
</template>

<style lang="scss" scoped>
.notice {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 720px;
    height: 100%;

    margin: 0 auto;

    background-color: $title-gray;

    .home__cta-button {
        position: absolute;
        right: 40px;
        bottom: 40px;

        width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: $sub-dark-gray;

        border-radius: 100%;
    }
}
</style>
