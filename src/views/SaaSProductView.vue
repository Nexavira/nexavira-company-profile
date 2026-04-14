<script setup>
import { ref } from 'vue';
import { 
  Zap, 
  ShieldCheck, 
  MousePointer2, 
  CheckCircle2, 
  ArrowRight, 
  Monitor, 
  Search,
  MessageSquare,
  Send
} from 'lucide-vue-next';
import AnimatedText from "@/components/AnimatedText.vue";

const pricingPlans = [
  {
    name: 'Pay As You Go',
    desc: 'Cocok untuk bisnis yang ingin fleksibilitas pengeluaran bulanan rendah.',
    setupFee: 'Rp 2.500.000',
    price: 'Rp 150.000',
    period: '/ bulan',
    billing: 'dibayar bulanan',
    features: [
      'Setup Engine & Database',
      'Desain Tema Eksklusif',
      'Input Konten Awal oleh Tim',
      'Domain .com / .co.id (1 Thn)',
      'Hosting & SSL Terkelola',
      'Update Keamanan Berkala'
    ],
    highlight: false,
    cta: 'Pilih Paket Bulanan'
  },
  {
    name: 'Annual Package',
    desc: 'Pilihan terbaik untuk UMKM. Tanpa biaya jasa, fokus pada pertumbuhan.',
    setupFee: 'Rp 0',
    price: 'Rp 350.000',
    period: '/ bulan',
    billing: 'wajib bayar 1 tahun di depan',
    features: [
      'GRATIS Biaya Setup (Save 2.5jt)',
      'Seluruh Fitur Paket Bulanan',
      'Prioritas Dukungan Teknis',
      'Penyimpanan Media Lebih Besar',
      'Optimasi SEO On-Page',
      'Laporan Performa Bulanan'
    ],
    highlight: true,
    cta: 'Ambil Paket Tahunan'
  },
  {
    name: 'Custom Enterprise',
    desc: 'Solusi sistem kompleks dengan fitur khusus sesuai kebutuhan spesifik skala besar.',
    setupFee: 'Sesuai Kebutuhan',
    price: 'Mulai 10 Juta',
    period: '/ proyek',
    billing: 'pembayaran termin / milestone',
    features: [
      'Custom UI/UX & Animasi',
      'Integrasi API Pihak Ketiga',
      'Dedicated Server Terpisah',
      'SLA & Prioritas Support 24/7',
      'Pengembangan Fitur Khusus',
      'Training Penggunaan Sistem'
    ],
    highlight: false,
    cta: 'Konsultasi Custom'
  }
];

const demoSites = [
  { name: 'Nexavira Industrial', category: 'Manufaktur', url: '#' },
  { name: 'Nexavira Hospitality', category: 'Hotel & Resort', url: '#' },
  { name: 'Nexavira Health', category: 'Klinik & RS', url: '#' }
];

const form = ref({
  name: '',
  company: '',
  sector: '',
  whatsapp: ''
});

