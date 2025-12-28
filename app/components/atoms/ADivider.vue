<template>
  <div :class="dividerClasses" />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    vertical?: boolean;
    gradient?: boolean;
  }>(),
  {
    vertical: false,
    gradient: false,
  }
);

const dividerClasses = computed(() => [
  props.vertical ? "w-px h-full" : "h-px w-full",
  props.gradient ? "bg-gradient-primary" : "bg-[var(--color-border)]",
]);
</script>
