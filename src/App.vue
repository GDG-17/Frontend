<script setup lang="ts">
import { useDialogStore } from "./stores/dialog";
import AppDialog from "./components/app/dialog/AppDialog.vue";
import FadeTransition from "./transitions/FadeTransition.vue";
import { useUserStore } from "./stores/user";
import { useRouter } from "vue-router";
import { ref } from "vue";

const dialogStore = useDialogStore();
const userStore = useUserStore();

const isReady = ref(false);

const router = useRouter();
router.isReady().then(async () => {
    if (router.currentRoute.value.query.userId) await userStore.refreshStatus(router.currentRoute.value.query.userId as string);
    else await userStore.refreshStatus("1");
    isReady.value = true;
});
</script>

<template>
    <router-view v-if="isReady" />
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
