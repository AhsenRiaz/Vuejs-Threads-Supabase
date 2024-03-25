<template>
      <div id="IndexPage" class="w-full overflow-auto">
          <div class="mx-auto max-w-[500px] overflow-hidden">
              <div id="Posts" class="px-4 max-w-[600px] mx-auto">
                 <div v-for="(post, index) in posts" :key="index">
                    <div>
                      <h1>{{ post.name }}</h1>
                    </div>
                 </div>
              </div>
          </div>
      </div>
</template>

<script setup>

import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

let posts = ref([])
let isPosts = ref(false)
let isLoading = ref(false)

onBeforeMount(() => {
  posts.value= [
      {
        name: "ahsen"
      }
  ]
})

</script>