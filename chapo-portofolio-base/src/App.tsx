/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, 
  Cpu, 
  Shield, 
  Layers, 
  Clock, 
  Hash, 
  ChevronRight,
  Activity,
  Code,
  Zap
} from "lucide-react";

export default function App() {
  const [waktu, setWaktu] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setWaktu(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-ink text-paper font-mono scanlines bg-grid relative">
      {/* Status Bar Atas */}
      <div className="fixed top-0 w-full z-50 border-b border-white/10 bg-ink/90 backdrop-blur-sm px-4 h-12 flex items-center justify-between text-[10px] uppercase tracking-widest">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 animate-pulse rounded-full" />
            <span className="text-green-500">Available for Hire</span>
          </div>
          <span className="text-white/30 hidden md:inline">ID: CHAP0-DEV-2021</span>
          <span className="text-white/30 hidden md:inline">Lok: ID_JKT</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white/30">{waktu}</span>
          <div className="flex gap-4">
            <a href="#tentang" className="hover:text-gold transition-colors">.tentang</a>
            <a href="#project" className="hover:text-gold transition-colors">.project</a>
            <a href="#kontak" className="hover:text-gold transition-colors">.kontak</a>
          </div>
        </div>
      </div>

      <main className="pt-24 px-4 md:px-12 max-w-7xl mx-auto">
        {/* Bagian Header */}
        <section id="tentang" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-gold text-xs font-bold">[ 01 ]</span>
                <div className="h-[1px] w-12 bg-gold/30" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Identitas Utama</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-8 gold-glow">
                Chap0<span className="text-gold">.</span>
              </h1>
              <div className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl border-l-2 border-gold/20 pl-8 italic">
                Arsitek FiveM yang fokus di logika server performa tinggi dan pengembangan ekosistem custom sejak 2021.
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="brutal-card border-gold/20">
                <div className="text-[10px] text-gold mb-4 uppercase tracking-widest">Jam Kerja</div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Kecuali Pas Tidur</div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Spek Teknis */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-serif font-bold italic">Spek_Teknis</h2>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            <ItemSpek 
              icon={<Code className="w-4 h-4" />}
              label="Bahasa"
              value="Lua / JS / HTML / CSS"
            />
            <ItemSpek 
              icon={<Layers className="w-4 h-4" />}
              label="Framework"
              value="ESX / QBCore / QBOX"
            />
            <ItemSpek 
              icon={<Zap className="w-4 h-4" />}
              label="Optimasi"
              value="Low MS / High FPS"
            />
            <ItemSpek 
              icon={<Shield className="w-4 h-4" />}
              label="Keamanan"
              value="Anti-Exploit / Obfuscation"
            />
          </div>
        </section>

        {/* Kemampuan - Gaya Dashboard */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <span className="text-gold text-xs font-bold">[ 02 ]</span>
                <h2 className="text-4xl font-serif font-bold mt-2 italic">Kemampuan</h2>
              </div>
              <div className="space-y-6">
                <BarisKemampuan 
                  num="01"
                  title="UI/UX Engineering"
                  desc="Bikin interface custom yang nyaman buat player dan sinkron sama logika server."
                />
                <BarisKemampuan 
                  num="02"
                  title="Script Custom"
                  desc="Nulis kode yang bersih, modular, dan gampang dirawat buat fitur server yang unik."
                />
                <BarisKemampuan 
                  num="03"
                  title="Keamanan Server"
                  desc="Nambahin layer proteksi buat minimalisir celah keamanan di level script."
                />
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Terminal className="w-32 h-32" />
              </div>
              <div className="font-mono text-[10px] text-gold/50 leading-relaxed mb-8">
                {`// Analisis Performa
function optimasiResource(resource) {
  const penggunaan = resource.getUsage();
  if (penggunaan > THRESHOLD) {
    resource.refactor();
    return "Optimized";
  }
  return "Stable";
}`}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Performa Jadi Prioritas</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  Gak cuma asal bikin fitur; gue bikin fitur yang awet. Tiap script dites biar gak ada 
                  memory leak dan hemat CPU biar server tetep stabil di 144FPS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pengalaman - Gaya Data Grid */}
        <section id="project" className="mb-32">
          <div className="mb-12">
            <span className="text-gold text-xs font-bold">[ 03 ]</span>
            <h2 className="text-4xl font-serif font-bold mt-2 italic">Riwayat_Project</h2>
          </div>
          
          <div className="border border-white/10">
            <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-widest p-4 text-white/40">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Nama_Project</div>
              <div className="col-span-4">Posisi</div>
              <div className="col-span-2 text-right">Status</div>
            </div>
            <BarisPengalaman id="01" nama="Central Extinction" posisi="Lead Developer" status="Selesai" />
            <BarisPengalaman id="02" nama="Central FFA" posisi="Second Developer" status="Selesai" />
            <BarisPengalaman id="03" nama="Domestik Roleplay" posisi="Second Developer" status="Selesai" />
            <BarisPengalaman id="04" nama="Garuda Roleplay" posisi="Technical Handler" status="Legacy" />
          </div>
        </section>

        {/* Kontak - Gaya Terminal */}
        <section id="kontak" className="pb-32">
          <div className="max-w-3xl mx-auto">
            <div className="brutal-card border-gold/40">
              <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                <span className="ml-4 text-[10px] text-white/30">terminal — chap0@dev</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-gold">$</span>
                  <span className="text-white/80">kontak --lewat discord</span>
                </div>
                <div className="pl-8 text-2xl md:text-4xl font-bold tracking-tighter">
                  @justme027
                </div>
                <div className="flex gap-4">
                  <span className="text-gold">$</span>
                  <span className="text-white/80 animate-pulse">_</span>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[10px] text-white/30 uppercase tracking-widest">Siap diajak kerjasama</div>
                <a 
                  href="https://discord.com" 
                  className="bg-gold text-ink px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-paper transition-colors"
                >
                  Hubungi Sekarang
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-8 border-t border-white/10 flex justify-between items-center text-[10px] text-white/20 uppercase tracking-[0.3em]">
        <span>&copy; 2026 CHAP0</span>
        <span className="hidden md:inline">Dibangun_pake_Lua_dan_Kopi</span>
        <span>v.1.0.4-stabil</span>
      </footer>
    </div>
  );
}

function ItemSpek({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="p-8 bg-ink hover:bg-white/[0.02] transition-colors group">
      <div className="text-gold mb-4 group-hover:scale-110 transition-transform origin-left">{icon}</div>
      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-sm font-bold">{value}</div>
    </div>
  );
}

function BarisKemampuan({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="group border-b border-white/5 pb-6 last:border-0">
      <div className="flex items-start gap-6">
        <span className="text-gold text-[10px] font-bold pt-1">{num}</span>
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{title}</h3>
          <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function BarisPengalaman({ id, nama, posisi, status }: { id: string, nama: string, posisi: string, status: string }) {
  return (
    <div className="grid grid-cols-12 p-4 hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0 group">
      <div className="col-span-1 text-white/20 text-[10px]">{id}</div>
      <div className="col-span-5 font-bold group-hover:text-gold transition-colors">{nama}</div>
      <div className="col-span-4 text-white/50 text-xs">{posisi}</div>
      <div className="col-span-2 text-right">
        <span className={`text-[8px] uppercase tracking-widest px-2 py-1 border ${
          status === 'Aktif' ? 'border-gold text-gold' : 'border-white/10 text-white/30'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );
}
