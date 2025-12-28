<template>
  <MCard padding="none" hoverable class="group overflow-hidden">
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-sky-500/20"
      />
      <div
        class="absolute inset-0 flex items-center justify-center bg-slate-800"
      >
        <AIcon :name="icon || 'ph:image'" size="xl" color="muted" />
      </div>

      <!-- Overlay on hover -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
      >
        <div class="flex gap-2">
          <a
            v-if="liveUrl"
            :href="liveUrl"
            target="_blank"
            class="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-slate-900 hover:bg-amber-400 transition-colors"
          >
            <AIcon name="ph:arrow-square-out" size="sm" />
          </a>
          <a
            v-if="repoUrl"
            :href="repoUrl"
            target="_blank"
            class="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-slate-200 hover:bg-slate-600 transition-colors"
          >
            <AIcon name="ph:github-logo" size="sm" />
          </a>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <div class="flex flex-wrap gap-2 mb-3">
        <ABadge v-for="tag in tags?.slice(0, 3)" :key="tag" variant="muted">
          {{ tag }}
        </ABadge>
      </div>
      <AText
        tag="h3"
        variant="h4"
        class="mb-2 group-hover:text-amber-500 transition-colors"
      >
        {{ title }}
      </AText>
      <AText variant="small" muted class="line-clamp-2">
        {{ description }}
      </AText>
    </div>
  </MCard>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image?: string;
  icon?: string;
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
}>();
</script>
