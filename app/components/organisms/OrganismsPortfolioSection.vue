<template>
  <section id="portfolio" class="py-14 md:py-30 relative">
    <div class="container mx-auto px-4 md:px-6">
      <MSectionHeader :title="portfolio.title" :subtitle="portfolio.subtitle" />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MPortfolioCard
          v-for="(item, index) in portfolio.items"
          :key="index"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          :tags="item.tags"
          :live-url="item.liveUrl"
          :repo-url="item.repoUrl"
        />
      </div>

      <!-- View all link -->
      <div v-if="portfolio.viewAllHref" class="text-center mt-12">
        <AButton variant="outline" :href="portfolio.viewAllHref">
          Lihat Semua Karya
          <AIcon name="ph:arrow-right" size="sm" />
        </AButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PortfolioData {
  title: string;
  subtitle: string;
  viewAllHref?: string;
  items: Array<{
    title: string;
    description: string;
    image?: string;
    icon?: string;
    tags?: string[];
    liveUrl?: string;
    repoUrl?: string;
  }>;
}

defineProps<{
  portfolio: PortfolioData;
}>();
</script>
