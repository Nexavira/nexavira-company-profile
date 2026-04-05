<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { 
  ArrowLeft, 
  Quote, 
  GraduationCap, 
  Briefcase, 
  ChevronDown, 
  ChevronUp,
  MapPin,
  Calendar,
  Target,
  Code2
} from 'lucide-vue-next';
import { Icon } from '@iconify/vue';

const route = useRoute();
const router = useRouter();

const teamDB = [
  {
    slug: 'dimas-agung-prasetyo',
    name: 'Dimas Agung Prasetyo',
    role: 'System Analyst & Backend Developer',
    title: 'Founder \n Chief Executive Officer',
    location: 'Kab. Bandung Barat, Jawa Barat',
    education: 'S1 Teknik Informatika',
    image: '/dimas.jpg',
    quote: 'Analitik yang kuat dimulai dengan alat yang tepat dan rasa ingin tahu yang tinggi.',
    experience: '3+ Tahun',
    specialization: [
      'System Analysis', 
      'Backend Architecture', 
      'RESTful API Design', 
      'Database Optimization'
    ],
    masteredTech: [
      'logos:php', 
      'logos:laravel', 
      'logos:postgresql', 
      'logos:mysql',
      'logos:react',
      'logos:jira'
    ],
    projects: [
      {
        name: 'International Training Management System',
        desc: 'Sistem penjadwalan terpusat untuk mengelola kursus, trainer, dan peserta berskala internasional.',
        contribution: 'Sebagai System Analyst & Backend Developer: Memimpin analisis kebutuhan sistem dan merancang arsitektur backend utama untuk logika penjadwalan yang kompleks serta modul pelaporan dinamis.',
        techIcons: ['logos:php', 'logos:laravel', 'logos:postgresql']
      },
      {
        name: 'Integrated CRM & Sales (Hospitality)',
        desc: 'Sistem CRM end-to-end untuk manajemen siklus penjualan hotel dari telemarketing hingga penerbitan dokumen operasional (BEO).',
        contribution: 'Sebagai System Analyst & Backend Developer: Merancang skema database dan membangun arsitektur backend untuk melacak pipeline penjualan secara terpusat.',
        techIcons: ['logos:laravel', 'logos:postgresql']
      },
      {
        name: 'Aviation Vendor Helpdesk & Operations',
        desc: 'Digitalisasi operasional internal vendor layanan bandara meliputi sistem kehadiran, laporan insiden, dan pemeliharaan aset.',
        contribution: 'Sebagai System Analyst & Backend Developer: Memetakan proses bisnis klien menjadi spesifikasi teknis dan mengembangkan backend end-to-end dengan notifikasi otomatis.',
        techIcons: ['logos:php', 'logos:laravel', 'logos:postgresql']
      },
      {
        name: 'Hotel Operational & Front Office System',
        desc: 'Platform terintegrasi untuk manajemen tugas harian, aktivitas front office, dan penanganan keluhan tamu di industri perhotelan.',
        contribution: 'Sebagai Backend Developer: Mengembangkan fitur pelaporan dan API untuk manajemen tugas operasional harian.',
        techIcons: ['logos:php', 'logos:laravel']
      },
      {
        name: 'QR-Based Room Service System',
        desc: 'Sistem pemesanan room service interaktif berbasis scan QR Code langsung dari kamar tamu hotel.',
        contribution: 'Sebagai System Analyst & Backend Developer: Menganalisis alur pemesanan tamu dan membangun sistem pemrosesan pesanan real-time dari kamar menuju dapur dan front office.',
        techIcons: ['logos:php', 'logos:laravel', 'logos:mysql']
      },
      {
        name: 'Rest Area POS & Management System',
        desc: 'Sistem Point of Sale (POS) untuk manajemen menu, stok, dan transaksi di pujasera (food court) rest area.',
        contribution: 'Sebagai Backend Developer: Mengembangkan logika pemrosesan transaksi yang akurat dan manajemen inventaris stok.',
        techIcons: ['logos:laravel', 'logos:mysql']
      },
      {
        name: 'Enterprise Budgeting & Cost Control',
        desc: 'Sistem pengelolaan keuangan internal untuk mengatur, melacak, dan melaporkan anggaran perusahaan secara terperinci.',
        contribution: 'Sebagai Backend Developer: Merancang logika kalkulasi pelacakan anggaran dan pembuatan arsitektur pelaporan finansial.',
        techIcons: ['logos:laravel', 'logos:postgresql']
      },
      {
        name: 'Umrah & Travel Agency Platform',
        desc: 'Platform booking online untuk agensi travel haji dan umrah guna mengelola paket perjalanan dan data jamaah.',
        contribution: 'Sebagai Backend Developer: Membangun sistem manajemen data jamaah dan ketersediaan paket perjalanan secara terpusat.',
        techIcons: ['logos:php', 'logos:laravel']
      },
      {
        name: 'Religious Event & Accommodation Management',
        desc: 'Sistem manajemen booking untuk pengelolaan jadwal acara dan fasilitas di rumah ibadah berskala besar.',
        contribution: 'Sebagai Backend Developer: Mengembangkan fitur API reservasi fasilitas dan manajemen jadwal kegiatan untuk mencegah bentrok ruangan.',
        techIcons: ['logos:laravel', 'logos:mysql']
      },
      {
        name: 'Hospitality Online Booking Engine',
        desc: 'Sistem pemesanan kamar online (booking engine direct) untuk memfasilitasi reservasi tamu secara mandiri.',
        contribution: 'Sebagai System Analyst & Backend Developer: Menganalisis spesifikasi teknis bisnis hotel dan merancang alur logika sistem pemesanan dari tahap awal.',
        techIcons: ['logos:php', 'logos:laravel']
      },
      {
        name: 'B2B Sales Call Management System',
        desc: 'Sistem monitoring aktivitas telemarketing dan panggilan penjualan (sales call) terpadu untuk industri manufaktur.',
        contribution: 'Sebagai System Analyst & Backend Developer: Merancang alur pemantauan aktivitas tim sales dari panggilan pertama hingga konversi pesanan berjalan lancar.',
        techIcons: ['logos:laravel', 'logos:mysql']
      },
      {
        name: 'Hospitality Revenue Visualization Dashboard',
        desc: 'Dashboard interaktif berbasis web untuk memvisualisasikan data pendapatan dan tingkat hunian hotel.',
        contribution: 'Sebagai Frontend Developer: Membangun antarmuka pengguna (UI) dan integrasi chart dinamis menggunakan ekosistem React.js.',
        techIcons: ['logos:react', 'logos:javascript']
      },
      {
        name: 'Enterprise Internal Facility Monitoring',
        desc: 'Website admin komprehensif untuk pemantauan maintenance, keamanan, dan housekeeping internal perusahaan (Fasilitas Maxima).',
        contribution: 'Sebagai Backend Developer: Melakukan pengembangan lanjutan (maintenance) dan pembuatan API untuk sistem pelaporan fasilitas.',
        techIcons: ['logos:php', 'logos:laravel']
      },
      {
        name: 'Hospitality Core Admin Dashboard',
        desc: 'Website dashboard admin untuk pemantauan menyeluruh reservasi kamar dan layanan operasional hotel dari perspektif manajemen.',
        contribution: 'Sebagai System Analyst: Mengorkestrasi dan memetakan seluruh proses bisnis manajemen hotel serta membuat rancangan spesifikasi sistem sebelum fase development.',
        techIcons: ['logos:jira', 'logos:figma'] 
      },
      {
        name: 'E-Government Asset Management Platform',
        desc: 'Sistem pengelolaan dokumen Rencana Kebutuhan Barang Milik Daerah (RKBMD) dan Pemeliharaan (RKPBMD) untuk instansi pemerintah Daerah Papua Barat.',
        contribution: 'Terlibat dalam pengembangan backend untuk digitalisasi dan pengelolaan dokumen aset negara.',
        techIcons: ['logos:laravel', 'logos:php', 'logos:mysql']
      },
    ]
  },
  {
    slug: 'pranesha-wahyu',
    name: 'Pranesha Wahyu S. A',
    role: 'Lead Backend Engineer',
    title: 'Founder \n Chief Operating Officer',
    location: 'Bandung, Jawa Barat',
    education: 'S1 Teknik Informatika',
    image: '/pranesha.jpg',
    quote: 'Skalabilitas dan efisiensi logika server adalah fondasi dari setiap aplikasi yang hebat.',
    experience: '5+ Tahun',
    specialization: [
      'Server Scalability', 
      'Database Management', 
      'API Integration', 
      'E-Government Systems'
    ],
    masteredTech: [
      'logos:php', 
      'logos:laravel', 
      'logos:postgresql', 
      'logos:mysql', 
      'logos:nodejs-icon'
    ],
    projects: [
      {
        name: 'E-Government Asset Management Platform',
        desc: 'Sistem pengelolaan dokumen Rencana Kebutuhan Barang Milik Daerah (RKBMD) dan Pemeliharaan (RKPBMD) untuk instansi pemerintah Daerah Papua Barat.',
        contribution: 'Terlibat dalam pengembangan backend untuk digitalisasi dan pengelolaan dokumen aset negara.',
        techIcons: ['logos:laravel', 'logos:php', 'logos:mysql']
      },
      {
        name: 'E-Government Travel Order System',
        desc: 'Aplikasi pengelolaan Surat Perintah Perjalanan Dinas (SPPD) untuk Sekretariat Daerah Papua Barat.',
        contribution: 'Mengembangkan logika backend untuk memfasilitasi proses pengajuan dan persetujuan perjalanan dinas berjenjang.',
        techIcons: ['logos:laravel', 'logos:php']
      },
      {
        name: 'LPG Distribution Monitoring Dashboard',
        desc: 'Sistem dashboard admin terpusat untuk memantau penjualan dan pengiriman logistik industri gas (LPG).',
        contribution: 'Terlibat dalam pengembangan awal dan pemeliharaan lanjutan (maintenance) untuk pelacakan distribusi secara real-time.',
        techIcons: ['logos:laravel', 'logos:mysql']
      },
      {
        name: 'Aviation Vendor Helpdesk & Finance System',
        desc: 'Sistem operasional terpadu yang mencakup aplikasi helpdesk (absensi, penjadwalan shift, reporting) serta aplikasi pencatatan keuangan perusahaan.',
        contribution: 'Mengembangkan sistem manajemen helpdesk dan modul pencatatan arus keuangan operasional.',
        techIcons: ['logos:php', 'logos:laravel', 'logos:postgresql']
      },
      {
        name: 'Integrated Hotel Monitoring Dashboard',
        desc: 'Sistem dashboard admin untuk memantau pemesanan kamar dan layanan operasional hotel bintang 4.',
        contribution: 'Berkontribusi dalam pengembangan sistem pemantauan reservasi kamar dan manajemen layanan tamu.',
        techIcons: ['logos:laravel', 'logos:postgresql']
      },
      {
        name: 'Corporate Sales Call Management',
        desc: 'Sistem manajemen data pelanggan dan pelacakan aktivitas panggilan penjualan (sales call) B2B.',
        contribution: 'Membangun modul pengelolaan data klien dan perekaman jejak aktivitas telemarketing.',
        techIcons: ['logos:php', 'logos:mysql']
      },
      {
        name: 'Domestic Worker Agency Management',
        desc: 'Website admin khusus untuk mengelola pendataan penyewaan jasa Asisten Rumah Tangga (ART) dan sistem rekrutmen kandidat.',
        contribution: 'Membangun arsitektur database untuk memfilter, mencatat penyewaan, dan mencocokkan kualifikasi kandidat secara efisien.',
        techIcons: ['logos:laravel', 'logos:mysql']
      },
      {
        name: 'Umrah & Travel Booking Management',
        desc: 'Sistem manajemen agen perjalanan untuk mengelola layanan pendaftaran dan pemberangkatan ibadah Umrah.',
        contribution: 'Berkontribusi dalam pembuatan modul pendataan jamaah dan pengelolaan layanan pemesanan paket perjalanan.',
        techIcons: ['logos:laravel', 'logos:postgresql']
      },
      {
        name: 'Enterprise Internal Facility Management',
        desc: 'Sistem pemantauan (monitoring) fasilitas perusahaan yang mencakup pemeliharaan aset, keamanan, dan housekeeping gedung.',
        contribution: 'Terlibat dalam pengembangan lanjutan (feature updates) untuk optimalisasi pelaporan fasilitas internal.',
        techIcons: ['logos:php', 'logos:laravel']
      },
      {
        name: 'Service & Housekeeping Booking System',
        desc: 'Sistem dashboard admin untuk memantau dan mengelola pesanan jasa service AC serta layanan housekeeping harian.',
        contribution: 'Berkontribusi dalam pengembangan sistem manajemen pemesanan layanan dan penugasan teknisi secara terpusat.',
        techIcons: ['logos:php', 'logos:mysql']
      },
      {
        name: 'School Crew Management Dashboard',
        desc: 'Sistem pendataan dan manajemen kehadiran (absensi) terpusat untuk kru atau staf operasional instansi pendidikan.',
        contribution: 'Mengembangkan fitur pendataan staf dan integrasi sistem pencatatan kehadiran.',
        techIcons: ['logos:laravel', 'logos:mysql']
      },
      {
        name: 'E-Commerce Bookstore Admin Dashboard',
        desc: 'Sistem manajemen konten dan transaksi (CMS) khusus untuk memantau penjualan serta inventaris buku komik.',
        contribution: 'Mengembangkan modul pemantauan stok produk dan manajemen transaksi penjualan pelanggan.',
        techIcons: ['logos:php', 'logos:laravel']
      },
      {
        name: 'Religious Event & Accommodation Booking',
        desc: 'Aplikasi reservasi tempat penginapan dan pengelolaan acara untuk kegiatan keagamaan berskala besar.',
        contribution: 'Mengembangkan sistem backend reservasi untuk mengelola penjadwalan acara dan ketersediaan kapasitas ruangan.',
        techIcons: ['logos:laravel', 'logos:postgresql']
      },
      {
        name: 'Wedding Organizer Management System',
        desc: 'Sistem informasi manajemen untuk mengelola data acara, jadwal vendor, dan kebutuhan operasional wedding organizer.',
        contribution: 'Melakukan pengembangan lanjutan (maintenance & upgrades) untuk modul pengelolaan data klien dan acara pernikahan.',
        techIcons: ['logos:php', 'logos:mysql']
      },
      {
        name: 'Savings & Loan Cooperative Admin',
        desc: 'Sistem pemantauan data keanggotaan dan siklus peminjaman untuk Koperasi Simpan Pinjam (KSP).',
        contribution: 'Mengembangkan fitur pemantauan profil anggota dan kalkulasi manajemen pinjaman koperasi.',
        techIcons: ['logos:laravel', 'logos:php']
      }
    ]
  },
  {
    slug: 'framadhita-eka',
    name: 'Framadhita Eka Ramdhani',
    role: 'Lead Frontend Engineer',
    title: 'Founder \n Chief Technology Officer',
    location: 'Kabupaten Bandung, Jawa Barat',
    education: 'S1 Teknik Informatika',
    image: '/frama.jpg',
    quote: 'Pengalaman pengguna yang luar biasa lahir dari kode yang bersih dan desain yang empatik.',
    experience: '3+ Tahun', 
    specialization: [
      'Frontend Architecture', 
      'UI/UX Integration', 
      'SPA Development', 
      'Interactive Dashboards'
    ],
    masteredTech: [
      'logos:javascript', 
      'logos:react', 
      'logos:nextjs-icon', 
      'logos:vue', 
      'logos:nuxt-icon',
      'logos:tailwindcss-icon', 
      'logos:vitejs'
    ],
    projects: [
      {
        name: 'SaaS Digital Invitation Maker',
        desc: 'Platform pembuatan undangan digital mandiri yang memungkinkan pengguna membuat undangan kustom dalam hitungan menit.',
        contribution: 'Merancang keseluruhan desain antarmuka website dan mengembangkan berbagai macam variasi tema undangan yang dinamis.',
        techIcons: ['logos:nextjs-icon', 'logos:react', 'logos:tailwindcss-icon'] 
      },
      {
        name: 'Hospitality Direct Booking Engine',
        desc: 'Sistem pemesanan kamar hotel (direct booking) kustom untuk memaksimalkan reservasi langsung tamu dan acara (MICE).',
        contribution: 'Membangun kalender interaktif dan mengimplementasikan logika frontend untuk kalkulasi harga dinamis, penerapan promo, serta add-ons fasilitas.',
        techIcons: ['logos:nextjs-icon', 'logos:react']
      },
      {
        name: 'Corporate Cost Control & Financial',
        desc: 'Aplikasi manajemen finansial untuk memantau arus kas, pendanaan, dan persetujuan (approval) dana operasional perusahaan.',
        contribution: 'Mengembangkan antarmuka tabel data berkapasitas besar dan fitur visualisasi laporan keuangan interaktif (charting) bagi manajemen.',
        techIcons: ['logos:nextjs-icon', 'logos:react']
      },
      {
        name: 'Food Court Point of Sale (POS)',
        desc: 'Sistem kasir (POS) terpusat untuk manajemen pesanan, variasi menu, dan transaksi real-time di lingkungan food court.',
        contribution: 'Mengelola state management kompleks untuk keranjang belanja (cart) dan membangun antarmuka kasir yang super responsif dan intuitif.',
        techIcons: ['logos:nextjs-icon', 'logos:react']
      },
      {
        name: 'Manufacturing CRM & Sales Call',
        desc: 'Platform CRM khusus industri manufaktur distribusi untuk melacak aktivitas sales dan manajemen katalog produk (PIM) yang kompleks.',
        contribution: 'Mengembangkan antarmuka input pesanan spesifik dan modul katalog untuk menangani ratusan variasi produk industri (warna, tipe, ukuran) secara dinamis.',
        techIcons: ['logos:nextjs-icon', 'logos:react']
      },
      {
        name: 'Enterprise Helpdesk & Operations',
        desc: 'Platform terpadu untuk manajemen tiket bantuan (helpdesk), pemeliharaan, dan operasional teknisi perusahaan.',
        contribution: 'Membangun sistem tiket berbasis kanban/kalender dan dashboard interaktif untuk memantau status resolusi pemeliharaan aset.',
        techIcons: ['logos:nextjs-icon', 'logos:react']
      },
      {
        name: 'LPG Distributor Sales Tracker',
        desc: 'Aplikasi web manajemen aktivitas tim sales lapangan untuk perusahaan distributor logistik gas.',
        contribution: 'Merancang dashboard pemantauan tugas dan membangun form pencatatan dinamis dengan fokus pada performa serta UX responsif di berbagai perangkat.',
        techIcons: ['logos:vue', 'logos:nuxt-icon']
      },
      {
        name: 'Umrah & Travel Booking Platform',
        desc: 'Platform booking komprehensif untuk layanan perjalanan wisata dan ibadah (Haji/Umrah).',
        contribution: 'Membangun UI interaktif untuk pencarian paket, mengimplementasikan alur checkout, dan mengoptimalkan SEO serta performa rendering halaman.',
        techIcons: ['logos:nextjs-icon', 'logos:react']
      },
      {
        name: 'Private Hospital & Clinic Portal',
        desc: 'Website komprehensif berfokus pada pengalaman pasien, mencakup pelacakan rawat inap/jalan dan janji temu online.',
        contribution: 'Membangun antarmuka frontend terintegrasi dengan CMS untuk memfasilitasi kebutuhan layanan kesehatan digital.',
        techIcons: ['logos:nextjs-icon', 'logos:react']
      },
      {
        name: 'Religious Facility & Asset Management',
        desc: 'Sistem manajemen aset dan penjadwalan internal untuk mendukung operasional fasilitas keagamaan.',
        contribution: 'Mengembangkan antarmuka dashboard pelacakan aset secara real-time dan merancang form sistem penjadwalan (booking) ruangan.',
        techIcons: ['logos:laravel', 'logos:php']
      },
      {
        name: 'Legal Services Apps CMS',
        desc: 'Sistem manajemen konten terpusat untuk aplikasi layanan konsultasi hukum.',
        contribution: 'Membangun modul open case, emergency contact, memperbarui modul media sosial, dan fitur export/import data.',
        techIcons: ['logos:react', 'logos:vitejs']
      },
      {
        name: 'Corporate Management Dashboard',
        desc: 'Sistem manajemen internal dan request perusahaan menggunakan ekosistem React Vite.',
        contribution: 'Berkontribusi membangun komponen dashboard utama, modul permintaan proyek (project request), dan modul permintaan pembelian.',
        techIcons: ['logos:react', 'logos:vitejs']
      },
      {
        name: 'Enterprise Delivery & Duty System',
        desc: 'Sistem pendataan operasional dan pengiriman barang untuk perusahaan distribusi.',
        contribution: 'Terlibat penuh dalam pengembangan antarmuka modul penugasan (duty) dan modul pengiriman (delivery).',
        techIcons: ['logos:laravel', 'logos:react']
      },
      {
        name: 'Publisher Payment Checkout System',
        desc: 'Sistem e-commerce dan halaman pembayaran untuk perusahaan penerbitan.',
        contribution: 'Membangun halaman checkout yang terintegrasi dengan payment gateway Xendit dan modul FAQ.',
        techIcons: ['logos:alpinejs-icon', 'logos:tailwindcss-icon']
      },
      {
        name: 'Savings & Loan Cooperative CMS',
        desc: 'Sistem manajemen aplikasi Koperasi Simpan Pinjam (KSP) menggunakan Laravel Blade.',
        contribution: 'Berkontribusi membangun modul Laporan Bulanan (Monthly Report) beserta sub-modulnya untuk pengelolaan data koperasi.',
        techIcons: ['logos:laravel', 'logos:php']
      }
    ]
  }
];

