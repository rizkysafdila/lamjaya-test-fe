<script setup lang="ts">
defineProps<{
  columns: any
  data: any
}>()
</script>

<template>
  <UTable :columns="columns" :data="data" class="flex-1" />
</template>
