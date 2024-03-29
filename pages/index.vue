<template>
  <div class="container border p-20">
    <Create />
    <div v-if="isPosts" v-for="(post, index) in posts" class="gap-x-4">
      <Post :post="post" />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import Create from "~/components/Create.vue";

const userStore = useUserStore();
const user = useSupabaseUser()

let posts = ref([]);
let isPosts = ref(false);
let isLoading = ref(false);

watchEffect(() => {
  if(!user.value){
    navigateTo('/login')
  }
})

onBeforeMount(async () => {
  try {
    isLoading.value = true;
    await userStore.getAllPosts();
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
});

onMounted(() => {
  watchEffect(() => {
    console.log("userStore.posts", userStore.posts);
    posts.value = userStore.posts;
    isPosts.value = true;
  });
});

watch(
  () => posts.value,
  () => {
    if (userStore.posts && userStore.posts.length >= 1) {
      posts.value = userStore.posts;
      isPosts.value = true;
    }
  },
  { deep: true }
);
</script>
