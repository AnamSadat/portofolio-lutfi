<template>
  <MCard hoverable class="group">
    <div
      class="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow"
    >
      <AIcon :name="icon" size="lg" class="text-[var(--color-background)]" />
    </div>
    <AText tag="h3" variant="h4" class="mb-2">{{ title }}</AText>
    <AText variant="body" muted>{{ description }}</AText>
  </MCard>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>
