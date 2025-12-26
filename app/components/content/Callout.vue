<script setup lang="ts">
const props = defineProps<{
  type?: 'info' | 'warning' | 'success' | 'tip' | 'primary'
  title?: string
}>()

const typeConfig = {
  primary: {
    icon: 'i-heroicons-light-bulb',
    color: 'primary',
    bgClass: 'bg-primary-50 dark:bg-primary-950/30 border-primary-200 dark:border-primary-800'
  },
  info: {
    icon: 'i-heroicons-information-circle',
    color: 'blue',
    bgClass: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800'
  },
  warning: {
    icon: 'i-heroicons-exclamation-triangle',
    color: 'yellow',
    bgClass: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800'
  },
  success: {
    icon: 'i-heroicons-check-circle',
    color: 'green',
    bgClass: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800'
  },
  tip: {
    icon: 'i-heroicons-light-bulb',
    color: 'purple',
    bgClass: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800'
  }
}

const config = typeConfig[props.type || 'info']
</script>

<template>
  <div :class="['callout-box', config.bgClass]" class="my-6 p-5 rounded-lg border-2 shadow-sm">
    <div class="flex items-start gap-3">
      <UIcon :name="config.icon" class="w-5 h-5 flex-shrink-0 mt-0.5"
        :class="`text-${config.color}-600 dark:text-${config.color}-400`" />
      <div class="flex-1 min-w-0">
        <div v-if="title" class="font-semibold text-base mb-1.5"
          :class="`text-${config.color}-900 dark:text-${config.color}-100`">
          {{ title }}
        </div>
        <div class="prose prose-sm dark:prose-invert max-w-none">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.callout-box {
  transition: all 0.2s ease;
}

.callout-box:hover {
  transform: translateY(-2px);
  shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
