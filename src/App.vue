<script setup lang="ts">
import { useDialogStore } from "./stores/dialog";
import AppDialog from "./components/app/dialog/AppDialog.vue";
import FadeTransition from "./transitions/FadeTransition.vue";
import { useUserStore } from "./stores/user";

const dialogStore = useDialogStore();
const userStore = useUserStore();

userStore.refreshStatus("1");
</script>

<template>
    <router-view />
    <div id="dialog">
        <FadeTransition>
            <AppDialog v-for="(dialog, idx) in dialogStore.dialogInfoList" :key="idx" :vNode="dialog.vNode" @close="dialogStore.closeDialog(idx)"></AppDialog>
        </FadeTransition>
    </div>
</template>

<style lang="scss">
@import "@/styles/app.scss";

#dialog {
}
</style>
