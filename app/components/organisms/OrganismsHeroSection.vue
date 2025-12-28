<template>
  <section
    class="min-h-screen flex items-center relative overflow-hidden pt-20"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse"
      />
      <div
        class="absolute top-40 right-20 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"
      />
      <div
        class="absolute bottom-20 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 2s"
      />

      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(248,250,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,0.03)_1px,transparent_1px)] bg-size-[60px_60px]"
      />

      <!-- Floating Particles -->
      <div
        class="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-500 rounded-full animate-float opacity-60"
      />
      <div
        class="absolute top-1/3 right-1/3 w-3 h-3 bg-sky-400 rounded-full animate-float opacity-40"
        style="animation-delay: 0.5s"
      />
      <div
        class="absolute bottom-1/3 left-1/2 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-50"
        style="animation-delay: 1s"
      />
      <div
        class="absolute top-2/3 right-1/4 w-2 h-2 bg-sky-500 rounded-full animate-float opacity-30"
        style="animation-delay: 1.5s"
      />
    </div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left order-2 lg:order-1">
          <!-- Badge -->
          <ABadge variant="primary" dot class="mb-6 animate-fade-in">
            Terbuka untuk kolaborasi
          </ABadge>

          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up text-slate-50"
          >
            Hi, I'm <span class="text-gradient">{{ profile.name }}</span>
          </h1>

          <p
            class="text-xl md:text-2xl font-medium text-slate-400 mb-6 animate-slide-up"
            style="animation-delay: 0.1s"
          >
            {{ profile.tagline }}
          </p>

          <p
            class="text-base md:text-lg text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up"
            style="animation-delay: 0.2s"
          >
            {{ profile.description }}
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up"
            style="animation-delay: 0.3s"
          >
            <AButton
              variant="primary"
              size="lg"
              :href="profile.cta.primary.href"
            >
              {{ profile.cta.primary.text }}
              <AIcon name="ph:arrow-right" size="sm" />
            </AButton>
            <AButton
              variant="outline"
              size="lg"
              :href="profile.cta.secondary.href"
            >
              {{ profile.cta.secondary.text }}
            </AButton>
          </div>

          <!-- Quick Stats -->
          <div
            class="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 animate-slide-up"
            style="animation-delay: 0.4s"
          >
            <div class="text-center">
              <div class="text-3xl font-bold text-gradient">500K+</div>
              <div class="text-sm text-slate-500">Followers</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gradient">5+</div>
              <div class="text-sm text-slate-500">Buku</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gradient">10M+</div>
              <div class="text-sm text-slate-500">Pembaca</div>
            </div>
          </div>
        </div>

        <!-- Avatar/Image -->
        <div class="order-1 lg:order-2 flex justify-center">
          <div class="relative">
            <!-- Decorative rings -->
            <div
              class="absolute -inset-4 rounded-full border border-amber-500/20 animate-pulse"
            />
            <div
              class="absolute -inset-8 rounded-full border border-sky-500/10"
            />
            <div
              class="absolute -inset-12 rounded-full border border-amber-500/5"
            />

            <!-- Glow effect -->
            <div
              class="absolute inset-0 rounded-full bg-linear-to-br from-amber-500/30 to-sky-500/30 blur-2xl animate-pulse-glow"
            />

            <!-- Avatar container -->
            <div
              class="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-linear-to-br from-amber-500 to-sky-500 animate-float"
            >
              <div
                class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden"
              >
                <!-- Placeholder avatar with initials -->
                <div class="text-6xl md:text-7xl font-bold text-gradient">
                  {{ initials }}
                </div>
              </div>
            </div>

            <!-- Floating badges -->
            <div
              class="absolute -right-4 top-1/4 px-3 py-2 rounded-lg bg-slate-800/90 border border-slate-700 shadow-xl animate-float"
              style="animation-delay: 0.5s"
            >
              <div class="flex items-center gap-2">
                <Icon name="ph:pen-nib-fill" class="w-5 h-5 text-amber-500" />
                <span class="text-sm font-medium text-slate-200">Penulis</span>
              </div>
            </div>

            <div
              class="absolute -left-4 bottom-1/4 px-3 py-2 rounded-lg bg-slate-800/90 border border-slate-700 shadow-xl animate-float"
              style="animation-delay: 1s"
            >
              <div class="flex items-center gap-2">
                <Icon name="ph:users-fill" class="w-5 h-5 text-sky-500" />
                <span class="text-sm font-medium text-slate-200"
                  >Influencer</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <a
        href="#about"
        class="flex flex-col items-center gap-2 text-slate-500 hover:text-amber-500 transition-colors"
      >
        <span class="text-xs uppercase tracking-wider">Scroll</span>
        <Icon name="ph:caret-down" class="w-6 h-6 animate-bounce" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ProfileData {
  name: string;
  tagline: string;
  description: string;
  image?: string;
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
}

const props = defineProps<{
  profile: ProfileData;
}>();

const initials = computed(() => {
  return props.profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
});
</script>
