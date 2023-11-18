<template>
  <LogsMap :coordinateLogs="coordinateLogs" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import LogsMap from '@/components/LogsMap.vue'
import LoggerApiService from '@/services/LoggerApiService.js'

const coordinateLogs = ref([])

onMounted(async () => {
  coordinateLogs.value = await LoggerApiService.getLogs()
})
</script>

<style></style>
