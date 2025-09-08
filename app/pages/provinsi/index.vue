<script lang="ts" setup>
import { provinsiColumns } from '~/constants/table'

const { data } = await useAsyncData(
  'provinsi-list',
  () => apiFetchAsyncData('/provinsi'),
)
</script>

<template>
  <div>
    <UButton label="Tambah" />
    <TableView :columns="provinsiColumns" :data="data?.data" />
  </div>
</template>
