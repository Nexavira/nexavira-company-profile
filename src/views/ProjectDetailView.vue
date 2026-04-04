<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  ArrowLeft,
  Code2,
  Layers,
  CheckCircle2,
  MonitorSmartphone,
  Cpu,
} from "lucide-vue-next";
import { Icon } from "@iconify/vue";

const route = useRoute();
const router = useRouter();

const projectsDB = [
  // 1-10: SaaS, Healthcare, Public Sector, Education
  {
    slug: "saas-digital-invitation",
    title: "SaaS Digital Invitation Maker",
    category: "SaaS Platform",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Platform pembuatan undangan digital mandiri (self-service) berskala besar. Sistem ini memungkinkan ribuan pengguna untuk membuat, memodifikasi, dan membagikan undangan acara mereka secara real-time melalui antarmuka yang sangat responsif.",
    challenges:
      "Kebutuhan platform yang mampu me-render ratusan variasi tema desain secara dinamis tanpa mengorbankan kecepatan muat (load time) di sisi pengguna akhir.",
    solutions: [
      "Merancang arsitektur frontend menggunakan ekosistem Next.js untuk performa dan SEO yang optimal.",
      "Membangun engine kustomisasi tema dinamis dengan fungsionalitas live preview.",
      "Mengintegrasikan sistem dengan manajemen aset statis yang ringan dan cepat.",
    ],
    techIcons: ["logos:nextjs-icon", "logos:react", "logos:tailwindcss-icon"],
  },
  {
    slug: "private-hospital-portal",
    title: "Private Hospital Portal",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1538108149393-cebb47ac7924?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Portal web interaktif untuk fasilitas layanan kesehatan (Rumah Sakit dan Klinik). Berfokus penuh pada peningkatan pengalaman pengguna (UX) pasien untuk kebutuhan janji temu online dan pelacakan status rawat inap/jalan.",
    challenges:
      "Antarmuka antrian pada sistem terdahulu terasa kaku dan sulit digunakan oleh pasien lanjut usia untuk melakukan booking secara mandiri.",
    solutions: [
      "Merombak total arsitektur frontend dengan pendekatan User-Centered Design.",
      "Membangun alur booking antrian yang interaktif, jelas, dan mudah dipahami oleh semua kalangan usia.",
      "Mengintegrasikan platform dengan Core API sistem Rumah Sakit untuk sinkronisasi ketersediaan jadwal dokter secara live.",
    ],
    techIcons: ["logos:nextjs-icon", "logos:react", "logos:tailwindcss-icon"],
  },
  {
    slug: "egov-asset-management",
    title: "E-Government Asset Management",
    category: "Public Sector",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Platform e-government untuk mengelola dokumen Rencana Kebutuhan Barang Milik Daerah (RKBMD) dan RKPBMD. Sistem ini mendigitalisasi alur birokrasi dan menjaga rekam jejak setiap aset milik instansi pemerintah daerah.",
    challenges:
      "Proses pengajuan dan persetujuan aset masih menggunakan dokumen fisik yang memakan waktu panjang, sulit dilacak, dan rentan terhadap kehilangan riwayat data.",
    solutions: [
      "Mendigitalisasi formulir pengajuan kebutuhan barang dan pemeliharaan dengan validasi input.",
      "Membangun logika backend untuk sistem persetujuan (approval) berjenjang yang ketat sesuai struktur birokrasi instansi.",
      "Mengimplementasikan sistem audit trail untuk melacak secara persis siapa yang menyetujui atau menolak dokumen.",
    ],
    techIcons: ["logos:php", "logos:laravel", "logos:mysql"],
  },
  {
    slug: "egov-sppd",
    title: "E-Gov Travel Order System (SPPD)",
    category: "Public Sector",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Aplikasi terpadu untuk pengelolaan dokumen Surat Perintah Perjalanan Dinas (SPPD) di lingkungan Sekretariat Daerah, mengubah proses persuratan konvensional menjadi digitalisasi penuh.",
    challenges:
      "Manajemen birokrasi membutuhkan sistem persetujuan lintas divisi yang transparan serta pencatatan anggaran perjalanan yang sangat presisi.",
    solutions: [
      "Mengembangkan logika backend hierarkis untuk memfasilitasi proses pengajuan, telaah, hingga persetujuan pejabat berwenang.",
      "Membangun modul kalkulasi otomatis untuk menghitung estimasi biaya perjalanan berdasarkan regulasi standar biaya daerah.",
      "Menyediakan fitur export dan pencetakan dokumen legal dengan format baku pemerintahan.",
    ],
    techIcons: ["logos:php", "logos:laravel", "logos:mysql"],
  },
  {
    slug: "international-training-system",
    title: "International Training Management",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem ERP spesifik yang dirancang untuk mengelola penjadwalan kursus, pelatih (trainer), dan peserta berskala internasional. Sistem ini mengubah proses administratif yang berat menjadi sistem terotomasi penuh.",
    challenges:
      "Klien menghadapi kesulitan besar mengatur ribuan jadwal kursus pelatihan teknis yang tumpang tindih dengan ketersediaan instruktur di berbagai wilayah.",
    solutions: [
      "Membangun algoritma backend untuk mencegah bentrok jadwal (anti-clash) berbasis pemetaan kalender.",
      "Membuat modul manajemen sumber daya yang cerdas untuk mencocokkan kualifikasi trainer dengan mata kursus yang diminta.",
      "Membangun fitur otomatisasi pembuatan laporan rekapitulasi dinamis dan e-certificate (Excel/PDF).",
    ],
    techIcons: ["logos:php", "logos:laravel", "logos:postgresql"],
  },
  {
    slug: "school-crew-management",
    title: "School Crew Management Dashboard",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem pendataan dan manajemen kehadiran (absensi) terpusat untuk kru atau staf operasional di sebuah instansi pendidikan.",
    challenges:
      "Pencatatan kehadiran staf masih dilakukan secara manual atau semi-digital, menyulitkan rekapitulasi jam kerja untuk keperluan penggajian.",
    solutions: [
      "Membangun dashboard admin untuk memantau jam kehadiran staf secara real-time.",
      "Mengembangkan API untuk mengintegrasikan data dari mesin absensi/aplikasi pencatat waktu ke server pusat.",
      "Membuat modul pelaporan otomatis untuk rekap jam kerja bulanan.",
    ],
    techIcons: ["logos:laravel", "logos:mysql", "logos:php"],
  },

  // 11-20: Logistics, Hospitality, Finance
  {
    slug: "distribution-dashboard",
    title: "LPG Distribution Dashboard",
    category: "Logistics & Industrial",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8ed7fc51f7?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem monitoring logistik dan dashboard admin terpusat untuk memantau penjualan serta pengiriman produk gas industri (LPG) secara real-time dari titik pangkalan ke berbagai keagenan.",
    challenges:
      "Manajemen tidak memiliki visibilitas data secara real-time mengenai posisi pengiriman dan volume penjualan harian armada logistik lapangan.",
    solutions: [
      "Membuat sistem pelacakan status pengiriman berjenjang yang mudah diperbarui oleh armada.",
      "Membangun dashboard analitik untuk menyajikan metrik volume distribusi harian secara terpusat.",
      "Mengembangkan arsitektur API yang stabil untuk memastikan kelancaran integrasi data dari aplikasi tim lapangan ke server pusat.",
    ],
    techIcons: ["logos:vue", "logos:nuxt-icon", "logos:php", "logos:laravel"],
  },
  {
    slug: "manufacturing-crm",
    title: "Manufacturing CRM & Sales Tracker",
    category: "Logistics & Industrial",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Platform CRM canggih khusus industri manufaktur/distribusi untuk melacak seluruh siklus aktivitas sales lapangan dan menyediakan manajemen katalog produk yang mendalam.",
    challenges:
      "Klien memiliki ratusan ribu kombinasi produk (warna dasar, kode warna spesifik, ukuran kemasan, tipe produk) yang sulit dikelola dalam form pesanan standar.",
    solutions: [
      "Membangun modul Product Information Management (PIM) yang kompleks namun mudah dikelola oleh admin.",
      "Mengembangkan form input pesanan cerdas (cascading dropdowns) yang memandu sales menemukan varian produk secara spesifik di lapangan.",
      "Menyediakan dashboard pelacakan target konversi kunjungan sales harian.",
    ],
    techIcons: [
      "logos:nextjs-icon",
      "logos:react",
      "logos:laravel",
      "logos:mysql",
    ],
  },
  {
    slug: "enterprise-delivery",
    title: "Enterprise Delivery & Duty System",
    category: "Logistics & Industrial",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem pendataan operasional logistik perusahaan yang mengatur modul penugasan kurir secara dinamis dan melacak status pengiriman barang dari gudang hingga ke tangan klien.",
    challenges:
      "Penugasan pengiriman sering kali tumpang tindih dan admin kesulitan melacak posisi kurir yang sedang bertugas.",
    solutions: [
      "Merancang antarmuka modul penugasan (duty) dengan sistem drag-and-drop/assign yang intuitif bagi admin.",
      "Mengembangkan arsitektur backend untuk memperbarui status pengiriman secara real-time via API.",
      "Membangun sistem notifikasi bagi kurir ketika ada penugasan pengiriman baru.",
    ],
    techIcons: ["logos:react", "logos:laravel", "logos:mysql"],
  },
  {
    slug: "integrated-crm-hotel",
    title: "Integrated CRM & Sales Hotel",
    category: "Hospitality & Travel",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c6658428?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem CRM end-to-end khusus untuk manajemen siklus penjualan hotel. Sistem ini memusatkan seluruh interaksi klien B2B, mulai dari pencatatan aktivitas telemarketing hingga penerbitan dokumen operasional resmi seperti BEO.",
    challenges:
      "Data klien yang tersebar menyulitkan manajemen dalam melacak konversi, pipeline penawaran, dan mengukur kinerja tim sales secara akurat.",
    solutions: [
      "Membangun arsitektur database terpusat yang aman untuk menyimpan data puluhan ribu pelanggan.",
      "Membuat dashboard visualisasi data interaktif untuk melacak pipeline penjualan secara real-time.",
      "Melakukan otomatisasi pembuatan dokumen offering letter PDF dan integrasi notifikasi otomatis via WhatsApp.",
    ],
    techIcons: ["logos:php", "logos:laravel", "logos:postgresql"],
  },
  {
    slug: "hotel-booking-engine",
    title: "Hospitality Direct Booking Engine",
    category: "Hospitality & Travel",
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem pemesanan kamar hotel khusus (direct booking engine) untuk memaksimalkan reservasi tamu secara langsung tanpa bergantung pada pihak ketiga (OTA), menghemat biaya komisi hotel.",
    challenges:
      "Kebutuhan kalkulasi harga yang dinamis (dynamic pricing) berdasarkan musim liburan, penerapan promo voucher, dan penambahan fasilitas ekstra (add-ons).",
    solutions: [
      "Membangun antarmuka kalender interaktif untuk pengecekan ketersediaan kamar secara live.",
      "Mengimplementasikan state management yang rumit di frontend untuk memastikan harga di-update seketika saat tamu mengubah opsi.",
      "Merancang alur pemesanan untuk acara khusus/meeting room beserta integrasi checkout pembayarannya.",
    ],
    techIcons: [
      "logos:nextjs-icon",
      "logos:react",
      "logos:php",
      "logos:laravel",
    ],
  },
  {
    slug: "hotel-core-admin",
    title: "Hospitality Core Admin Dashboard",
    category: "Hospitality & Travel",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Website dashboard admin utama (core system) untuk pemantauan menyeluruh seluruh aktivitas hotel, mulai dari reservasi kamar, alokasi kamar (room assignment), hingga manajemen fasilitas.",
    challenges:
      "Sistem sebelumnya menggunakan perangkat lunak desktop yang kaku dan tidak bisa diakses oleh manajemen saat berada di luar area hotel.",
    solutions: [
      "Memigrasikan logika sistem desktop menjadi aplikasi web-based yang aman dan responsif.",
      "Membuat modul manajemen pengguna dengan tingkat otorisasi (Role-Based Access Control) yang sangat ketat.",
      "Merancang arsitektur database untuk memetakan status setiap ruangan di hotel secara presisi.",
    ],
    techIcons: ["logos:jira", "logos:laravel", "logos:postgresql"],
  },
  {
    slug: "qr-room-service",
    title: "QR-Based Room Service System",
    category: "Hospitality & Travel",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem pemesanan interaktif yang merombak cara tamu memesan makanan dan layanan kamar. Tamu cukup memindai QR Code dari dalam kamar untuk melihat menu digital dan melakukan order.",
    challenges:
      "Proses pemesanan via telepon kamar sering kali menyebabkan antrian pada saluran operator dan ketidakakuratan pencatatan pesanan ke pihak dapur.",
    solutions: [
      "Mengembangkan antarmuka digital menu yang sangat ringan untuk diakses dari smartphone tamu tanpa instalasi aplikasi.",
      "Membangun sistem pemrosesan pesanan real-time dari perangkat tamu langsung menuju display tablet di area dapur (kitchen) dan front office.",
      "Menyediakan fitur update status pesanan live yang dapat dilihat oleh tamu.",
    ],
    techIcons: ["logos:php", "logos:laravel", "logos:mysql"],
  },
  {
    slug: "hotel-front-office",
    title: "Hotel Operational & Front Office",
    category: "Hospitality & Travel",
    image:
      "https://images.unsplash.com/photo-1582719478250-c894099f710d?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Platform terintegrasi khusus operasional internal hotel untuk mengoordinasikan tugas harian antar departemen (housekeeping, front office, dan engineering) serta penanganan keluhan tamu.",
    challenges:
      "Miskoordinasi antar departemen sering menyebabkan keluhan tamu lambat ditangani dan menurunkan tingkat kepuasan pelanggan.",
    solutions: [
      "Membangun sistem pelaporan (ticketing) internal untuk meneruskan request tamu (misal: tambahan handuk) ke departemen terkait dalam hitungan detik.",
      "Mengembangkan dashboard pantauan tugas harian bagi manajer operasional.",
      "Menyediakan API untuk integrasi dengan sistem core hotel.",
    ],
    techIcons: ["logos:php", "logos:laravel", "logos:mysql"],
  },
  {
    slug: "umrah-travel-booking",
    title: "Umrah & Travel Booking Platform",
    category: "Hospitality & Travel",
    image:
      "https://images.unsplash.com/photo-1565552645632-d725e8bfc19a?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem manajemen dan platform booking komprehensif bagi perusahaan agen perjalanan untuk memfasilitasi layanan pemesanan paket wisata, Haji, dan Umrah kepada masyarakat luas.",
    challenges:
      "Klien membutuhkan platform customer-facing yang elegan dengan SEO yang kuat, sekaligus panel admin yang sanggup mengelola ribuan data manifes jamaah penerbangan.",
    solutions: [
      "Membangun etalase pencarian paket perjalanan (Search Engine) yang dinamis menggunakan Next.js untuk performa prima.",
      "Mengimplementasikan alur pendaftaran dan checkout multi-jamaah dalam satu transaksi yang intuitif.",
      "Membangun sistem backend untuk manajemen ketersediaan seat penerbangan dan alokasi kamar hotel di negara tujuan.",
    ],
    techIcons: [
      "logos:nextjs-icon",
      "logos:react",
      "logos:laravel",
      "logos:postgresql",
    ],
  },

  // 21-29: Finance, E-Commerce, Enterprise & SaaS
  {
    slug: "corporate-cost-control",
    title: "Corporate Cost Control Financial",
    category: "Finance",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Aplikasi manajemen finansial tingkat korporasi untuk memantau pergerakan arus kas, struktur pendanaan, dan alur persetujuan (approval) pencairan dana operasional perusahaan.",
    challenges:
      "Kebutuhan akan platform web yang tangguh untuk memproses kalkulasi dan merender tabel data finansial berkapasitas besar tanpa mengalami lag.",
    solutions: [
      "Merancang arsitektur database yang efisien untuk proses agregasi data keuangan.",
      "Mengembangkan logika frontend khusus untuk rendering tabel virtual yang menampung ribuan baris mutasi kas.",
      "Membangun alur persetujuan (approval flow) multi-layer dengan rekam jejak digital yang tidak dapat direkayasa.",
    ],
    techIcons: [
      "logos:nextjs-icon",
      "logos:react",
      "logos:laravel",
      "logos:postgresql",
    ],
  },
  {
    slug: "cooperative-cms",
    title: "Savings & Loan Cooperative (KSP)",
    category: "Finance",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem informasi manajemen finansial khusus entitas Koperasi Simpan Pinjam (KSP) untuk mengatur seluruh data profil keanggotaan dan merekam siklus transaksi.",
    challenges:
      "Kebutuhan kalkulasi bunga pinjaman, bagi hasil (SHU), dan pengelolaan setoran wajib yang tidak mentolerir kesalahan sekecil apa pun.",
    solutions: [
      "Membuat sistem profil anggota yang mencatat riwayat lengkap simpanan pokok, wajib, dan sukarela.",
      "Mengembangkan engine kalkulator pinjaman untuk menghitung simulasi cicilan, tenor, dan perhitungan denda keterlambatan.",
      "Membangun generator laporan tutup buku bulanan dan tahunan secara presisi untuk audit manajemen.",
    ],
    techIcons: ["logos:laravel", "logos:php", "logos:mysql"],
  },
  {
    slug: "hotel-revenue-dashboard",
    title: "Hospitality Revenue Dashboard",
    category: "Finance",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Dashboard interaktif berbasis web untuk manajemen atas hotel, yang berfungsi memvisualisasikan data pendapatan harian/bulanan (Revenue) dan tingkat hunian (Occupancy Rate).",
    challenges:
      "Membaca laporan keuangan dari tabel konvensional memakan waktu, sehingga keputusan strategis penentuan harga kamar sering terlambat.",
    solutions: [
      "Membangun antarmuka visualisasi data yang kaya (grafik bar, pie, dan line chart) menggunakan pustaka chart di React.",
      "Mengintegrasikan frontend dengan API keuangan untuk menyajikan matrik bisnis secara real-time.",
      "Menyediakan fitur export report finansial.",
    ],
    techIcons: ["logos:react", "logos:javascript", "logos:tailwindcss-icon"],
  },
  {
    slug: "food-court-pos",
    title: "Food Court POS System",
    category: "E-Commerce & Retail",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem Kasir (Point of Sale) web terpusat yang dirancang khusus untuk manajemen pesanan, kontrol variasi menu, dan perekaman transaksi real-time di lingkungan food court (pujasera) rest area.",
    challenges:
      "Operator kasir membutuhkan antarmuka yang sangat responsif (zero-latency) saat jam sibuk dan sistem harus bisa menangani state cart (keranjang) yang rumit.",
    solutions: [
      "Mengoptimalkan state management di sisi frontend untuk menangani modifikasi pesanan dan kalkulasi harga secara instan.",
      "Membangun antarmuka POS yang dioptimalkan untuk perangkat layar sentuh dengan layout yang ergonomis.",
      "Mengintegrasikan sistem langsung ke perangkat pencetakan struk (thermal printer) dan pembukuan stok bahan baku.",
    ],
    techIcons: [
      "logos:nextjs-icon",
      "logos:react",
      "logos:laravel",
      "logos:mysql",
    ],
  },
  {
    slug: "ecommerce-bookstore",
    title: "E-Commerce Bookstore Admin",
    category: "E-Commerce & Retail",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem manajemen operasional (CMS backend) di balik toko buku dan komik online. Mengatur manajemen katalog buku, pemantauan lalu lintas transaksi pelanggan, hingga pelacakan inventaris gudang.",
    challenges:
      "Memastikan stok yang ada di gudang fisik sinkron secara akurat dengan angka ketersediaan stok yang ditampilkan di website pelanggan.",
    solutions: [
      "Mengembangkan logika pengurangan stok berbayang (soft-booking) ketika item masuk ke keranjang belanja pelanggan.",
      "Membangun modul pemantauan status transaksi mulai dari pembayaran hingga nomor resi pengiriman.",
      "Membuat sistem manajemen produk berskala besar untuk input massal (bulk upload) data buku baru.",
    ],
    techIcons: ["logos:php", "logos:laravel", "logos:mysql"],
  },
  {
    slug: "publisher-checkout",
    title: "Publisher Payment Checkout",
    category: "E-Commerce & Retail",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Ekosistem e-commerce dan halaman pembayaran digital terintegrasi yang dibangun khusus untuk sebuah perusahaan penerbitan buku (Publisher).",
    challenges:
      "Klien belum memiliki infrastruktur pembayaran non-tunai (cashless/virtual account) yang terotomatisasi, sehingga konfirmasi bayar dilakukan secara manual.",
    solutions: [
      "Membangun halaman checkout yang super cepat dan responsif menggunakan framework ringan.",
      "Melakukan integrasi API dengan Payment Gateway (Xendit) untuk pembuatan Virtual Account dan E-Wallet secara otomatis.",
      "Membuat webhook listener untuk memperbarui status pesanan seketika setelah pembayaran terdeteksi oleh bank.",
    ],
    techIcons: ["logos:alpinejs-icon", "logos:tailwindcss-icon", "logos:php"],
  },
  {
    slug: "aviation-vendor-helpdesk",
    title: "Aviation Vendor Helpdesk",
    category: "Enterprise & SaaS",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Platform terpadu untuk manajemen tiket bantuan (helpdesk) dan operasional teknisi perusahaan vendor penyedia layanan infrastruktur penerbangan/bandara.",
    challenges:
      "Keterlambatan respons pemeliharaan akibat pelaporan insiden yang tidak terpusat dan sulitnya melacak riwayat penanganan teknisi lapangan.",
    solutions: [
      "Membangun sistem tiket berbasis kanban/kalender untuk melacak alur pengerjaan laporan kerusakan.",
      "Mengimplementasikan modul manajemen stok spare part yang terhubung langsung dengan alur penugasan teknisi.",
      "Membuat dashboard notifikasi otomatis (Email/WhatsApp) untuk pembaruan status resolusi tiket bagi pelapor.",
    ],
    techIcons: [
      "logos:nextjs-icon",
      "logos:react",
      "logos:laravel",
      "logos:postgresql",
    ],
  },
  {
    slug: "facility-management",
    title: "Enterprise Facility Management",
    category: "Enterprise & SaaS",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Platform terintegrasi untuk pemantauan fasilitas, penjadwalan pemeliharaan aset internal, keamanan gedung, serta pemesanan layanan housekeeping rutin.",
    challenges:
      "Operasional perusahaan skala besar sering terhambat akibat bentrok jadwal pemakaian fasilitas ruangan atau pelaporan kerusakan aset yang lambat ditangani.",
    solutions: [
      "Membangun sistem penjadwalan terpusat (booking engine internal) untuk melacak ketersediaan dan peminjaman fasilitas.",
      "Mengembangkan modul ticketing pelaporan kerusakan (maintenance request) dari tiap divisi.",
      "Membuat antarmuka monitoring penjadwalan housekeeping harian beserta status penyelesaiannya.",
    ],
    techIcons: ["logos:php", "logos:laravel", "logos:mysql"],
  },
  {
    slug: "worker-agency",
    title: "Domestic Worker Agency System",
    category: "Enterprise & SaaS",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Platform manajemen agensi tenaga kerja (outsourcing) yang bertugas mengelola penyaluran, penyewaan jasa Asisten Rumah Tangga (ART), serta menyaring rekrutmen kandidat secara terpusat.",
    challenges:
      "Kesulitan dalam menyaring dan mencocokkan kualifikasi (skill set) kandidat pekerja dengan permintaan kriteria yang sangat spesifik dari calon penyewa.",
    solutions: [
      "Membangun arsitektur database relasional yang kuat untuk menyimpan profil pelamar, sertifikasi, dan riwayat pekerjaan.",
      "Mengembangkan algoritma penyaringan (filtering) dan pencocokan cerdas untuk mempercepat kerja admin dalam menawarkan kandidat.",
      "Membangun modul manajemen kontrak penyewaan dan pengingat masa berlaku garansi penggantian pekerja.",
    ],
    techIcons: ["logos:laravel", "logos:php", "logos:mysql"],
  },
  {
    slug: "legal-services-cms",
    title: "Legal Services Apps CMS",
    category: "Enterprise & SaaS",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem manajemen konten terpusat (CMS) canggih yang berada di balik aplikasi mobile layanan konsultasi bantuan hukum bagi masyarakat.",
    challenges:
      "Kebutuhan untuk menyajikan informasi yang sangat tertata terkait kategori kasus hukum dan alur pendaftaran perkara (open case) secara digital.",
    solutions: [
      "Membangun antarmuka dashboard admin yang responsif menggunakan ekosistem React/Vite.",
      "Membuat modul manajemen kategori hukum, pengaturan kontak darurat (emergency contact), dan pembaruan artikel media sosial.",
      "Mengimplementasikan fitur ekspor/impor data massal berbasis spreadsheet (XLSX) untuk mempercepat manipulasi data hukum.",
    ],
    techIcons: ["logos:react", "logos:vitejs", "logos:tailwindcss-icon"],
  },
  {
    slug: "religious-event-booking",
    title: "Religious Event & Asset Booking",
    category: "Enterprise & SaaS",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem Manajemen Aset dan Penjadwalan internal untuk mendukung kelancaran proses kegiatan serta pengelolaan fasilitas di lingkup rumah ibadah (El Bethel).",
    challenges:
      "Sering terjadinya bentrok pemakaian ruangan atau ketidakjelasan logistik peralatan antar seksi kepanitiaan acara.",
    solutions: [
      "Membangun sistem kalender penjadwalan (booking) ruangan untuk memvalidasi ketersediaan fasilitas secara real-time.",
      "Mengembangkan dashboard pelacakan inventaris, pencatatan alat yang dipinjam, serta kondisinya.",
      "Menyediakan arsitektur backend yang stabil untuk mengamankan data pengguna internal.",
    ],
    techIcons: ["logos:laravel", "logos:php", "logos:postgresql"],
  },
  {
    slug: "service-housekeeping",
    title: "Service & Housekeeping Booking",
    category: "Enterprise & SaaS",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem pemesanan dan dashboard manajemen khusus untuk perusahaan penyedia jasa layanan pembersihan (housekeeping) dan perbaikan perangkat AC.",
    challenges:
      "Mengorkestrasi penugasan teknisi ke lokasi pelanggan secara efisien sesuai rute dan jadwal yang diminta.",
    solutions: [
      "Membangun antarmuka aplikasi pemesanan yang mudah digunakan oleh pelanggan akhir.",
      "Mengembangkan modul manajemen penugasan (dispatch) bagi admin untuk mengalokasikan pesanan ke teknisi terdekat.",
      "Menerapkan fitur update status pengerjaan (sedang dikerjakan/selesai) secara live.",
    ],
    techIcons: ["logos:php", "logos:mysql", "logos:bootstrap"],
  },
  {
    slug: "wedding-organizer",
    title: "Wedding Organizer Management",
    category: "Enterprise & SaaS",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem informasi manajemen terpadu untuk Wedding Organizer (WO). Sistem ini mengatur seluruh aspek acara pernikahan, dari database klien, hingga orkestrasi vendor pendukung (katering, dekorasi, dokumentasi).",
    challenges:
      "WO sering kewalahan melacak perubahan rencana acara (rundown) dan koordinasi pemesanan dengan puluhan vendor eksternal yang berbeda.",
    solutions: [
      "Membangun platform terpusat untuk menyimpan profil klien, kontrak, dan histori pembayaran secara aman.",
      "Membuat modul penjadwalan (timeline) untuk memastikan seluruh vendor memenuhi target tenggat waktu acara.",
      "Mengembangkan sistem pelaporan proyek pasca-acara.",
    ],
    techIcons: ["logos:php", "logos:mysql", "logos:javascript"],
  },
  {
    slug: "corporate-management",
    title: "Corporate Management Dashboard",
    category: "Enterprise & SaaS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem operasional internal korporat berbasis web untuk mendigitalisasi alur pengajuan, permintaan pengadaan barang, hingga permohonan eksekusi proyek lintas departemen.",
    challenges:
      "Birokrasi internal menggunakan dokumen fisik membuat proses persetujuan pembelian barang (purchase request) sangat lambat dan menghambat produktivitas.",
    solutions: [
      "Membangun antarmuka dashboard utama menggunakan ekosistem React Vite untuk akses yang super cepat.",
      "Mengembangkan modul Purchase Request (PR) dan Project Request dengan alur persetujuan (approval) digital berjenjang.",
      "Mengimplementasikan fitur tracking real-time untuk melihat dokumen sedang berada di meja direksi/manajer mana.",
    ],
    techIcons: ["logos:react", "logos:vitejs", "logos:tailwindcss-icon"],
  },
  // 30-32: AI & Intelligent Systems
  {
    slug: "agentic-rag-ai",
    title: "Nexavira Agentic RAG Assistant",
    category: "AI & Intelligent Systems",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Asisten AI Pintar yang menggabungkan kecerdasan membaca dokumen (RAG) dengan kemampuan bertindak mandiri (Agentic). Tidak hanya menjawab pertanyaan berdasarkan data internal perusahaan secara akurat, AI ini mampu mengeksekusi tugas—seperti mengecek database, memanggil API, atau menyelesaikan pesanan pelanggan.",
    challenges:
      "Banyak AI konvensional yang berhalusinasi (memberikan info salah) dan tidak bisa terhubung dengan sistem operasional nyata perusahaan.",
    solutions: [
      "Membangun Vector Database khusus (Private Knowledge Base) sehingga AI hanya menjawab berdasarkan SOP perusahaan Anda.",
      'Mengimplementasikan "Agentic Thinking" yang memungkinkan AI memutuskan kapan harus memanggil API eksternal untuk menyelesaikan tugas.',
      "Sistem keamanan data berlapis untuk memastikan dokumen sensitif perusahaan tidak bocor ke publik.",
    ],
    techIcons: [
      "logos:python",
      "logos:openai-icon",
      "logos:langchain-icon",
      "logos:pinecone-icon",
    ],
  },
  {
    slug: "ai-sales-negotiator",
    title: "AI Smart Sales Negotiation",
    category: "AI & Intelligent Systems",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem AI percakapan yang bertindak sebagai Sales Agent 24/7. Mampu menangani ribuan calon pembeli sekaligus, menjelaskan detail produk, hingga melakukan negosiasi harga sesuai batas toleransi yang ditentukan pemilik bisnis.",
    challenges:
      "Tim sales manusia memiliki keterbatasan waktu dan kecepatan respon, sementara chatbot kaku sering membuat pelanggan frustasi.",
    solutions: [
      "Natural Language Understanding (NLU) tingkat tinggi agar percakapan terasa manusiawi dan empatik.",
      "Integrasi dengan sistem stok (Inventory) untuk memberikan informasi ketersediaan barang secara real-time.",
      "Otomatisasi pembuatan invoice dan instruksi pembayaran tepat setelah negosiasi selesai.",
    ],
    techIcons: [
      "logos:python",
      "logos:google-cloud",
      "logos:whatsapp-icon",
      "logos:fastapi",
    ],
  },
  {
    slug: "ai-predictive-analytics",
    title: "Enterprise AI Predictive Analytics",
    category: "AI & Intelligent Systems",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    overview:
      "Sistem analisis data berbasis Machine Learning yang membantu perusahaan besar memprediksi apa yang akan terjadi di masa depan berdasarkan data historis, seperti tren permintaan pasar atau risiko kegagalan aset.",
    challenges:
      "Data yang melimpah namun tidak terolah membuat manajemen sering mengambil keputusan berdasarkan insting, bukan fakta data.",
    solutions: [
      "Membangun model Deep Learning untuk memproses data ribuan transaksi masa lalu.",
      "Dashboard visualisasi prediktif yang memberikan rekomendasi tindakan (Prescriptive Analytics).",
      "Early Warning System yang memberi notifikasi jika ada anomali atau potensi kerugian dalam operasional.",
    ],
    techIcons: [
      "logos:python",
      "logos:tensorflow",
      "logos:pytorch-icon",
      "logos:pandas-icon",
    ],
  },
];

