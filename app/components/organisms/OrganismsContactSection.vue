<template>
  <section id="contact" class="py-14 md:py-30 relative">
    <div class="container mx-auto px-4 md:px-6">
      <MSectionHeader :title="contact.title" :subtitle="contact.subtitle" />

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Contact Info -->
          <MCard class="space-y-6">
            <AText variant="body" muted>{{ contact.description }}</AText>

            <div class="space-y-4">
              <a
                :href="`mailto:${contact.email}`"
                class="flex items-center gap-4 text-(--color-text-muted) hover:text-(--color-primary) transition-colors"
              >
                <div
                  class="w-12 h-12 rounded-lg bg-(--color-surface-light) flex items-center justify-center"
                >
                  <AIcon name="ph:envelope" size="md" color="primary" />
                </div>
                <div>
                  <AText variant="small" muted>Email</AText>
                  <AText variant="body">{{ contact.email }}</AText>
                </div>
              </a>

              <a
                :href="`tel:${contact.phone}`"
                class="flex items-center gap-4 text-(--color-text-muted) hover:text-(--color-primary) transition-colors"
              >
                <div
                  class="w-12 h-12 rounded-lg bg-(--color-surface-light) flex items-center justify-center"
                >
                  <AIcon name="ph:phone" size="md" color="primary" />
                </div>
                <div>
                  <AText variant="small" muted>Telepon</AText>
                  <AText variant="body">{{ contact.phone }}</AText>
                </div>
              </a>

              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-(--color-surface-light) flex items-center justify-center"
                >
                  <AIcon name="ph:map-pin" size="md" color="primary" />
                </div>
                <div>
                  <AText variant="small" muted>Lokasi</AText>
                  <AText variant="body">{{ contact.location }}</AText>
                </div>
              </div>
            </div>
          </MCard>

          <!-- Contact Form -->
          <MCard>
            <form class="space-y-4" @submit.prevent="handleSubmit">
              <div>
                <label class="block text-sm text-(--color-text-muted) mb-2"
                  >Nama</label
                >
                <InputText
                  v-model="form.name"
                  placeholder="Nama lengkap"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-sm text-(--color-text-muted) mb-2"
                  >Email</label
                >
                <InputText
                  v-model="form.email"
                  type="email"
                  placeholder="email@contoh.com"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-sm text-(--color-text-muted) mb-2"
                  >Pesan</label
                >
                <Textarea
                  v-model="form.message"
                  placeholder="Ceritakan tentang ide atau proyek Anda..."
                  rows="4"
                  class="w-full"
                />
              </div>

              <AButton variant="primary" class="w-full">
                Kirim Pesan
                <AIcon name="ph:paper-plane-tilt" size="sm" />
              </AButton>
            </form>
          </MCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ContactData {
  title: string;
  subtitle: string;
  description: string;
  email: string;
  phone: string;
  location: string;
}

defineProps<{
  contact: ContactData;
}>();

const form = reactive({
  name: "",
  email: "",
  message: "",
});

function handleSubmit() {
  // Handle form submission
  console.log("Form submitted:", form);
}
</script>
