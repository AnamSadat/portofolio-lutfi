<template>
  <Icon :name="name" :class="iconClasses" />
</template>

<script setup lang="ts">
type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

const props = withDefaults(
  defineProps<{
    name: string;
    size?: IconSize;
    color?: "primary" | "accent" | "muted" | "inherit";
  }>(),
  {
    size: "md",
    color: "inherit",
  }
);

const sizeStyles: Record<IconSize, string> = {
  xs: "w-4 h-4",
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

const colorStyles = {
  primary: "text-[var(--color-primary)]",
  accent: "text-[var(--color-accent)]",
  muted: "text-[var(--color-text-muted)]",
  inherit: "",
};

const iconClasses = computed(() => [
  sizeStyles[props.size],
  colorStyles[props.color],
]);
</script>
