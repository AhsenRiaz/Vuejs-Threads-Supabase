<template>
  <div class="p-4">
    <Card>
      <CardHeader>
        <div class="flex justify-between items-center">
          <div class="flex justify-between items-center w-1/5">
              <img :src="post.image" width="50" class="rounded-full" alt="">
            <CardTitle>{{ post.name }}</CardTitle>
          </div>
          <Delete />
        </div>
      </CardHeader>
      <CardContent class="max-h-36">
        <p>{{ post.text }}</p>
        <!-- <img :src="post.image"  alt=""> -->
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
const { post } = defineProps({
  post: Object,
});
</script>
