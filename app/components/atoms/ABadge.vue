<template>
  <span
    :class="badgeClasses"
    class="inline-flex items-center gap-1.5 font-medium"
  >
    <span
      v-if="dot"
      class="w-2 h-2 rounded-full animate-pulse"
      :class="dotColor"
    />
    <slot />
  </span>
</template>

<script setup lang="ts">
type BadgeVariant = "primary" | "accent" | "success" | "muted";

const props = withDefaults(
  defineProps<{
    variant?: BadgeVariant;
    dot?: boolean;
  }>(),
  {
    variant: "primary",
    dot: false,
  }
);

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  accent: "bg-sky-500/10 text-sky-500 border-sky-500/20",
  success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  muted: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

const dotColors: Record<BadgeVariant, string> = {
  primary: "bg-amber-500",
  accent: "bg-sky-500",
  success: "bg-emerald-500",
  muted: "bg-slate-400",
};

const badgeClasses = computed(() => [
  "px-3 py-1.5 rounded-full text-sm border",
  variantStyles[props.variant],
]);

const dotColor = computed(() => dotColors[props.variant]);
</script>
