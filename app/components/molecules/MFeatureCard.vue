<template>
  <a :href="href" target="_blank" class="block group">
    <MCard hoverable class="h-full">
      <!-- Type badge -->
      <ABadge :variant="typeVariant" class="mb-4">
        <AIcon :name="typeIcon" size="xs" />
        {{ type }}
      </ABadge>

      <AText
        tag="h3"
        variant="h4"
        class="mb-2 group-hover:text-amber-500 transition-colors line-clamp-2"
      >
        {{ title }}
      </AText>

      <AText variant="small" muted class="line-clamp-3 mb-4">
        {{ description }}
      </AText>

      <div class="flex items-center gap-2 text-amber-500 text-sm font-medium">
        <span>{{ ctaText }}</span>
        <AIcon
          name="ph:arrow-right"
          size="sm"
          class="group-hover:translate-x-1 transition-transform"
        />
      </div>
    </MCard>
  </a>
</template>

<script setup lang="ts">
type ContentType = "video" | "podcast" | "article" | "talk";

const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    type: ContentType;
    href: string;
  }>(),
  {}
);

const typeConfig: Record<
  ContentType,
  {
    icon: string;
    variant: "primary" | "accent" | "success" | "muted";
    cta: string;
  }
> = {
  video: { icon: "ph:youtube-logo", variant: "primary", cta: "Tonton Video" },
  podcast: { icon: "ph:microphone", variant: "accent", cta: "Dengarkan" },
  article: { icon: "ph:article", variant: "success", cta: "Baca Artikel" },
  talk: {
    icon: "ph:presentation-chart",
    variant: "primary",
    cta: "Lihat Talk",
  },
};

const typeIcon = computed(() => typeConfig[props.type].icon);
const typeVariant = computed(() => typeConfig[props.type].variant);
const ctaText = computed(() => typeConfig[props.type].cta);
</script>