const submitOrder = () => {
  const message = `Halo Nexavira! Saya tertarik dengan penawaran pembuatan website.\n\nNama: ${form.value.name}\nPerusahaan: ${form.value.company}\nSektor: ${form.value.sector}`;
  const whatsappUrl = `https://wa.me/6285659445565?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
</script>

<template>
  <div class="bg-white overflow-hidden">
    <section class="relative py-24 lg:py-32 bg-[#05111d]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-nexavira-secondary blur-[120px] rounded-full"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <Zap class="text-nexavira-secondary" :size="16" />
          <span class="text-white text-[10px] font-bold uppercase tracking-widest">Nexavira CMS Engine</span>
        </div>
        
        <AnimatedText tag="h1" type="words" class="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Website Perusahaan <br>
          <span class="text-nexavira-secondary">Terima Beres</span> & Kilat.
        </AnimatedText>
        
        <AnimatedText tag="p" type="words" class="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Lupakan kerumitan coding atau template murahan. Kami merakit website premium berbasis Nuxt untuk bisnis Anda. Performa tinggi, SEO-ready, dan siap pakai dalam hitungan hari.
        </AnimatedText>

        <div class="flex flex-wrap justify-center gap-4">
          <a href="#order-form" class="px-10 py-4 bg-nexavira-secondary text-white font-bold rounded-xl shadow-xl shadow-nexavira-secondary/20 hover:scale-105 transition-transform">
            Dapatkan Penawaran Sekarang
          </a>
          <a href="#pricing" class="px-10 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-colors">
            Lihat Tabel Harga
          </a>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[#F7F9FA]">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 group hover:-translate-y-2 transition-all">
            <div class="w-16 h-16 bg-nexavira-secondary/10 text-nexavira-secondary rounded-2xl flex items-center justify-center mb-8">
              <Zap :size="32" />
            </div>
            <h3 class="text-xl font-bold text-nexavira-primary mb-4">Ultra-Fast Performance</h3>
            <p class="text-nexavira-slate text-sm">Dibangun dengan teknologi Nuxt & Vue terbaru untuk memastikan website Anda dimuat dalam hitungan milidetik.</p>
          </div>
          <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 group hover:-translate-y-2 transition-all">
            <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck :size="32" />
            </div>
            <h3 class="text-xl font-bold text-nexavira-primary mb-4">Bebas Repot (Managed)</h3>
            <p class="text-nexavira-slate text-sm">Tim kami yang menangani setup, optimasi server, hingga pemeliharaan keamanan. Anda cukup fokus jualan.</p>
          </div>
          <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 group hover:-translate-y-2 transition-all">
            <div class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
              <MousePointer2 :size="32" />
            </div>
            <h3 class="text-xl font-bold text-nexavira-primary mb-4">Dashboard Mandiri</h3>
            <p class="text-nexavira-slate text-sm">Ubah teks dan gambar sesuka hati melalui dashboard admin yang intuitif dan mudah dipahami siapa saja.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-nexavira-secondary font-bold uppercase tracking-widest text-xs mb-3">Investment Plan</h2>
          <h3 class="text-3xl md:text-4xl font-extrabold text-nexavira-primary">Investasi Transparan Untuk Bisnis Anda</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div v-for="plan in pricingPlans" :key="plan.name" 
            :class="[
              'p-8 lg:p-10 rounded-[2.5rem] border transition-all duration-500 relative flex flex-col',
              plan.highlight ? 'bg-nexavira-primary border-nexavira-primary text-white shadow-2xl scale-105 z-10' : 'bg-white border-gray-100 text-nexavira-primary'
            ]">
            
            <div v-if="plan.highlight" class="absolute top-0 right-0 bg-nexavira-secondary text-white text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">
              Best Value
            </div>

            <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-4 mt-2" :class="plan.highlight ? 'text-nexavira-secondary' : 'text-nexavira-slate'">{{ plan.name }}</h4>
            <p class="text-sm mb-8 opacity-80 min-h-[40px]">{{ plan.desc }}</p>
            
            <div class="mb-10">
              <span class="text-xs block opacity-60">Mulai Dari</span>
              <div class="flex items-baseline gap-2 flex-wrap">
                <span class="text-3xl lg:text-4xl font-black">{{ plan.price }}</span>
                <span class="text-xs opacity-60">{{ plan.period }}</span>
              </div>
              <p class="text-xs mt-2 font-medium" :class="plan.highlight ? 'text-nexavira-secondary' : 'text-gray-500'">* Biaya Setup: {{ plan.setupFee }}</p>
              <p class="text-[10px] font-bold uppercase tracking-tighter mt-1 opacity-80">{{ plan.billing }}</p>
            </div>

            <ul class="space-y-4 mb-10 flex-grow">
              <li v-for="feat in plan.features" :key="feat" class="flex items-start gap-3 text-sm">
                <CheckCircle2 :size="18" class="shrink-0 mt-0.5" :class="plan.highlight ? 'text-nexavira-secondary' : 'text-emerald-500'" />
                <span class="opacity-90">{{ feat }}</span>
              </li>
            </ul>

            <button @click="submitOrder" :class="[
              'w-full py-4 rounded-xl font-bold transition-all mt-auto',
              plan.highlight ? 'bg-white text-nexavira-primary hover:bg-nexavira-secondary hover:text-white' : 'bg-nexavira-primary text-white hover:bg-nexavira-secondary'
            ]">
              {{ plan.cta }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[#0a3255]">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h3 class="text-white text-3xl font-bold mb-12">Lihat Hasil Kerja Kami</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="site in demoSites" :key="site.name" class="bg-white/5 border border-white/10 p-6 rounded-2xl group hover:bg-white/10 transition-all text-left">
            <div class="flex justify-between items-start mb-4">
              <span class="text-[10px] font-bold text-nexavira-secondary uppercase tracking-widest">{{ site.category }}</span>
              <Monitor class="text-white/20" :size="20" />
            </div>
            <h4 class="text-white font-bold mb-6">{{ site.name }}</h4>
            <a :href="site.url" class="text-white text-xs font-bold flex items-center gap-2 group-hover:text-nexavira-secondary transition-colors">
              Buka Live Demo <ArrowRight :size="14" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="order-form" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="bg-[#F7F9FA] rounded-[3rem] p-8 md:p-20 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 class="text-4xl font-extrabold text-nexavira-primary mb-6">Siap Mendesain <br>Masa Depan Digital Anda?</h3>
            <p class="text-nexavira-slate text-lg leading-relaxed mb-8">Isi formulir singkat ini. Tim ahli Nexavira akan menghubungi Anda via WhatsApp untuk konsultasi awal gratis.</p>
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-nexavira-secondary"><Search :size="20" /></div>
                <span class="text-sm font-bold text-nexavira-primary">Analisis Kebutuhan Bisnis Gratis</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-nexavira-secondary"><MessageSquare :size="20" /></div>
                <span class="text-sm font-bold text-nexavira-primary">Dukungan Konsultasi 24/7</span>
              </div>
            </div>
          </div>

          <div class="bg-white p-10 rounded-[2rem] shadow-2xl">
            <form @submit.prevent="submitOrder" class="space-y-6">
              <div class="space-y-2">
                <label class="text-xs font-bold text-nexavira-primary ml-1 uppercase">Nama Lengkap</label>
                <input v-model="form.name" type="text" placeholder="John Doe" class="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-nexavira-secondary focus:outline-none transition">
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold text-nexavira-primary ml-1 uppercase">Nama Perusahaan</label>
                <input v-model="form.company" type="text" placeholder="PT Digital Solusi" class="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-nexavira-secondary focus:outline-none transition">
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold text-nexavira-primary ml-1 uppercase">Sektor Industri</label>
                <select v-model="form.sector" class="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-nexavira-secondary focus:outline-none transition">
                  <option value="" disabled>Pilih Sektor...</option>
                  <option value="Hospitality">Hospitality (Hotel/Resort)</option>
                  <option value="Industrial">Industrial (Pabrik/Logistik)</option>
                  <option value="Healthcare">Healthcare (Klinik/RS)</option>
                  <option value="Retail">Retail & E-commerce</option>
                  <option value="Other">Lainnya</option>
                </select>
              </div>
              <button type="submit" class="w-full bg-nexavira-primary text-white font-bold py-5 rounded-xl shadow-lg hover:bg-nexavira-secondary transition-all flex items-center justify-center gap-3">
                Mulai Konsultasi Gratis <Send :size="18" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>