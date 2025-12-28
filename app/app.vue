<template>
  <div class="min-h-screen bg-(--color-background)">
    <NuxtRouteAnnouncer />
    <OrganismsNavbar />
    <main>
      <OrganismsHeroSection :profile="profileData" />
      <OrganismsAboutSection :about="aboutData" />
      <OrganismsServicesSection :services="servicesData" />
      <OrganismsPortfolioSection :portfolio="portfolioData" />
      <OrganismsMediaSection :media="mediaData" />
      <OrganismsFeaturedSection :featured="featuredData" />
      <OrganismsTestimonialSection :testimonials="testimonialData" />
      <OrganismsCtaSection :cta="ctaData" />
      <OrganismsContactSection :contact="contactData" />
    </main>
    <OrganismsFooter :social="socialData" />
  </div>
</template>

<script setup lang="ts">
// Profile data - Influencer, Penulis, Author
const profileData = {
  name: "Lutfi MJ",
  tagline: "Influencer • Penulis • Content Creator",
  description:
    "Mengubah ide menjadi kata-kata yang menginspirasi. Berbagi cerita, pemikiran, dan pengalaman untuk jutaan pembaca dan followers di seluruh Indonesia.",
  image: "/avatar.png",
  cta: {
    primary: { text: "Baca Tulisan Saya", href: "#featured" },
    secondary: { text: "Kolaborasi", href: "#contact" },
  },
};

const aboutData = {
  title: "Tentang Saya",
  subtitle: "Cerita",
  description: `Saya percaya bahwa setiap kata memiliki kekuatan untuk mengubah perspektif dan menginspirasi aksi. Sebagai penulis dan content creator, saya telah menulis ratusan artikel, beberapa buku, dan konten yang dibaca jutaan orang.

Perjalanan saya dimulai dari sebuah blog sederhana, hingga kini menjadi suara yang didengar oleh komunitas yang terus berkembang. Setiap tulisan adalah jembatan antara ide dan pembaca.

Yang memotivasi saya adalah melihat bagaimana kata-kata bisa menyentuh hati, membuka pikiran, dan mendorong perubahan positif dalam kehidupan orang lain.`,
  highlights: [
    { icon: "ph:book-open-fill", label: "Buku Diterbitkan", value: "5+" },
    { icon: "ph:users-fill", label: "Total Followers", value: "500K+" },
    { icon: "ph:article-fill", label: "Artikel Ditulis", value: "300+" },
    { icon: "ph:eye-fill", label: "Total Pembaca", value: "10M+" },
  ],
};

const servicesData = {
  title: "Apa yang Saya Tawarkan",
  subtitle: "Layanan",
  items: [
    {
      icon: "ph:pen-nib-fill",
      title: "Penulisan Buku",
      description:
        "Ghostwriting dan co-authoring untuk buku non-fiksi, self-help, dan bisnis.",
    },
    {
      icon: "ph:megaphone-fill",
      title: "Brand Collaboration",
      description:
        "Kolaborasi konten autentik untuk brand yang selaras dengan nilai saya.",
    },
    {
      icon: "ph:microphone-stage-fill",
      title: "Speaking & Workshop",
      description:
        "Berbagi insight tentang personal branding, menulis, dan content creation.",
    },
    {
      icon: "ph:notebook-fill",
      title: "Content Strategy",
      description:
        "Konsultasi strategi konten untuk membangun audiens dan engagement.",
    },
  ],
};

const portfolioData = {
  title: "Karya Terbaru",
  subtitle: "Portfolio",
  viewAllHref: "#",
  items: [
    {
      title: "Buku: Menulis Tanpa Batas",
      description:
        "Panduan praktis untuk siapa saja yang ingin memulai perjalanan menulis dan membangun audiens.",
      icon: "ph:book-fill",
      tags: ["Buku", "Self-Help", "Menulis"],
      liveUrl: "#",
    },
    {
      title: "Newsletter: Kata Mingguan",
      description:
        "Newsletter mingguan dengan 50K+ subscribers tentang kehidupan, produktivitas, dan kreativitas.",
      icon: "ph:envelope-simple-fill",
      tags: ["Newsletter", "Substack"],
      liveUrl: "#",
    },
    {
      title: "Podcast: Ngobrol Santai",
      description:
        "Podcast tentang perjalanan hidup, karir, dan pelajaran dari berbagai tamu inspiratif.",
      icon: "ph:microphone-fill",
      tags: ["Podcast", "Interview"],
      liveUrl: "#",
    },
  ],
};

