<template>
  <div
    class="flex items-center justify-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/30 hover:bg-slate-800 transition-all duration-300 group"
  >
    <div class="flex flex-col items-center gap-2">
      <AIcon
        :name="icon"
        size="xl"
        class="text-slate-400 group-hover:text-amber-500 transition-colors"
      />
      <AText
        v-if="name"
        variant="small"
        muted
        class="group-hover:text-slate-300 transition-colors"
      >
        {{ name }}
      </AText>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  name?: string;
}>();
</script>
