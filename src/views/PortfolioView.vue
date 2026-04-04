<script setup>
import { ref, computed } from "vue";
import {
  Sparkles,
  Hotel,
  Landmark,
  HeartPulse,
  GraduationCap,
  Truck,
  ArrowRight,
  Settings,
  LayoutDashboard,
  Briefcase,
  ShoppingCart,
  Calculator,
  Plane,
  Users,
  Building,
  ShieldCheck,
  Utensils,
  CalendarCheck,
  FileText,
  Smartphone,
  Laptop,
  MonitorSmartphone,
  Cpu,
  BarChart3,
} from "lucide-vue-next";

const allProjects = [
  // AI & INTELLIGENT SYSTEMS
  {
    title: "Nexavira Agentic RAG Assistant",
    slug: "agentic-rag-ai",
    category: "AI & Intelligent Systems",
    icon: Cpu,
    iconColor: "text-fuchsia-400",
    desc: "Asisten AI yang tidak hanya menjawab tanya-jawab dokumen (RAG), tapi mampu bertindak mandiri (Agentic) mengeksekusi API dan Database.",
  },
  {
    title: "AI Smart Sales Negotiation",
    slug: "ai-sales-negotiator",
    category: "AI & Intelligent Systems",
    icon: Sparkles,
    iconColor: "text-amber-400",
    desc: "Sistem AI percakapan yang dirancang untuk otomatisasi sales, negosiasi harga, dan reservasi pelanggan 24/7 di berbagai platform.",
  },
  {
    title: "Enterprise AI Predictive Analytics",
    slug: "ai-predictive-analytics",
    category: "AI & Intelligent Systems",
    icon: BarChart3,
    iconColor: "text-emerald-400",
    desc: "Mesin kecerdasan buatan untuk memprediksi tren penjualan dan stok barang guna meminimalisir kerugian operasional perusahaan.",
  },
  // SAAS & HEALTHCARE
  {
    title: "SaaS Digital Invitation Maker",
    slug: "saas-digital-invitation",
    category: "SaaS Platform",
    icon: Sparkles,
    iconColor: "text-purple-400",
    desc: "Platform pembuatan undangan digital mandiri dengan kustomisasi tema dinamis dan antarmuka interaktif.",
  },
  {
    title: "Private Hospital Portal",
    slug: "private-hospital-portal",
    category: "Healthcare",
    icon: HeartPulse,
    iconColor: "text-emerald-400",
    desc: "Website komprehensif berfokus pada pengalaman pasien, mencakup pelacakan rawat inap dan janji temu online.",
  },

  // PUBLIC SECTOR & EDUCATION
  {
    title: "E-Government Asset Management",
    slug: "egov-asset-management",
    category: "Public Sector",
    icon: Landmark,
    iconColor: "text-blue-400",
    desc: "Sistem pengelolaan, digitalisasi, dan hierarki persetujuan dokumen Rencana Kebutuhan Barang Milik Daerah (RKBMD).",
  },
  {
    title: "E-Gov Travel Order System",
    slug: "egov-sppd",
    category: "Public Sector",
    icon: Plane,
    iconColor: "text-sky-500",
    desc: "Aplikasi pengelolaan Surat Perintah Perjalanan Dinas (SPPD) untuk memfasilitasi proses pengajuan birokrasi berjenjang.",
  },
  {
    title: "International Training System",
    slug: "international-training-system",
    category: "Education",
    icon: GraduationCap,
    iconColor: "text-orange-400",
    desc: "Sistem penjadwalan terpusat untuk mengelola kursus, trainer, dan peserta berskala internasional secara efisien.",
  },
  {
    title: "School Crew Management",
    slug: "school-crew-management",
    category: "Education",
    icon: Users,
    iconColor: "text-yellow-500",
    desc: "Sistem pendataan dan manajemen kehadiran (absensi) terpusat untuk staf operasional instansi pendidikan.",
  },

  // LOGISTICS & INDUSTRIAL
  {
    title: "Distribution Dashboard",
    slug: "distribution-dashboard",
    category: "Logistics & Industrial",
    icon: Truck,
    iconColor: "text-red-400",
    desc: "Sistem dashboard admin terpusat untuk memantau penjualan dan pelacakan pengiriman logistik secara real-time.",
  },
  {
    title: "Manufacturing CRM & Sales",
    slug: "manufacturing-crm",
    category: "Logistics & Industrial",
    icon: LayoutDashboard,
    iconColor: "text-indigo-400",
    desc: "Platform CRM khusus industri manufaktur distribusi untuk melacak aktivitas sales dan manajemen katalog produk (PIM).",
  },
  {
    title: "Enterprise Delivery & Duty",
    slug: "enterprise-delivery",
    category: "Logistics & Industrial",
    icon: Truck,
    iconColor: "text-orange-500",
    desc: "Sistem pendataan operasional logistik yang mengatur modul penugasan kurir dan status pengiriman barang.",
  },

  // HOSPITALITY & TRAVEL
  {
    title: "Integrated CRM & Sales Hotel",
    slug: "integrated-crm-hotel",
    category: "Hospitality & Travel",
    icon: Hotel,
    iconColor: "text-cyan-400",
    desc: "Sistem CRM end-to-end untuk manajemen siklus penjualan, telemarketing, hingga dokumen operasional hotel (BEO).",
  },
  {
    title: "Hospitality Direct Booking Engine",
    slug: "hotel-booking-engine",
    category: "Hospitality & Travel",
    icon: Laptop,
    iconColor: "text-blue-500",
    desc: "Sistem pemesanan kamar hotel (direct booking) dengan kalkulasi harga dinamis dan kalender interaktif.",
  },
  {
    title: "Hospitality Core Admin",
    slug: "hotel-core-admin",
    category: "Hospitality & Travel",
    icon: Settings,
    iconColor: "text-slate-600",
    desc: "Website dashboard admin untuk pemantauan menyeluruh reservasi kamar dan manajemen layanan tamu.",
  },
  {
    title: "QR-Based Room Service System",
    slug: "qr-room-service",
    category: "Hospitality & Travel",
    icon: Utensils,
    iconColor: "text-rose-400",
    desc: "Sistem pemesanan room service interaktif berbasis scan QR Code langsung dari kamar tamu hotel menuju dapur.",
  },
  {
    title: "Hotel Operational & Front Office",
    slug: "hotel-front-office",
    category: "Hospitality & Travel",
    icon: MonitorSmartphone,
    iconColor: "text-teal-400",
    desc: "Platform terintegrasi untuk manajemen tugas harian, aktivitas front office, dan penanganan keluhan tamu.",
  },
  {
    title: "Umrah & Travel Booking",
    slug: "umrah-travel-booking",
    category: "Hospitality & Travel",
    icon: Briefcase,
    iconColor: "text-emerald-500",
    desc: "Platform booking komprehensif untuk layanan agen perjalanan wisata dan manajemen manifes ibadah Haji/Umrah.",
  },

  // FINANCE
  {
    title: "Corporate Cost Control",
    slug: "corporate-cost-control",
    category: "Finance",
    icon: Calculator,
    iconColor: "text-teal-500",
    desc: "Aplikasi manajemen finansial untuk memantau arus kas, pendanaan, dan persetujuan (approval) dana operasional.",
  },
  {
    title: "Savings & Loan Cooperative",
    slug: "cooperative-cms",
    category: "Finance",
    icon: Landmark,
    iconColor: "text-blue-500",
    desc: "Sistem manajemen aplikasi Koperasi Simpan Pinjam (KSP) untuk memantau profil anggota dan kalkulasi pinjaman.",
  },
  {
    title: "Hospitality Revenue Dashboard",
    slug: "hotel-revenue-dashboard",
    category: "Finance",
    icon: Calculator,
    iconColor: "text-green-500",
    desc: "Dashboard interaktif berbasis web untuk analisis dan visualisasi data pendapatan serta tingkat hunian.",
  },

  // E-COMMERCE & RETAIL
  {
    title: "Food Court POS System",
    slug: "food-court-pos",
    category: "E-Commerce & Retail",
    icon: ShoppingCart,
    iconColor: "text-amber-500",
    desc: "Sistem kasir (POS) terpusat untuk manajemen pesanan, variasi menu, dan transaksi real-time di food court.",
  },
  {
    title: "E-Commerce Bookstore Admin",
    slug: "ecommerce-bookstore",
    category: "E-Commerce & Retail",
    icon: ShoppingCart,
    iconColor: "text-orange-500",
    desc: "Sistem manajemen konten dan transaksi khusus untuk memantau penjualan serta inventaris produk buku.",
  },
  {
    title: "Publisher Payment Checkout",
    slug: "publisher-checkout",
    category: "E-Commerce & Retail",
    icon: ShoppingCart,
    iconColor: "text-indigo-400",
    desc: "Sistem e-commerce dan halaman pembayaran terintegrasi gateway untuk perusahaan penerbitan.",
  },

  // ENTERPRISE & SAAS
  {
    title: "Aviation Vendor Helpdesk",
    slug: "aviation-vendor-helpdesk",
    category: "Enterprise & SaaS",
    icon: Settings,
    iconColor: "text-slate-400",
    desc: "Digitalisasi operasional internal meliputi sistem kehadiran, laporan insiden, dan manajemen aset vendor bandara.",
  },
  {
    title: "Enterprise Facility Management",
    slug: "facility-management",
    category: "Enterprise & SaaS",
    icon: Building,
    iconColor: "text-indigo-500",
    desc: "Sistem manajemen aset, pemeliharaan gedung, dan penjadwalan internal untuk mendukung operasional instansi besar.",
  },
  {
    title: "Domestic Worker Agency System",
    slug: "worker-agency",
    category: "Enterprise & SaaS",
    icon: Users,
    iconColor: "text-pink-400",
    desc: "Website admin khusus untuk mengelola pendataan penyewaan jasa Asisten Rumah Tangga (ART) dan sistem rekrutmen.",
  },
  {
    title: "Legal Services Apps CMS",
    slug: "legal-services-cms",
    category: "Enterprise & SaaS",
    icon: ShieldCheck,
    iconColor: "text-slate-500",
    desc: "Sistem manajemen konten terpusat untuk aplikasi layanan konsultasi hukum, mencakup modul open case dan rekam data.",
  },
  {
    title: "Religious Event & Asset Booking",
    slug: "religious-event-booking",
    category: "Enterprise & SaaS",
    icon: CalendarCheck,
    iconColor: "text-purple-500",
    desc: "Sistem manajemen booking untuk penjadwalan acara dan manajemen fasilitas di rumah ibadah berskala besar.",
  },
  {
    title: "Service & Housekeeping Booking",
    slug: "service-housekeeping",
    category: "Enterprise & SaaS",
    icon: CalendarCheck,
    iconColor: "text-cyan-500",
    desc: "Sistem dashboard admin untuk memantau pesanan jasa service AC serta penugasan teknisi harian.",
  },
  {
    title: "Wedding Organizer Management",
    slug: "wedding-organizer",
    category: "Enterprise & SaaS",
    icon: FileText,
    iconColor: "text-rose-300",
    desc: "Sistem informasi manajemen untuk mengelola data acara, jadwal vendor, dan kebutuhan operasional WO.",
  },
  {
    title: "Corporate Management Dashboard",
    slug: "corporate-management",
    category: "Enterprise & SaaS",
    icon: LayoutDashboard,
    iconColor: "text-blue-600",
    desc: "Sistem manajemen internal dan request perusahaan meliputi modul permintaan proyek dan pengadaan barang.",
  },
];

