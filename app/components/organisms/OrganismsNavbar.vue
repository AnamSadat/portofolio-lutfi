<template>
  <nav
    :class="navClasses"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 group">
          <div
            class="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500 to-sky-500 flex items-center justify-center group-hover:scale-105 transition-transform"
          >
            <span class="text-slate-900 font-bold text-lg">P</span>
          </div>
          <span class="text-xl font-bold text-slate-50 hidden sm:block"
            >Portfolio</span
          >
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-slate-400 hover:text-amber-500 transition-colors font-medium text-sm"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="px-5 py-2.5 bg-linear-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            Kolaborasi
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-slate-400 hover:text-amber-500 transition-colors"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle menu"
        >
          <Icon :name="isMenuOpen ? 'ph:x' : 'ph:list'" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="slide">
        <div v-if="isMenuOpen" class="lg:hidden pb-6">
          <div class="flex flex-col gap-2 pt-4 border-t border-slate-800">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-slate-400 hover:text-amber-500 hover:bg-slate-800/50 transition-colors py-3 px-4 rounded-lg"
              @click="isMenuOpen = false"
            >
              {{ link.label }}
            </a>
            <a
              href="#contact"
              class="mt-2 px-5 py-3 bg-linear-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg text-center"
              @click="isMenuOpen = false"
            >
              Kolaborasi
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Karya", href: "#portfolio" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Kontak", href: "#contact" },
];

const navClasses = computed(() => [
  isScrolled.value
    ? "bg-slate-800/60 backdrop-blur-2xl border-b border-amber-500/10 shadow-xl"
    : "bg-transparent",
]);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
