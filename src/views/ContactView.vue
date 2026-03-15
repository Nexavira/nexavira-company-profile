<script setup>
  import { Mail, MessageSquare, MapPin, Send } from 'lucide-vue-next';
</script>

<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div data-aos="fade-right">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexavira-secondary/10 border border-nexavira-secondary/20 text-nexavira-secondary text-xs font-bold uppercase tracking-widest mb-6">
            Get In Touch
          </div>
          <h2 class="text-4xl font-extrabold text-nexavira-primary mb-6 tracking-tight">
            Mari Bangun Sesuatu yang <br>
            <span class="text-nexavira-secondary">Hebat Bersama</span>
          </h2>
          <p class="text-nexavira-slate mb-10 leading-relaxed text-lg">
            Punya ide proyek atau butuh perombakan sistem? Ceritakan kebutuhan Anda, dan tim kami akan segera menghubungi Anda.
          </p>
          
          <div class="space-y-8">
            <div class="flex items-center gap-5 group">
              <div class="w-12 h-12 bg-nexavira-primary/5 text-nexavira-primary rounded-xl flex items-center justify-center group-hover:bg-nexavira-primary group-hover:text-white transition-all">
                <Mail :size="24" stroke-width="1.5" />
              </div>
              <a href="mailto:nexavira@gmail.com" class="text-lg font-semibold text-nexavira-primary hover:text-nexavira-secondary transition">nexavira@gmail.com</a>
            </div>

            <div class="flex items-center gap-5 group">
              <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                <MessageSquare :size="24" stroke-width="1.5" />
              </div>
              <a href="https://wa.me/6285659445565" target="_blank" class="text-lg font-semibold text-nexavira-primary hover:text-green-600 transition">+62 856-5944-5565</a>
            </div>

            <div class="flex items-center gap-5 group">
              <div class="w-12 h-12 bg-nexavira-secondary/5 text-nexavira-secondary rounded-xl flex items-center justify-center group-hover:bg-nexavira-secondary group-hover:text-white transition-all">
                <MapPin :size="24" stroke-width="1.5" />
              </div>
              <span class="text-lg font-semibold text-nexavira-primary">Bandung, Indonesia</span>
            </div>
          </div>
        </div>

        <div class="bg-[#F7F9FA] p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-nexavira-primary/5" data-aos="fade-left">
          <form @submit.prevent class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-nexavira-primary ml-1">Nama Lengkap</label>
                <input type="text" placeholder="John Doe" class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-nexavira-secondary/20 focus:border-nexavira-secondary transition">
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-nexavira-primary ml-1">Email</label>
                <input type="email" placeholder="john@example.com" class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-nexavira-secondary/20 focus:border-nexavira-secondary transition">
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-nexavira-primary ml-1">Pesan Anda</label>
              <textarea rows="4" placeholder="Ceritakan detail proyek Anda..." class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-nexavira-secondary/20 focus:border-nexavira-secondary transition resize-none"></textarea>
            </div>
            <button class="w-full bg-nexavira-primary hover:bg-nexavira-secondary text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-nexavira-primary/20 flex items-center justify-center gap-3 group">
              Kirim Pesan
              <Send :size="18" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>