<template>

  <div class=" fixed w-[calc(100%+1px)] h-full">
    <NuxtPage />
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
</script>