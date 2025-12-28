<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="buttonClasses"
    class="inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    rounded?: boolean;
  }>(),
  {
    variant: "primary",
    size: "md",
    rounded: false,
  }
);

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-primary text-[var(--color-background)] hover:opacity-90 glow-primary",
  secondary:
    "bg-[var(--color-surface-light)] text-[var(--color-text)] hover:bg-[var(--color-border)]",
  outline:
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)]",
  ghost:
    "text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-light)]",
};

const buttonClasses = computed(() => [
  sizeStyles[props.size],
  variantStyles[props.variant],
  props.rounded ? "rounded-full" : "rounded-lg",
]);
</script>
