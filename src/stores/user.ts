import axios from "axios";
import { defineStore } from "pinia";

export interface IStatus {
    userId?: number;
    emoji: string;
    description: string;
    expiredAt: Date;
}
export interface IUser extends IStatus {
    imageProfile: string;
    interesting: boolean;
}

export interface INotice {
    emoji: string;
    text?: string;
    description?: string;
}

export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: {} as IUser,
        friendList: [] as IUser[],
        noticeList: [] as INotice[],
    }),
    actions: {
        async refreshFriendList() {
            this.friendList = (
                await axios.get("/apis/friends", {
                    params: {
                        userId: "test",
                    },
                })
            ).data as IUser[];
        },
        async refreshNoticeList() {
            this.noticeList = (
                await axios.get("/apis/users/notification", {
                    params: {
                        userId: "test",
                    },
                })
            ).data as INotice[];
        },
        async getSearchFriendList(name?: string) {
            return (
                await axios.get("/apis/friends", {
                    params: {
                        userId: "test",
                        f: "search",
                        name,
                    },
                })
            ).data as IUser[];
        },
        async updateStatus(status: IStatus) {
            return (await axios.patch("/apis/users/me", { userId: this.user.userId, ...status })).data as IUser[];
        },
    },
});
