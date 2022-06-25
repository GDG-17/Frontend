import axios from "axios";
import { defineStore } from "pinia";

export interface IUser {
    userId: string;
    description: string;
    emoji: string;
    profileImage: string;
    expiredAt: Date;
    interesting: boolean;
}

export interface INotice {
    emoji: string;
    text: string;
}

export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: {} as IUser,
        friendList: [] as IUser[],
        noticeList: [] as INotice[],
    }),
    actions: {
        async updateFriendList() {
            this.friendList = (await axios.get("/apis/friends?userId=test")).data as IUser[];
        },
        async updateNoticeList() {
            this.friendList = (await axios.get("/apis/users/notification?userId=test")).data as IUser[];
        },
    },
});
