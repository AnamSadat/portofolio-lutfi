<template>
  <section id="featured" class="py-14 md:py-30 bg-(--color-surface) relative">
    <div class="container mx-auto px-4 md:px-6">
      <MSectionHeader :title="featured.title" :subtitle="featured.subtitle" />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MFeatureCard
          v-for="(item, index) in featured.items"
          :key="index"
          :title="item.title"
          :description="item.description"
          :type="item.type"
          :href="item.href"
        />
      </div>

      <!-- View all link -->
      <div v-if="featured.viewAllHref" class="text-center mt-12">
        <AButton variant="outline" :href="featured.viewAllHref">
          Lihat Semua Konten
          <AIcon name="ph:arrow-right" size="sm" />
        </AButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FeaturedData {
  title: string;
  subtitle: string;
  viewAllHref?: string;
  items: Array<{
    title: string;
    description: string;
    type: "video" | "podcast" | "article" | "talk";
    href: string;
  }>;
}

defineProps<{
  featured: FeaturedData;
}>();
</script>