const member = computed(() => teamDB.find(m => m.slug === route.params.slug));
const goBack = () => router.back();

const openProject = ref(null);
const toggleProject = (index) => {
  openProject.value = openProject.value === index ? null : index;
};
</script>

<template>
  <div class="bg-[#F7F9FA] min-h-screen py-10 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <button @click="goBack" class="inline-flex items-center gap-2 text-nexavira-secondary hover:text-nexavira-primary transition-colors mb-6 font-bold text-sm uppercase tracking-widest">
        <ArrowLeft :size="16" /> Kembali ke Tentang Kami
      </button>

      <template v-if="member">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div class="lg:col-span-4 lg:sticky lg:top-24 space-y-6 max-h-[calc(100vh-6rem)] overflow-y-auto hide-scrollbar">
            
            <div class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-64 h-64 bg-nexavira-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              
              <div class="relative z-10 text-center md:text-left">
                <div class="flex flex-col xl:flex-row items-center xl:items-start gap-4 mb-5" @contextmenu.prevent @dragstart.prevent @selectstart.prevent>
                  <img :src="member.image" :alt="member.name" class="w-24 h-24 lg:w-28 lg:h-28 rounded-[1.5rem] object-cover shadow-lg ring-4 ring-nexavira-primary/5 shrink-0 select-none"
                    draggable="false"
                  />
                  <div class="flex-1 mt-3 xl:mt-0">
                    <span class="text-nexavira-secondary font-bold text-[10px] uppercase tracking-[0.2em] mb-1 block whitespace-pre-line">{{ member.title }}</span>
                    <h1 class="text-xl font-extrabold text-nexavira-primary leading-tight mb-1">{{ member.name }}</h1>
                    <p class="text-xs text-nexavira-slate/80 font-medium italic">{{ member.role }}</p>
                  </div>
                </div>

                <div class="flex flex-col gap-2 mb-5 text-xs font-bold text-nexavira-slate">
                  <span class="flex items-center gap-2 bg-gray-50 px-3 py-2.5 rounded-xl">
                    <GraduationCap :size="16" class="text-nexavira-secondary shrink-0" /> {{ member.education }}
                  </span>
                  <span class="flex items-center gap-2 bg-gray-50 px-3 py-2.5 rounded-xl">
                    <MapPin :size="16" class="text-nexavira-secondary shrink-0" /> {{ member.location }}
                  </span>
                </div>

                <div class="pt-5 border-t border-gray-100">
                  <div class="flex gap-3 mb-5 text-nexavira-primary/80 italic text-xs font-medium leading-relaxed bg-nexavira-primary/5 p-4 rounded-xl border-l-4 border-nexavira-primary">
                    <Quote :size="16" class="shrink-0 text-nexavira-primary opacity-50" />
                    <p>"{{ member.quote }}"</p>
                  </div>
                  
                  <div class="space-y-5">
                    <div>
                      <span class="text-[10px] font-bold text-nexavira-slate uppercase tracking-widest mb-1 flex items-center gap-1.5 justify-center md:justify-start">
                        <Calendar :size="14" class="text-nexavira-secondary" /> Pengalaman Industri
                      </span>
                      <p class="text-nexavira-primary font-black text-lg text-center md:text-left">{{ member.experience }}</p>
                    </div>

                    <div>
                      <span class="text-[10px] font-bold text-nexavira-slate uppercase tracking-widest mb-2 flex items-center gap-1.5 justify-center md:justify-start">
                        <Target :size="14" class="text-nexavira-secondary" /> Spesialisasi
                      </span>
                      <div class="flex flex-wrap justify-center md:justify-start gap-1.5">
                        <span 
                          v-for="spec in member.specialization" 
                          :key="spec" 
                          class="px-2.5 py-1 bg-nexavira-secondary/10 text-nexavira-primary text-[11px] font-bold rounded-lg border border-nexavira-secondary/20"
                        >
                          {{ spec }}
                        </span>
                      </div>
                    </div>

                    <div class="pt-1">
                      <span class="text-[10px] font-bold text-nexavira-slate uppercase tracking-widest mb-2 flex items-center gap-1.5 justify-center md:justify-start">
                        <Code2 :size="14" class="text-nexavira-secondary" /> Teknologi Dikuasai
                      </span>
                      <div class="flex flex-wrap justify-center md:justify-start gap-2.5">
                        <div 
                          v-for="tech in member.masteredTech" 
                          :key="tech" 
                          class="bg-gray-50 border border-gray-100 p-2 rounded-xl shadow-sm hover:scale-110 transition-transform"
                        >
                          <Icon :icon="tech" width="20" height="20" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-8 space-y-8">
            <div class="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100">
              <h2 class="text-xl font-bold text-nexavira-primary mb-6 flex items-center gap-3 justify-center md:justify-start">
                <Briefcase class="text-nexavira-secondary" /> Rekam Jejak Proyek
              </h2>
              
              <div class="space-y-4">
                <div v-for="(proj, idx) in member.projects" :key="idx" class="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm" :class="{'ring-2 ring-nexavira-secondary/20 bg-gray-50': openProject === idx}">
                  
                  <button @click="toggleProject(idx)" class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors">
                    <div class="flex-1 pr-4">
                      <span class="font-bold text-nexavira-primary text-base md:text-lg block mb-1">{{ proj.name }}</span>
                      
                      <div class="flex items-center gap-3 mt-2" v-if="proj.techIcons && openProject !== idx">
                        <Icon v-for="icon in proj.techIcons" :key="icon" :icon="icon" width="18" class="drop-shadow-sm" />
                      </div>
                    </div>

                    <div class="shrink-0 bg-nexavira-primary/5 p-2 rounded-full">
                      <ChevronUp v-if="openProject === idx" :size="20" class="text-nexavira-secondary" />
                      <ChevronDown v-else :size="20" class="text-nexavira-slate" />
                    </div>
                  </button>
                  
                  <div v-show="openProject === idx" class="px-6 pb-6 bg-white border-t border-gray-100">
                    <div class="pt-5 space-y-5">
                      
                      <div>
                        <span class="text-[10px] font-bold text-nexavira-slate uppercase tracking-widest mb-1 block">Deskripsi Sistem</span>
                        <p class="text-nexavira-primary text-sm leading-relaxed">{{ proj.desc }}</p>
                      </div>
                      
                      <div class="bg-nexavira-secondary/10 p-4 rounded-xl border border-nexavira-secondary/20">
                        <span class="text-[10px] font-bold text-nexavira-secondary uppercase tracking-widest mb-1.5 block">Kontribusi Utama</span>
                        <p class="text-nexavira-primary font-medium text-sm leading-relaxed">{{ proj.contribution }}</p>
                      </div>

                      <div v-if="proj.techIcons">
                        <span class="text-[10px] font-bold text-nexavira-slate uppercase tracking-widest mb-2.5 block">Teknologi Digunakan</span>
                        <div class="flex flex-wrap gap-3">
                          <div v-for="icon in proj.techIcons" :key="icon" class="flex items-center justify-center bg-white border border-gray-100 p-2 rounded-xl shadow-sm hover:scale-110 transition-transform">
                            <Icon :icon="icon" width="24" height="24" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>

        </div>
      </template>

      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold text-nexavira-primary mb-4">Profil Tidak Ditemukan</h2>
        <button @click="goBack" class="px-6 py-3 bg-nexavira-primary text-white rounded-full font-bold">Kembali</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>