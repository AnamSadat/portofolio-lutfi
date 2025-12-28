<template>
  <MCard class="text-center" hoverable>
    <AIcon :name="icon" size="xl" color="primary" class="mb-3" />
    <AText tag="div" variant="h3" gradient>{{ value }}</AText>
    <AText variant="small" muted>{{ label }}</AText>
  </MCard>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  value: string;
  label: string;
}>();
</script>
