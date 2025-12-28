<template>
  <footer class="py-12 bg-(--color-surface) border-t border-(--color-border)">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <a href="#" class="flex items-center gap-2 mb-4">
            <div
              class="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500 to-sky-500 flex items-center justify-center"
            >
              <span class="text-slate-900 font-bold text-lg">P</span>
            </div>
            <span class="text-xl font-bold text-gradient">Portfolio</span>
          </a>
          <AText variant="small" muted class="max-w-xs">
            Mengubah ide menjadi kata-kata yang menginspirasi jutaan pembaca.
          </AText>
        </div>

        <!-- Quick Links -->
        <div>
          <AText variant="body" class="font-semibold mb-4">Link Cepat</AText>
          <div class="flex flex-col gap-2">
            <a
              v-for="link in quickLinks"
              :key="link.href"
              :href="link.href"
              class="text-slate-400 hover:text-amber-500 transition-colors text-sm"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <!-- Connect -->
        <div>
          <AText variant="body" class="font-semibold mb-4">Ikuti Saya</AText>
          <div class="flex items-center gap-3">
            <MSocialLink
              v-for="link in social.links"
              :key="link.label"
              :icon="link.icon"
              :href="link.href"
              :label="link.label"
            />
          </div>
        </div>
      </div>

      <ADivider class="mb-8" />

      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <AText variant="small" muted>
          © {{ currentYear }} All rights reserved.
        </AText>
        <AText variant="small" muted>
          Made with <span class="text-red-500">♥</span> using Nuxt & PrimeVue
        </AText>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface SocialData {
  links: Array<{
    icon: string;
    href: string;
    label: string;
  }>;
}

defineProps<{
  social: SocialData;
}>();

const quickLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Karya", href: "#portfolio" },
  { label: "Kontak", href: "#contact" },
];

const currentYear = new Date().getFullYear();
</script>
