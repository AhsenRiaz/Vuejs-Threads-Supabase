<template>
    <div class="container p-20" >
        <Create />
        <div class="flex gap-x-4" >
            <Post v-for="(post, index) in posts" :post="post" />
        </div>
    </div>
</template>

<script setup>
import Post from '../components/Post.vue';
import Create from '../components/Create.vue'
import { onBeforeMount } from 'vue';

let posts = ref([]);

onBeforeMount(() => {
    posts.value = [{
        name: 'John Doe',
        description: "loren wdf wersf srwr sf2 tdfgsf wrw dfgsr23 sgfsfwewe dfg sfdsd  dfgfd sfsdf sfsfsfsf sfsf sfsfs fdsfsdg dfg"
    },
    {
        name: 'John Doe',
        description: "loren wdf wersf srwr sf2 tdfgsf wrw dfgsr23 sgfsfwewe dfg sfdsd  dfgfd sfsdf sfsfsfsf sfsf sfsfs fdsfsdg dfg"
    },
]
});

</script>
