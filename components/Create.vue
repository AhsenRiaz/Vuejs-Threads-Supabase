<template>
  <div class="flex flex-col max-h-40 mb-24 w-full md:w-[30rem] mx-auto gap-1.5">
    <div class="flex gap-4">
      <div>
        <Label for="post">Your post</Label>
        <Textarea v-model="text" id="post" placeholder="Type your post here." />
      </div>
      <div class="w-full flex flex-col justify-between">
        <div class="">
          <img class="mx-auto w-full max-h-20 mt-2 mr-2 rounded-lg" :src="fileDisplay" alt="Image" />
        </div>
        <Input ref="file" type="file" @input="selectImage" />
      </div>
    </div>
    <Button @click="createPost">Create Post</Button>
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const client = useSupabaseClient();
const user = useSupabaseUser();

let text = ref(null);
let isLoading = ref(false);

let file = ref(null);
let fileDisplay = ref(null);
let fileData = ref(null);

const clearData = () => {
  text.value = null;
  file.value = null;
  fileDisplay.value = null;
  fileData.value = null;
};

const selectImage = (e) => {
  fileDisplay.value = URL.createObjectURL(e.target.files[0]);
  fileData.value = e.target.files[0];
};

const createPost = async () => {
  let dataOut = null;
  let errorOut = null;

  isLoading.value = true;

  if (fileData.value) {
    const response = await client.storage
      .from("thread")
      .upload(`${uuidv4()}.jpg`, fileData.value);

    dataOut = response.data;
    errorOut = response.error ;
  }

  if (errorOut) {
    console.log(errorOut.message);
    return errorOut;
  }

  let pic = "";
  if (dataOut) {
    pic = dataOut.path ? dataOut.path : "";
  }

  try {
    await $fetch("/api/create-post", {
      method: "POST",
      body: {
        userId: user.value.identities[0].user_id,
        name: user.value.identities[0].identity_data.full_name,
        image: user.value.identities[0].identity_data.avatar_url,
        text: text.value,
        picture: pic,
      },
    });

    await userStore.getAllPosts();

    clearData();
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
};
</script>
