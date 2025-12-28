<template>
  <div :class="cardClasses" class="transition-all duration-300">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    hoverable?: boolean;
    glass?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
  }>(),
  {
    hoverable: false,
    glass: false,
    padding: "md",
  }
);

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const cardClasses = computed(() => [
  "rounded-2xl",
  paddingStyles[props.padding],
  props.glass
    ? "glass"
    : "bg-[var(--color-surface)] border border-[var(--color-border)]",
  props.hoverable &&
    "hover:border-[var(--color-primary)] hover:glow-primary cursor-pointer",
]);
</script>
