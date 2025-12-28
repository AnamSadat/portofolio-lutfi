<template>
  <div class="text-center mb-12 md:mb-16">
    <AText
      tag="span"
      variant="caption"
      class="text-[var(--color-primary)] mb-2 block"
    >
      {{ subtitle }}
    </AText>
    <AText tag="h2" variant="h2" gradient>{{ title }}</AText>
    <ADivider gradient class="max-w-24 mx-auto mt-4" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>
