<template>
  <MCard class="relative group" hoverable>
    <!-- Quote icon -->
    <div
      class="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center"
    >
      <AIcon name="ph:quotes" size="sm" class="text-slate-900" />
    </div>

    <!-- Content -->
    <div class="pt-4">
      <AText variant="body" class="italic leading-relaxed mb-6">
        "{{ quote }}"
      </AText>

      <!-- Author -->
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-gradient-primary p-0.5">
          <div
            class="w-full h-full rounded-full bg-slate-800 flex items-center justify-center"
          >
            <span class="text-sm font-bold text-gradient">{{ initials }}</span>
          </div>
        </div>
        <div>
          <AText variant="body" class="font-semibold">{{ name }}</AText>
          <AText variant="small" muted>{{ role }}</AText>
        </div>
      </div>
    </div>

    <!-- Rating -->
    <div v-if="rating" class="flex gap-1 mt-4">
      <AIcon
        v-for="i in 5"
        :key="i"
        name="ph:star-fill"
        size="sm"
        :class="i <= rating ? 'text-amber-500' : 'text-slate-600'"
      />
    </div>
  </MCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  quote: string;
  name: string;
  role: string;
  rating?: number;
  image?: string;
}>();

const initials = computed(() => {
  return props.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
});
</script>
