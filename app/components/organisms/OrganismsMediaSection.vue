<template>
  <section id="media" class="py-14 md:py-30 relative">
    <div class="container mx-auto px-4 md:px-6">
      <MSectionHeader :title="media.title" :subtitle="media.subtitle" />

      <!-- Stats row -->
      <div class="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
        <div v-for="stat in media.stats" :key="stat.label" class="text-center">
          <AText tag="div" variant="h2" gradient>{{ stat.value }}</AText>
          <AText variant="small" muted>{{ stat.label }}</AText>
        </div>
      </div>

      <!-- Media/Brand logos -->
      <div class="mb-8">
        <AText variant="body" muted class="text-center mb-8">
          {{ media.description }}
        </AText>
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <MMediaLogo
          v-for="(brand, index) in media.brands"
          :key="index"
          :icon="brand.icon"
          :name="brand.name"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface MediaData {
  title: string;
  subtitle: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  brands: Array<{
    icon: string;
    name: string;
  }>;
}

defineProps<{
  media: MediaData;
}>();
</script>
