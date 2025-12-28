<template>
  <div :class="containerClasses" class="overflow-hidden">
    <img
      :src="src"
      :alt="alt"
      :class="imageClasses"
      class="object-cover transition-transform duration-500"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
type ImageShape = "square" | "rounded" | "circle";

const props = withDefaults(
  defineProps<{
    src: string;
    alt: string;
    shape?: ImageShape;
    hover?: boolean;
  }>(),
  {
    shape: "rounded",
    hover: false,
  }
);

const shapeStyles: Record<ImageShape, string> = {
  square: "rounded-none",
  rounded: "rounded-xl",
  circle: "rounded-full",
};

const containerClasses = computed(() => [shapeStyles[props.shape]]);

const imageClasses = computed(() => [
  "w-full h-full",
  props.hover && "group-hover:scale-110",
]);
</script>
