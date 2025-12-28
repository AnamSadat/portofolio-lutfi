<template>
  <section class="py-14 md:py-30 relative overflow-hidden">
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-linear-to-br from-amber-500/10 via-transparent to-sky-500/10"
    />

    <!-- Decorative elements -->
    <div
      class="absolute top-1/2 left-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2"
    />
    <div
      class="absolute top-1/2 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -translate-y-1/2"
    />

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <ABadge variant="primary" dot class="mb-6">
          {{ cta.badge }}
        </ABadge>

        <AText tag="h2" variant="h2" gradient class="mb-6">
          {{ cta.title }}
        </AText>

        <AText variant="body" muted class="mb-10 max-w-xl mx-auto">
          {{ cta.description }}
        </AText>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <AButton
            variant="primary"
            size="lg"
            :href="cta.primaryButton.href"
            rounded
          >
            {{ cta.primaryButton.text }}
            <AIcon name="ph:arrow-right" size="sm" />
          </AButton>
          <AButton
            v-if="cta.secondaryButton"
            variant="outline"
            size="lg"
            :href="cta.secondaryButton.href"
            rounded
          >
            {{ cta.secondaryButton.text }}
          </AButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CtaData {
  badge: string;
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

defineProps<{
  cta: CtaData;
}>();
</script>
