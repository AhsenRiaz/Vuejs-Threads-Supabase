<template>
  <div>
    <AlertDialog>
      <AlertDialogTrigger>
        <Icon size="22" name="mdi:dots-horizontal" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle> Delete Post? </AlertDialogTitle>
          <AlertDialogDescription>
            This action will delete post from you account
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction @click="() => deletePost(postId)">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>

<script setup>
const { postId } = defineProps({
  postId: Number,
});

const isDeleting = ref(false);
const emit = defineEmits(["isDeleted"]);

const deletePost = async (id) => {
  try {
    let isDeleting = ref(false);

    await useFetch(`/api/delete-post/${id}`, { method: "DELETE" });
    emit("isDeleted", true);

    isDeleting.value = false;
  } catch (error) {
    console.log(error);
    isDeleting.value = false;
  }
};
</script>