const mediaData = {
  title: "Dipercaya Oleh",
  subtitle: "Media & Platform",
  description: "Tulisan dan konten saya telah tampil di berbagai platform",
  stats: [
    { value: "500K+", label: "Instagram Followers" },
    { value: "100K+", label: "Newsletter Subscribers" },
    { value: "50K+", label: "Twitter Followers" },
  ],
  brands: [
    { icon: "ph:instagram-logo", name: "Instagram" },
    { icon: "ph:twitter-logo", name: "Twitter" },
    { icon: "ph:tiktok-logo", name: "TikTok" },
    { icon: "ph:youtube-logo", name: "YouTube" },
    { icon: "ph:medium-logo", name: "Medium" },
    { icon: "ph:linkedin-logo", name: "LinkedIn" },
  ],
};

const featuredData = {
  title: "Tulisan Pilihan",
  subtitle: "Featured",
  viewAllHref: "#",
  items: [
    {
      title: "Mengapa Konsistensi Lebih Penting dari Motivasi",
      description:
        "Artikel viral yang dibaca 500K+ orang tentang rahasia produktivitas jangka panjang.",
      type: "article" as const,
      href: "#",
    },
    {
      title: "Cara Saya Membangun 500K Followers dalam 2 Tahun",
      description:
        "Video dokumentasi perjalanan membangun personal brand dari nol.",
      type: "video" as const,
      href: "#",
    },
    {
      title: "Ngobrol Santai Ep. 50: Refleksi Setengah Perjalanan",
      description:
        "Episode spesial podcast membahas pelajaran dari 50 episode dan ratusan tamu.",
      type: "podcast" as const,
      href: "#",
    },
  ],
};

const testimonialData = {
  title: "Kata Mereka",
  subtitle: "Testimoni",
  items: [
    {
      quote:
        "Tulisannya selalu menyentuh dan relevan. Setiap artikel seperti ngobrol dengan teman yang bijak.",
      name: "Rina Kusuma",
      role: "Pembaca Setia",
      rating: 5,
    },
    {
      quote:
        "Kolaborasi dengan beliau sangat profesional. Kontennya autentik dan engagement-nya luar biasa.",
      name: "Ahmad Fauzi",
      role: "Brand Manager, TechCorp",
      rating: 5,
    },
    {
      quote:
        "Workshop menulisnya mengubah cara saya melihat content creation. Sangat praktis dan applicable.",
      name: "Dewi Lestari",
      role: "Content Creator",
      rating: 5,
    },
  ],
};

const ctaData = {
  badge: "Mari Berkolaborasi",
  title: "Punya Ide atau Proyek?",
  description:
    "Apakah Anda ingin kolaborasi konten, mengundang saya berbicara, atau sekadar ngobrol tentang ide? Saya selalu terbuka untuk diskusi.",
  primaryButton: {
    text: "Hubungi Saya",
    href: "#contact",
  },
  secondaryButton: {
    text: "Lihat Layanan",
    href: "#services",
  },
};

const contactData = {
  title: "Hubungi Saya",
  subtitle: "Kontak",
  description:
    "Untuk kolaborasi, undangan speaking, atau sekadar say hi. Saya akan membalas secepat mungkin.",
  email: "hello@example.com",
  phone: "+62 812 3456 7890",
  location: "Jakarta, Indonesia",
};

const socialData = {
  links: [
    { icon: "ph:instagram-logo", href: "#", label: "Instagram" },
    { icon: "ph:twitter-logo", href: "#", label: "Twitter" },
    { icon: "ph:tiktok-logo", href: "#", label: "TikTok" },
    { icon: "ph:youtube-logo", href: "#", label: "YouTube" },
  ],
};
</script>
