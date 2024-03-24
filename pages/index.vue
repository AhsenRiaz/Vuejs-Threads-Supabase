<template>
    <MainLayout>
        <div class="w-full overflow-auto">
            <div class="mx-auto max-w-[500px] oveflow-hidden">
                <div class="px-4 max-w-[600px] mx-auto">
                    <div v-if="isPosts" v-for="(post, index) in posts">
                        {{ post }}</div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const userStore = useUserStore();
const user = useSupabaseUser();

let posts = ref([]);
let isPost = ref(false);
let isLoading = ref(false);

onBeforeMound(() =)

</script>