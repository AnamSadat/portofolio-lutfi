<template>
  <section id="about" class="py-14 md:py-30 relative">
    <div class="container mx-auto px-4 md:px-6">
      <MSectionHeader :title="about.title" :subtitle="about.subtitle" />

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Description -->
        <div>
          <div class="prose prose-invert max-w-none">
            <AText
              variant="body"
              muted
              class="whitespace-pre-line leading-relaxed"
            >
              {{ about.description }}
            </AText>
          </div>

          <div class="mt-8">
            <AButton variant="outline" href="#contact">
              Mari Berkolaborasi
              <AIcon name="ph:arrow-right" size="sm" />
            </AButton>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 gap-4">
          <MStatCard
            v-for="(stat, index) in about.highlights"
            :key="index"
            :icon="stat.icon"
            :value="stat.value"
            :label="stat.label"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  highlights: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
}

defineProps<{
  about: AboutData;
}>();
</script>
