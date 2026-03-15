<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Autoplay } from 'swiper/modules';
  import { 
    Users, 
    Workflow, 
    Layers, 
    ArrowRight, 
    Quote,
    Globe, 
    Cpu, 
    BarChart3 
  } from 'lucide-vue-next';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  const modules = [Navigation, Pagination, Autoplay];

  // Data Layanan (Services)
  const services = [
    {
      title: 'Web Development',
      desc: 'Pembuatan website dinamis, company profile interaktif, hingga custom CMS yang mendukung multi-bahasa.',
      icon: Globe,
      colorClass: 'text-nexavira-secondary',
      hoverClass: 'group-hover:bg-nexavira-secondary',
      aos: 'fade-right'
    },
    {
      title: 'System Architecture',
      desc: 'Perancangan arsitektur database yang efisien dan pengembangan RESTful API yang aman untuk berbagai platform.',
      icon: Cpu,
      colorClass: 'text-nexavira-primary',
      hoverClass: 'group-hover:bg-nexavira-primary',
      aos: 'fade-up'
    },
    {
      title: 'Data Visualization',
      desc: 'Transformasi data menjadi dashboard interaktif yang mudah dipahami untuk membantu pengambilan keputusan strategis.',
      icon: BarChart3,
      colorClass: 'text-[#10b981]',
      hoverClass: 'group-hover:bg-[#10b981]',
      aos: 'fade-left'
    }
  ];

  const teamMembers = [
    {
      name: 'Dimas Agung Prasetyo',
      slug: 'dimas-agung-prasetyo',
      role: 'System Analyst & Backend Developer',
      title: 'Founder \n Chief Executive Officer',
      image: '/kucing1.jpg',
      quote: 'Analitik yang kuat dimulai dengan alat yang tepat dan rasa ingin tahu yang tinggi.',
      desc: 'Berpengalaman dalam menerjemahkan kebutuhan bisnis yang kompleks menjadi solusi teknis yang andal dan merancang arsitektur sistem berskala besar.'
    },
    {
      name: 'Pranesha Wahyu S. A',
      slug: 'pranesha-wahyu',
      role: 'Lead Backend Engineer',
      title: 'Founder \n Chief Technology Officer',
      image: '/kucing2.png',
      quote: 'Skalabilitas dan efisiensi logika server adalah fondasi dari setiap aplikasi yang hebat.',
      desc: 'Spesialis dalam pengembangan sistem manajemen terpusat, e-government, dan arsitektur database untuk operasional perusahaan lintas sektor.'
    },
    {
      name: 'Framadhita Eka Ramdhani',
      slug: 'framadhita-eka',
      role: 'Lead Frontend Engineer',
      title: 'Founder \n Chief Operating Officer',
      image: '/kucing3.png',
      quote: 'Pengalaman pengguna yang luar biasa lahir dari kode yang bersih dan desain yang empatik.',
      desc: 'Ahli dalam ekosistem React dan Next.js, berfokus pada transformasi visual menjadi antarmuka pengguna interaktif, intuitif, dan responsif.'
    }
  ];
</script>

