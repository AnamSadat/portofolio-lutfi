<template>
  <section id="services" class="py-14 md:py-30 bg-[var(--color-surface)]">
    <div class="container mx-auto px-4 md:px-6">
      <MSectionHeader :title="services.title" :subtitle="services.subtitle" />

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MServiceCard
          v-for="(service, index) in services.items"
          :key="index"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ServicesData {
  title: string;
  subtitle: string;
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

defineProps<{
  services: ServicesData;
}>();
</script>