const project = computed(() => {
  return projectsDB.find((p) => p.slug === route.params.slug);
});

const goBack = () => router.back();
</script>

<template>
  <div class="bg-[#F7F9FA] min-h-screen pb-24">
    <template v-if="project">
      <div
        class="relative h-[40vh] min-h-[400px] w-full bg-nexavira-primary overflow-hidden"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-nexavira-primary via-nexavira-primary/80 to-transparent"
        ></div>

        <div class="absolute inset-0 flex items-end pb-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button
              @click="goBack"
              class="inline-flex items-center gap-2 text-nexavira-secondary hover:text-white transition-colors mb-6 font-bold text-sm uppercase tracking-widest"
            >
              <ArrowLeft :size="16" /> Kembali ke Portofolio
            </button>
            <br />
            <span
              class="inline-block px-4 py-1.5 rounded-full bg-nexavira-secondary/20 text-nexavira-secondary border border-nexavira-secondary/30 text-[10px] font-bold uppercase tracking-widest mb-4"
            >
              {{ project.category }}
            </span>
            <h1
              class="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl"
            >
              {{ project.title }}
            </h1>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div class="lg:col-span-2 space-y-8 md:space-y-10">
            <div
              class="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100"
            >
              <h3
                class="text-2xl font-bold text-nexavira-primary mb-5 flex items-center gap-3"
              >
                <MonitorSmartphone class="text-nexavira-secondary" /> Gambaran
                Proyek
              </h3>
              <p class="text-nexavira-slate leading-relaxed text-lg">
                {{ project.overview }}
              </p>
            </div>

            <div
              class="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100"
            >
              <h3
                class="text-2xl font-bold text-nexavira-primary mb-6 flex items-center gap-3"
              >
                <Layers class="text-nexavira-secondary" /> Tantangan & Solusi
              </h3>

              <div
                class="bg-red-50/50 p-6 rounded-2xl border-l-4 border-red-400 mb-8"
              >
                <span
                  class="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-2"
                  >Tantangan Klien</span
                >
                <p class="text-red-900 font-medium">{{ project.challenges }}</p>
              </div>

              <div>
                <span
                  class="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block mb-4"
                  >Solusi Sistem yang Diberikan</span
                >
                <ul class="space-y-4">
                  <li
                    v-for="(sol, idx) in project.solutions"
                    :key="idx"
                    class="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors"
                  >
                    <CheckCircle2
                      class="text-emerald-500 shrink-0 mt-0.5"
                      :size="20"
                    />
                    <span class="text-nexavira-slate text-sm md:text-base">{{
                      sol
                    }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <div
              class="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 sticky top-24"
            >
              <h3
                class="text-xl font-bold text-nexavira-primary mb-6 flex items-center gap-3"
              >
                <Code2 class="text-nexavira-secondary" /> Teknologi Digunakan
              </h3>

              <div class="flex flex-wrap gap-3">
                <div
                  v-for="icon in project.techIcons"
                  :key="icon"
                  class="flex items-center justify-center bg-gray-50 border border-gray-100 p-3.5 rounded-2xl shadow-sm hover:scale-110 transition-transform cursor-pointer"
                >
                  <Icon :icon="icon" width="32" height="32" />
                </div>
              </div>

              <div
                class="mt-10 pt-8 border-t border-gray-100 text-center md:text-left"
              >
                <h4
                  class="text-xs font-bold text-nexavira-slate uppercase tracking-widest mb-4"
                >
                  Butuh sistem serupa?
                </h4>
                <router-link
                  to="/contact"
                  class="flex items-center justify-center gap-2 w-full bg-nexavira-primary hover:bg-nexavira-secondary text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-nexavira-primary/20 transform hover:-translate-y-1"
                >
                  Konsultasikan Proyek <Cpu :size="18" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div
      v-else
      class="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div
        class="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 max-w-md w-full"
      >
        <h2 class="text-3xl font-extrabold text-nexavira-primary mb-4">
          Proyek Tidak Ditemukan
        </h2>
        <p class="text-nexavira-slate mb-8 leading-relaxed">
          Maaf, detail proyek yang Anda cari belum tersedia atau URL tidak
          valid.
        </p>
        <button
          @click="goBack"
          class="px-8 py-3.5 bg-nexavira-primary hover:bg-nexavira-secondary text-white rounded-full font-bold transition-all w-full flex items-center justify-center gap-2"
        >
          <ArrowLeft :size="18" /> Kembali
        </button>
      </div>
    </div>
  </div>
</template>
