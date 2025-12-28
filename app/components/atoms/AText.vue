<template>
  <component :is="tag" :class="textClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
type TextVariant = "h1" | "h2" | "h3" | "h4" | "body" | "small" | "caption";

const props = withDefaults(
  defineProps<{
    tag?: string;
    variant?: TextVariant;
    gradient?: boolean;
    muted?: boolean;
  }>(),
  {
    tag: "p",
    variant: "body",
    gradient: false,
    muted: false,
  }
);

const variantStyles: Record<TextVariant, string> = {
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  h2: "text-3xl md:text-4xl font-bold",
  h3: "text-xl md:text-2xl font-semibold",
  h4: "text-lg md:text-xl font-medium",
  body: "text-base md:text-lg",
  small: "text-sm",
  caption: "text-xs uppercase tracking-wider font-medium",
};

const textClasses = computed(() => [
  variantStyles[props.variant],
  props.gradient && "text-gradient",
  props.muted && "text-[var(--color-text-muted)]",
  !props.gradient && !props.muted && "text-[var(--color-text)]",
]);
</script>
