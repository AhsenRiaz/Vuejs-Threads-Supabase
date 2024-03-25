<template>
    <h1>ahsen</h1>
    <div class="z-50 bottom-0  h-full w-full">
        <div class="py-2 w-full ">
            <div class="flex items-center justify-between">
                <div class="flex items-center text-white">
                    <img :src="post.image" class="rounded-full h-[35px]" alt="">
                    <div class="ml-2 font-semibold text-[18px]">
                        {{ post.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useUserStore} from '~/stores/user'
const userStore = useUserStore();

</script>