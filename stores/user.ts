import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    posts: [] as any,
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),
  actions: {
    async getAllPosts() {
      let res = await useFetch("/api/get-all-posts");
      console.log("res", res);
      this.posts = res.data.value;
      console.log("this.posts", this.posts)
      return res.data;
    },
    
  },
});
