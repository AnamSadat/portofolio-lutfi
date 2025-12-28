<template>
  <section
    id="testimonials"
    class="py-14 md:py-30 bg-(--color-surface) relative overflow-hidden"
  >
    <!-- Background decoration -->
    <div
      class="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
    />
    <div
      class="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"
    />

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <MSectionHeader
        :title="testimonials.title"
        :subtitle="testimonials.subtitle"
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MTestimonialCard
          v-for="(item, index) in testimonials.items"
          :key="index"
          :quote="item.quote"
          :name="item.name"
          :role="item.role"
          :rating="item.rating"
          class="animate-slide-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TestimonialData {
  title: string;
  subtitle: string;
  items: Array<{
    quote: string;
    name: string;
    role: string;
    rating?: number;
    image?: string;
  }>;
}

defineProps<{
  testimonials: TestimonialData;
}>();
</script>