const activeFilter = ref("Semua");
const categories = [
  'Semua',
  'AI & Intelligent Systems',
  'SaaS Platform', 
  'Enterprise & SaaS', 
  'Hospitality & Travel', 
  'Public Sector', 
  'Healthcare', 
  'Logistics & Industrial', 
  'Finance', 
  'E-Commerce & Retail',
  'Education'
];

const filteredProjects = computed(() => {
  if (activeFilter.value === "Semua") {
    return allProjects;
  }
  return allProjects.filter((p) => p.category === activeFilter.value);
});
</script>

<template>
  <div class="bg-[#F7F9FA] min-h-screen py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-aos="fade-down">
        <h1
          class="text-4xl md:text-5xl font-extrabold text-nexavira-primary mb-6 tracking-tight"
        >
          Katalog Portofolio
        </h1>
        <p
          class="text-nexavira-slate max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Jelajahi {{ allProjects.length }} sistem dan platform yang telah kami
          kembangkan untuk mentransformasi berbagai sektor industri.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeFilter = cat"
          class="px-5 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all duration-300"
          :class="
            activeFilter === cat
              ? 'bg-nexavira-primary text-white shadow-lg'
              : 'bg-white text-nexavira-slate border border-gray-200 hover:border-nexavira-secondary hover:text-nexavira-secondary'
          "
        >
          {{ cat }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TransitionGroup name="list">
          <router-link
            v-for="project in filteredProjects"
            :key="project.slug"
            :to="`/portfolio/${project.slug}`"
            class="group relative bg-nexavira-primary rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all block cursor-pointer h-[320px]"
          >
            <div
              class="absolute inset-0 flex items-center justify-center bg-linear-to-br from-nexavira-primary to-[#0a3255] group-hover:scale-110 transition duration-700"
            >
              <component
                :is="project.icon"
                :size="64"
                :stroke-width="1.2"
                :class="[
                  'filter drop-shadow-2xl transition-colors duration-500 opacity-80',
                  project.iconColor,
                ]"
              />
            </div>

            <div
              class="absolute inset-0 bg-linear-to-t from-nexavira-primary via-nexavira-primary/80 to-transparent p-6 flex flex-col justify-end"
            >
              <span
                class="text-nexavira-secondary text-[10px] font-bold uppercase tracking-widest mb-1"
                >{{ project.category }}</span
              >
              <h4 class="text-xl font-bold text-white mb-1 leading-tight">
                {{ project.title }}
              </h4>

              <div
                class="max-h-0 overflow-hidden group-hover:max-h-64 transition-all duration-500 ease-in-out"
              >
                <p
                  class="text-white/70 text-sm leading-relaxed mb-3 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
                >
                  {{ project.desc }}
                </p>
                <div
                  class="inline-flex items-center gap-2 text-nexavira-secondary font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                >
                  Lihat Studi Kasus <ArrowRight :size="14" />
                </div>
              </div>
            </div>
          </router-link>
        </TransitionGroup>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <p class="text-nexavira-slate text-lg">
          Belum ada proyek di kategori ini.
        </p>
        <button
          @click="activeFilter = 'Semua'"
          class="mt-4 text-nexavira-secondary font-bold hover:underline"
        >
          Lihat Semua Proyek
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
