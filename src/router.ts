// src/router.ts
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./pages/Home.vue"),
    },
    {
        path: "/add-friend",
        name: "AddFriend",
        component: () => import("./pages/AddFriend.vue"),
    },
    {
        path: "/notice",
        name: "Notice",
        component: () => import("./pages/Notice.vue"),
    },
    {
        path: "/change-status",
        name: "ChangeStatus",
        component: () => import("./pages/ChangeStatus.vue"),
    },
    {
        path: "/widget",
        name: "Widget",
        component: () => import("./pages/Widget.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
