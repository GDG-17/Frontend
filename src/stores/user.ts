import axios from "axios";
import { defineStore } from "pinia";

export interface IStatus {
    userId: number;
    emoji: string;
    description: string;
    imageProfile: string;
    expiredAt: Date;
}
export interface IUser extends IStatus {
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
        async refreshFriendList() {
            this.friendList = (await axios.get("/apis/friends?userId=test")).data as IUser[];
        },
        async refreshNoticeList() {
            this.noticeList = (await axios.get("/apis/users/notification?userId=test")).data as INotice[];
        },
        async getSearchFriendList() {
            return (await axios.get("/apis/friends?userId=test")).data as IUser[];
        },
        async updateStatus(status: IStatus) {
            return (await axios.patch("/apis/users/me", status)).data as IUser[];
        },
    },
});
