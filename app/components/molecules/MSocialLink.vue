<template>
  <a
    :href="href"
    :aria-label="label"
    target="_blank"
    rel="noopener noreferrer"
    class="w-12 h-12 rounded-full bg-[var(--color-surface-light)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] hover:border-[var(--color-primary)] border border-transparent transition-all duration-300"
  >
    <AIcon :name="icon" size="md" />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  href: string;
  label: string;
}>();
</script>