<template>
  <div class="overflow-hidden">
    
    <section class="py-24 bg-white relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div data-aos="fade-up">
          <h2 class="text-nexavira-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
          <h1 class="text-4xl font-extrabold text-nexavira-primary sm:text-5xl mb-8 leading-tight">
            Lebih dari Sekadar <br> <span class="bg-clip-text text-transparent bg-gradient-to-r from-nexavira-primary to-nexavira-secondary">Baris Kode</span>
          </h1>
        </div>
        
        <p class="text-xl text-nexavira-slate leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="200">
          Di Nexavira System, kami mengadopsi pendekatan <strong class="text-nexavira-primary font-bold">"Tri-Core"</strong>: perpaduan antara <span class="text-nexavira-secondary font-semibold">Analisis</span> sistem yang tajam, <span class="text-nexavira-secondary font-semibold">Logika Backend</span> yang tangguh, dan <span class="text-nexavira-secondary font-semibold">Visual Frontend</span> yang intuitif.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-gray-100" data-aos="zoom-in" data-aos-delay="400">
          <div class="text-center flex flex-col items-center">
            <Users class="text-nexavira-secondary mb-2" :size="28" stroke-width="1.5" />
            <p class="text-3xl font-bold text-nexavira-primary">3+</p>
            <p class="text-xs text-nexavira-slate uppercase tracking-widest mt-1">Tech Experts</p>
          </div>
          <div class="text-center flex flex-col items-center">
            <Workflow class="text-nexavira-secondary mb-2" :size="28" stroke-width="1.5" />
            <p class="text-3xl font-bold text-nexavira-primary">Agile</p>
            <p class="text-xs text-nexavira-slate uppercase tracking-widest mt-1">Workflow</p>
          </div>
          <div class="text-center col-span-2 md:col-span-1 flex flex-col items-center">
            <Layers class="text-nexavira-secondary mb-2" :size="28" stroke-width="1.5" />
            <p class="text-3xl font-bold text-nexavira-primary">Scalable</p>
            <p class="text-xs text-nexavira-slate uppercase tracking-widest mt-1">Architecture</p>
          </div>
        </div>
      </div>
      
      <div class="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-nexavira-secondary/10 rounded-full filter blur-3xl opacity-60"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/2 w-64 h-64 bg-nexavira-primary/5 rounded-full filter blur-3xl opacity-60"></div>
    </section>

    <section class="py-24 bg-[#F7F9FA] border-t border-gray-100 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="text-center mb-20" data-aos="fade-down">
          <h2 class="text-nexavira-secondary font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Expertise</h2>
          <h3 class="text-4xl font-extrabold text-nexavira-primary">Layanan Keahlian Kami</h3>
          <div class="h-1.5 w-20 bg-nexavira-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div 
            v-for="service in services" 
            :key="service.title"
            class="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
            :data-aos="service.aos"
          >
            <div 
              class="w-16 h-16 bg-nexavira-primary/5 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:text-white"
              :class="[service.colorClass, service.hoverClass]"
            >
              <component :is="service.icon" :size="32" stroke-width="1.5" />
            </div>
            <h3 class="text-2xl font-bold text-nexavira-primary mb-4 tracking-tight">{{ service.title }}</h3>
            <p class="text-nexavira-slate leading-relaxed text-sm">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl font-extrabold text-nexavira-primary italic tracking-tight">
            The Minds Behind Nexavira
          </h2>
          <div class="h-1 w-20 bg-nexavira-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div class="max-w-4xl mx-auto relative" data-aos="fade-up" data-aos-delay="200">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :loop="true"
            :pagination="{ clickable: true }"
            :navigation="true"
            :autoplay="{ delay: 7000, disableOnInteraction: false }"
            class="pb-16 px-4"
          >
            <swiper-slide v-for="(member, index) in teamMembers" :key="index">
              <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 group">
                
                <div class="shrink-0 relative">
                  <img :src="member.image" :alt="member.name" 
                       class="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-2xl rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500 ring-8 ring-nexavira-secondary/10">
                  <div class="absolute -top-4 -left-4 bg-nexavira-secondary text-white p-3 rounded-full shadow-lg transform -rotate-12 group-hover:scale-110 transition-transform hidden md:block">
                    <Quote :size="20" fill="currentColor" />
                  </div>
                </div>

                <div class="flex-1 text-center md:text-left">
                  <span class="text-nexavira-secondary font-bold text-xs uppercase tracking-[0.2em] mb-2 block whitespace-pre-line">{{ member.title }}</span>
                  <h3 class="text-2xl md:text-3xl font-bold text-nexavira-primary mb-1">{{ member.name }}</h3>
                  <p class="text-lg text-nexavira-slate/70 font-medium mb-6 italic">{{ member.role }}</p>
                  
                  <div class="bg-gray-50 rounded-xl p-4 mb-6 border-l-4 border-nexavira-secondary text-left relative">
                     <p class="text-nexavira-primary font-medium text-sm italic">"{{ member.quote }}"</p>
                  </div>
                  
                  <p class="text-nexavira-slate leading-relaxed mb-8 text-sm md:text-base antialiased">
                    {{ member.desc }}
                  </p>
                  
                  <router-link :to="`/team/${member.slug}`" class="inline-flex items-center gap-2 px-6 py-3 bg-nexavira-primary text-white rounded-full font-bold hover:bg-nexavira-secondary transition-all group/link shadow-lg shadow-nexavira-primary/20">
                    Lihat Profil & Portofolio Lengkap 
                    <ArrowRight class="transform group-hover/link:translate-x-1 transition-transform" :size="18" />
                  </router-link>
                </div>

              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white" data-aos="fade-up">
      <div class="max-w-5xl mx-auto px-4 text-center">
        <div class="bg-nexavira-primary rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-nexavira-primary/20 relative overflow-hidden">
          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Siap Mewujudkan Ide Digital Anda?</h2>
            <p class="text-white/80 mb-10 max-w-xl mx-auto text-lg">Konsultasikan kebutuhan sistem Anda dengan para ahli kami sekarang juga.</p>
            <router-link to="/contact" class="inline-block bg-white text-nexavira-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-nexavira-secondary hover:text-white transition-all transform hover:scale-105 shadow-xl">
              Hubungi Tim Nexavira
            </router-link>
          </div>
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full"></div>
          <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-nexavira-secondary/10 rounded-full"></div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: #0F4C81;
    background: white;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  :deep(.swiper-button-next:hover),
  :deep(.swiper-button-prev:hover) {
    background: #00B4D8;
    color: white;
  }

  :deep(.swiper-button-next:after),
  :deep(.swiper-button-prev:after) {
    font-size: 16px;
    font-weight: 800;
  }

  :deep(.swiper-pagination-bullet-active) {
    background: #00B4D8;
    width: 28px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      display: none;
    }
  }
</style>