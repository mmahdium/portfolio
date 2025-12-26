<script setup lang="ts">
const props = defineProps<{
  author?: string
  highlight?: boolean
}>()
</script>

<template>
  <div class="pull-quote my-8 relative">
    <div :class="[
      'relative p-6 rounded-lg',
      highlight
        ? 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/40 dark:to-primary-900/40 border-2 border-primary-200 dark:border-primary-800'
        : 'bg-gray-50 dark:bg-gray-900/50 border-l-4 border-primary-500 dark:border-primary-400'
    ]">
      <!-- Quote Icon -->
      <div class="absolute top-4 left-4 opacity-10 dark:opacity-5">
        <UIcon name="i-heroicons-chat-bubble-left-right" class="w-16 h-16 text-primary-600" />
      </div>

      <!-- Content -->
      <div class="relative z-10">
        <blockquote class="text-lg md:text-xl font-medium leading-relaxed text-gray-900 dark:text-gray-100 italic">
          <slot />
        </blockquote>

        <!-- Author -->
        <div v-if="author" class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <cite class="text-sm font-semibold text-primary-600 dark:text-primary-400 not-italic">
            — {{ author }}
          </cite>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pull-quote {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
