<template>
  <section id="projects" class="section-spacing scroll-mt-20">
    <UContainer>
      <div class="section-header">
        <UIcon name="i-twemoji-rocket" class="text-2xl" />
        <h2 class="section-title text-start">{{ t('sections.projects') }}</h2>
      </div>

      <UAccordion type="single" :unmount-on-hide="false" :items="accordionItems" default-value="projects"
        :ui="accordionUi">
        <template #body>
          <div v-for="g in nonEmptyCategoryList" :key="g.cat" class="space-y-3 mb-5">
            <div class="flex items-center gap-2">
              <UIcon name="i-twemoji-open-book" class="text-xl" />
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100">{{ tCategory(g.cat) }}</h3>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <UCard v-for="(p, i) in g.items" :key="`${g.cat}-${i}-${p.name}`"
                class="flex h-full flex-col border border-gray-200/60 shadow-none transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700/40">
                <div class="flex h-full flex-col gap-4">
                  <div class="flex gap-3">
                    <NuxtImg v-if="p.thumbnail" :src="p.thumbnail" :alt="`${p.name} logo`"
                      class="h-12 w-12 rounded-xl border border-gray-200/70 bg-white object-cover shadow-sm dark:border-gray-700/40 dark:bg-slate-900"
                      width="96" height="96" sizes="96px" format="webp" loading="lazy" />
                    <div v-else
                      class="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200/70 bg-primary-500/10 text-primary-600 shadow-sm dark:border-gray-700/40 dark:bg-primary-400/10 dark:text-primary-200">
                      <UIcon :name="getProjectIcon(p)" class="text-2xl" />
                    </div>
                    <div class="flex flex-1 flex-col gap-3">
                      <div>
                        <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100">{{ p.name }}</h3>
                        <div v-if="p.status || p.opensource" class="mt-2 flex flex-wrap items-center gap-2">
                          <UBadge v-if="p.status" color="primary" variant="soft" class="rounded-full capitalize">
                            {{ p.status }}
                          </UBadge>
                          <UBadge v-if="p.opensource" color="emerald" variant="soft" class="rounded-full">
                            <UIcon name="i-mdi-source-branch" class="mr-1" />
                            {{ t('projectLabels.openSource') }}
                          </UBadge>
                        </div>
                      </div>
                      <p class="text-sm text-gray-700 dark:text-gray-200">{{ p.description }}</p>
                      <div class="flex flex-1 flex-col gap-3 pt-1">
                        <div v-if="p.icons?.length"
                          class="flex flex-wrap items-center gap-2 text-primary-500 dark:text-primary-300">
                          <UIcon v-for="(ic, k) in p.icons" :key="k" :name="ic" class="text-xl" />
                        </div>
                        <div v-if="p.links?.length" class="mt-auto flex flex-wrap gap-2">
                          <UButton v-for="(l, j) in p.links" :key="j" :to="l.to" target="_blank" size="xs"
                            color="primary" variant="soft" trailing-icon="i-mdi-arrow-top-right-thin"
                            class="hover-ring-tint" :aria-label="l.label">
                            <UIcon v-if="l.icon" :name="l.icon" class="mr-1" />
                            {{ l.label }}
                          </UButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </template>
      </UAccordion>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { usePortfolio } from '@/composables/usePortfolio'
import type { Project } from '@/types/portfolio.types'

const portfolio = usePortfolio()
const { t } = useI18n()

// Detect mobile for accordion behavior (SSR-safe)
const isMobile = ref(true)

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })
})

// Accordion config
const accordionItems = computed(() => [{
  label: t('sections.projectsAccordion'),
  value: 'projects'
}])

const accordionUi = {
  root: 'flex flex-col',
  item: 'flex flex-col rounded-2xl border border-gray-200/70 dark:border-gray-700/50 bg-white/70 dark:bg-gray-900/40 shadow-sm',
  header: 'px-4 data-[state=open]:border-b border-gray-200/70 dark:border-gray-700/50',
  trigger: 'group flex-1 items-center gap-2 py-3 text-left cursor-pointer',
  label: 'text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300',
  leadingIcon: 'shrink-0',
  trailingIcon: 'ms-auto text-gray-500 dark:text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180',
  content: 'px-4 pb-4 pt-3 data-[state=closed]:hidden',
  body: 'pt-1'
} as const

type Category = NonNullable<Project['category']>
const categories: Category[] = ['current', 'freelance', 'public']

const projectsByCategory = computed<Record<Category, Project[]>>(() => {
  const acc: Record<Category, Project[]> = { current: [], freelance: [], public: [] }
  for (const p of portfolio.value.projects) {
    const cat = (p.category ?? 'freelance') as Category
    acc[cat].push(p)
  }
  return acc
})

const categoryList = computed<Array<{ cat: Category; items: Project[] }>>(() => {
  return categories.map((c) => ({ cat: c as Category, items: projectsByCategory.value[c as Category] }))
})

const nonEmptyCategoryList = computed<Array<{ cat: Category; items: Project[] }>>(() => {
  return categoryList.value.filter(g => g.items.length > 0)
})

function tCategory(cat: Category): string {
  return t(`projectCategories.${cat}`)
}

function getProjectIcon(project: Project): string {
  if (project.thumbnail) return ''

  const hasGitLink = project.links?.some(link =>
    link.icon === 'i-mdi-github' ||
    /github/i.test(link.label) ||
    /github\.com/i.test(link.to)
  )

  if (project.opensource || hasGitLink) {
    return 'i-mdi-github'
  }

  return 'i-twemoji-rocket'
}
</script>
