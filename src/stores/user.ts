import axios from "axios";
import { defineStore } from "pinia";

export interface IStatus {
    userId?: string;
    profileImage?: string;
    userName: string;
    emoji: string;
    description: string;
    expiredAt: Date;
}
export interface IUser extends IStatus {
    interesting?: boolean;
}

export interface INotice {
    emoji: string;
    text?: string;
    description?: string;
}

export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: {
            userId: "1",
        } as IUser,
        friendList: [] as IUser[],
        noticeList: [] as INotice[],
    }),
    actions: {
        async addFriends(targetUserId: string) {
            return (
                await axios.post("/apis/friends", {
                    targetUserId,
                    userId: this.user.userId,
                })
            ).data;
        },
        async refreshFriendList() {
            this.friendList = (
                await axios.get("/apis/friends", {
                    params: {
                        userId: this.user.userId,
                    },
                })
            ).data as IUser[];
        },

        async getSearchFriendList(name?: string) {
            return (
                await axios.get("/apis/users", {
                    params: {
                        // userId: this.user.userId,
                        f: "search",
                        name,
                    },
                })
            ).data as IUser[];
        },
        async updateStatus(status: IStatus) {
            return (await axios.patch("/apis/users/me", { userId: this.user.userId, ...status })).data as IUser[];
        },
        async refreshStatus(userId: string) {
            this.user = (
                await axios.get("/apis/users/me", {
                    params: {
                        userId,
                    },
                })
            ).data as IUser;
            console.log(this.user);
            return this.user;
        },
        async createUser(userName: string) {
            return (
                await axios.post("/apis/users/me", {
                    userName,
                    emoji: "🍚",
                    description: "Hello",
                    profileImage: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
                    expiredAt: new Date(),
                })
            ).data as IUser[];
        },

        async refreshNoticeList() {
            this.noticeList = (
                await axios.get("/apis/users/notification", {
                    params: {
                        userId: this.user.userId,
                    },
                })
            ).data as INotice[];
        },
        async pushNotice(emoji: string, targetUserId: string) {
            this.noticeList = (
                await axios.post("/apis/users/notification", {
                    emoji,
                    userId: this.user.userId,
                    targetUserId,
                })
            ).data as INotice[];
        },

        async addSubscribe(targetUserId: string) {
            this.noticeList = (
                await axios.post("/apis/users/subscribe", {
                    userId: this.user.userId,
                    targetUserId,
                })
            ).data as INotice[];
        },
        async removeSubscribe(targetUserId: string) {
            this.noticeList = (
                await axios.post("/apis/users/unsubscribe", {
                    userId: this.user.userId,
                    targetUserId,
                })
            ).data as INotice[];
        },
    },
});
