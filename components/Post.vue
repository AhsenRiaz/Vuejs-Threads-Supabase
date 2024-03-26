<template>
    <div class="md:w-1/3" >
        <Card >
        <CardHeader>
            <div class="flex justify-between items-center">
                <CardTitle>{{ post.name }}</CardTitle>
                <Delete />
            </div>
        </CardHeader>
        <CardContent>
            {{ post.description }}
        </CardContent>
        <CardFooter>
            <Button>
                <Icon size="22" name='mdi:cards-heart-outline' />
            </Button>
        </CardFooter>
    </Card>
    </div>
</template>

<script setup>

const { post } = defineProps({
    post: Object
});

onMounted(() => {
    console.log("props", post)
});

</script>