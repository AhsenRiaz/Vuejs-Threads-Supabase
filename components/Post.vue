<template>
  <div class="p-4">
    <Card>
      <CardHeader>
        <div class="flex justify-between items-center">
          <div class="flex justify-between items-center w-1/5">
            <img :src="post.image" width="50" class="rounded-full" alt="" />
            <CardTitle>{{ post.name }}</CardTitle>
          </div>
          <Delete @isDeleted="" :postId="post.id" />
        </div>
      </CardHeader>
      <CardContent class="max-h-36">
        <p>{{ post.text }}</p>
      </CardContent>
      <CardFooter>
        <Button>
          <Icon size="22" name="mdi:cards-heart-outline" />
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup>
const runtime = useRuntimeConfig();
const userStore = useUserStore();
const emit = defineEmits(["isDeleted"]);

const handleDelete = () => {
  emit("isDeleted", true);
};

const { post } = defineProps({
  post: Object,
});
</script>
