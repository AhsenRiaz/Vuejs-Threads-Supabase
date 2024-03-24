import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        posts: [],
        isMenuOverlay: false,
        isLogoutOverlay: false,
    })
})