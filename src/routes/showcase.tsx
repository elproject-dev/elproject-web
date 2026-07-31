import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingCart, School, LayoutTemplate, CalendarCheck, Settings, Code, ChevronRight, Server, PenTool, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/showcase")({
  head: () => ({
    meta: [
      { title: "Konsep & Portofolio — EL Project" },
      { name: "description", content: "Detail contoh konsep aplikasi yang biasa kami buat." },
    ],
  }),
  component: Showcase,
});

const concepts = [
  {
    icon: ShoppingCart,
    title: "E-Commerce & Kasir (POS)",
    desc: "Aplikasi penjualan modern yang terintegrasi. Dilengkapi dengan manajemen stok real-time, laporan keuangan, scan barcode, dan dukungan multi-cabang.",
    tags: ["Web", "Mobile", "Desktop"],
    features: ["Manajemen Stok", "Laporan Keuangan", "Multi-cabang"]
  },
  {
    icon: School,
    title: "Sistem Manajemen Terpadu",
    desc: "Solusi digital untuk operasional sekolah, klinik, maupun perusahaan. Memudahkan administrasi, absensi, hingga rekapitulasi data secara otomatis.",
    tags: ["Web Apps", "ERP"],
    features: ["Absensi", "Rekap Data", "Portal Siswa/Pasien"]
  },
  {
    icon: LayoutTemplate,
    title: "Company Profile & Landing Page",
    desc: "Website profesional yang dirancang khusus untuk meningkatkan kredibilitas bisnis Anda, dengan animasi premium dan optimasi SEO tingkat tinggi.",
    tags: ["Web", "SEO"],
    features: ["Animasi Premium", "SEO Optimized", "Responsive"]
  },
  {
    icon: CalendarCheck,
    title: "Aplikasi Booking & Antrean",
    desc: "Sistem reservasi online yang meminimalkan antrean fisik. Cocok untuk klinik, salon, atau layanan jasa lainnya dengan notifikasi real-time.",
    tags: ["Mobile", "Web"],
    features: ["Reservasi Online", "Notifikasi WA", "Jadwal Real-time"]
  },
  {
    icon: Settings,
    title: "Admin Control System",
    desc: "Dashboard super admin untuk mengontrol seluruh aktivitas bisnis, metrik performa, dan manajemen pengguna dari satu tempat terpusat.",
    tags: ["Web Apps", "Dashboard"],
    features: ["Grafik Metrik", "Manajemen User", "Export Data"]
  },
  {
    icon: Server,
    title: "Pembuatan Server Bisnis",
    desc: "Infrastruktur server cloud maupun on-premise yang aman dan handal untuk menyimpan serta mengelola database perusahaan dengan proteksi tingkat tinggi.",
    tags: ["Server", "Database"],
    features: ["Security Setup", "Backup Otomatis", "Load Balancing"]
  },
  {
    icon: Code,
    title: "Custom Aplikasi Sesuai Ide",
    desc: "Punya ide unik yang belum ada di pasaran? Kami siap mewujudkannya dari tahap wireframe hingga menjadi produk nyata yang siap pakai.",
    tags: ["Custom", "Startups"],
    features: ["Konsultasi UI/UX", "API Integration", "Scalable"]
  },
  {
    icon: PenTool,
    title: "Desain Grafis & UI/UX",
    desc: "Layanan desain visual yang menarik dan berpusat pada pengguna untuk memperkuat branding perusahaan dan meningkatkan pengalaman interaksi.",
    tags: ["UI/UX", "Branding"],
    features: ["Prototyping", "Aset Visual", "Design System"]
  },
  {
    icon: Globe,
    title: "Pembuatan Web & Portal",
    desc: "Pengembangan website berskala besar, portal berita, atau platform komunitas dengan performa tinggi yang dirancang untuk menampung traffic besar.",
    tags: ["Web", "Portal"],
    features: ["High Performance", "CMS Terintegrasi", "Responsive"]
  }
];

function Showcase() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fullText = "Berikut adalah beberapa contoh konsep aplikasi dan sistem yang biasa kami kembangkan untuk membantu digitalisasi berbagai jenis bisnis.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  // Simple intersection observer hook for reveal animation
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-border/40 bg-background/60">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="group font-display text-xl font-bold tracking-wider flex items-center relative pb-1 ml-0 md:ml-12">
            <span className="relative inline-block shine-text" data-text="ELPROJECT">
              <span className="text-foreground/90 transition-colors duration-300 group-hover:text-primary">EL</span>
              <span className="text-gradient">PROJECT</span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" style={{ background: "var(--gradient-primary)" }} />
          </Link>
          

          
          <div className="flex items-center">
            <a href="https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio" target="_blank" rel="noopener noreferrer" className="btn-primary !hidden lg:!flex text-sm !py-2 !px-12 mr-10">Konsultasi <ChevronRight className="w-4 h-4" /></a>
            <button
              className="lg:hidden p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU POP-UP */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop Blur */}
        <div
          className="absolute inset-0 bg-background/60 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Pop-up Card */}
        <div className={`relative w-full max-w-[85vw] glass-card border border-border/50 shadow-2xl rounded-3xl p-8 flex flex-col items-center transition-all duration-300 ${isMobileMenuOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}`}>
          <button
            className="absolute top-4 right-4 p-2 bg-foreground/5 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs font-semibold text-gradient uppercase tracking-widest mb-8">Menu Navigasi</div>

          <nav className="flex flex-col gap-5 text-center w-full">
            {[
              { href: "/#layanan", label: "Layanan" },
              { href: "/#kenapa", label: "Kenapa Kami" },
              { href: "/#harga", label: "Harga" },
              { href: "/#testimoni", label: "Testimoni" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold text-lg text-foreground/80 transition-all duration-300 hover:text-primary hover:scale-105"
              >
                {link.label}
              </a>
            ))}

            <div className="w-full h-px bg-border/50 my-2" />

            <a href="https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full justify-center !py-3 mt-2 shadow-[0_0_15px_var(--color-primary)]">
              Konsultasi
            </a>
          </nav>
        </div>
      </div>

      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50" />

        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto text-center reveal-up reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-white/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Konsep & Portofolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Konsep <span className="text-gradient">Aplikasi</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto min-h-[3rem] md:min-h-[3.5rem]">
            {typedText}
          </p>
        </div>
      </section>

      {/* CONCEPTS GRID */}
      <section className="pb-24 px-6 relative z-10">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((c, i) => (
            <div key={c.title} className="glass-card rounded-2xl p-8 reveal flex flex-col h-full" style={{ animationDelay: `${(i % 3) * 100}ms` }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "var(--gradient-primary)" }}>
                <c.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-grow">{c.desc}</p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {c.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-1 rounded-md bg-primary/10 text-primary uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="border-t border-border/40 pt-4">
                  <ul className="space-y-2">
                    {c.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary/50" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pb-12 px-6">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto glass-card rounded-3xl px-6 py-12 md:p-16 text-center relative overflow-hidden reveal-up reveal">
          <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-glow)" }} />
          <h2 className="text-[28px] md:text-4xl font-bold mb-4">Punya <span className="text-gradient">ide aplikasi</span> lain?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Mari diskusikan kebutuhan spesifik Anda bersama kami.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio" target="_blank" rel="noopener noreferrer" className="btn-primary">Konsultasi Gratis <ChevronRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-8 px-6 text-center text-[10px] md:text-xs text-muted-foreground transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] cursor-default">
        © 2026 EL PROJECT DEVELOPMENT BUILDER WEB APPS © 2026
      </footer>
    </div>
  );
}
