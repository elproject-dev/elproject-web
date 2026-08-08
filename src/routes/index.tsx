import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, MonitorSmartphone, Server, Search, PenTool, LineChart, ChevronRight, Gem, Rocket, Shield, Code2, Check, Star, Menu, X, Palette, ClockArrowUp, Paintbrush, Layers, ArrowUpRight, ShoppingCart, School, LayoutTemplate, CalendarCheck, Settings, Code } from "lucide-react";
import { LuPaintbrushVertical } from "react-icons/lu";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Layanan Jasa Pembuatan Aplikasi Mobile,Desktop & Website Modern" },
      { name: "description", content: "Pembuatan Aplikasi Android, iOS, Desktop, WebApps, Aplikasi Costum, Website dan Server untuk kebutuhan Bisnis Anda." },
      { property: "og:image", content: "https://www.elproject.studio/og-image.jpg" },
      { name: "twitter:image", content: "https://www.elproject.studio/og-image.jpg" },
      { name: "robots", content: "max-image-preview:large" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Globe, title: "Web Development", desc: "Pembuatan website modern, responsif, dan SEO-friendly", tag: "React · Next.js · WordPress", bgImage: "/source_code_indonesia.webp" },
  { icon: Server, title: "Build Server", desc: "pembuatan server database untuk kebutuhan data bisnis", tag: "Database · Network · Security", bgImage: "/server_bg2.webp" },
  { icon: Code2, title: "Development Apps", desc: "Pembuatan aplikasi modern untuk semua bisnis digital", tag: "Android · Windows · macOS · Linux", bgImage: "/mobile-dummy1.webp" },
  { icon: Search, title: "SEO Optimization", desc: "Tingkatkan peringkat website Anda di mesin pencarian", tag: "On-Page · Off-Page · Technical", bgImage: "/seo_indonesia.webp" },
  { icon: LuPaintbrushVertical, title: "Graphic Design", desc: "Desain visual yang menarik untuk memperkuat branding.", tag: "UI/UX · Branding · Canva · Figma", bgImage: "/desain_indo.webp" },
  { icon: LineChart, title: "Business Consulting", desc: "Konsultasi bisnis terpercaya untuk identifikasi usaha", tag: "Strategy · Operations · Management", bgImage: "/consulting_indonesia.webp" },
];

const features = [
  { icon: ClockArrowUp, title: "Pengembangan Cepat", desc: "Sprint agile 1 minggu dengan demo rutin agar progress selalu terlihat dan realtime.", bgImage: "/pengembangan_cepat.webp" },
  { icon: Shield, title: "Kualitas Terjamin", desc: <>Hasil terima rapi,sistem di sempurnakan <br className="hidden md:inline" />Garansi bug 30 hari pasca rilis.</>, bgImage: "/qa_indonesia.webp" },
  { icon: Code2, title: "Source Code Anda", desc: "Anda memiliki 100% source code, dokumentasi lengkap, dan hak intelektual.", bgImage: "/source_code_indonesia.webp" },
  { icon: Palette, title: "Desain Premium", desc: "UI/UX global di dukung desainer berpengalaman kelas internasional", bgImage: "/uiux_premium.webp" },
];

const concepts = [
  {
    icon: ShoppingCart,
    title: "E-Commerce & Kasir (POS)",
    desc: "Aplikasi penjualan modern yang terintegrasi. Dilengkapi dengan manajemen stok real-time, laporan keuangan, scan barcode, dan dukungan multi-cabang.",
    tags: ["Web", "Mobile", "Desktop"],
    features: ["Manajemen Stok", "Laporan Keuangan", "Multi-cabang"],
    bgImage: "/pos_concept.webp"
  },
  {
    icon: School,
    title: "Sistem Manajemen Terpadu",
    desc: "Solusi digital untuk operasional sekolah, klinik, maupun perusahaan. Memudahkan administrasi, absensi, hingga rekapitulasi data secara otomatis.",
    tags: ["Web Apps", "ERP"],
    features: ["Absensi", "Rekap Data", "Portal Siswa/Pasien"],
    bgImage: "/academic_concept.webp"
  },
  {
    icon: LayoutTemplate,
    title: "Company & Landing Page",
    desc: "Website profesional yang dirancang khusus untuk meningkatkan kredibilitas bisnis Anda, dengan animasi premium dan optimasi SEO tingkat tinggi.",
    tags: ["Web", "SEO"],
    features: ["Animasi Premium", "SEO Optimized", "Responsive"],
    bgImage: "/media_concept.webp"
  },
  {
    icon: CalendarCheck,
    title: "Aplikasi Booking & Antrean",
    desc: "Sistem reservasi online yang meminimalkan antrean fisik. Cocok untuk klinik, salon, atau layanan jasa lainnya dengan notifikasi real-time.",
    tags: ["Mobile", "Web"],
    features: ["Reservasi Online", "Sistem Antrean Digital", "Jadwal Real-time"],
    bgImage: "/booking_app.webp"
  },
  {
    icon: Settings,
    title: "Admin Control System",
    desc: "Dashboard super admin untuk mengontrol seluruh aktivitas bisnis, metrik performa, dan manajemen pengguna dari satu tempat terpusat.",
    tags: ["Web Apps", "Dashboard"],
    features: ["Grafik Metrik", "Manajemen User", "Export Data"],
    bgImage: "/erp_concept.webp"
  },
  {
    icon: Server,
    title: "Pembuatan Server Bisnis",
    desc: "Pembuatan struktur server cloud maupun on-premise yang aman dan handal untuk menyimpan serta mengelola database perusahaan",
    tags: ["Server", "Database", "VPS"],
    features: ["Security Setup", "Backup Otomatis", "Load Balancing"],
    bgImage: "/server_bg2.webp"
  },
  {
    icon: Code,
    title: "Custom Aplikasi Sesuai Ide",
    desc: "Punya ide unik yang belum ada di pasaran? Kami siap mewujudkannya dari tahap wireframe hingga menjadi produk nyata yang siap pakai.",
    tags: ["Custom", "Startups"],
    features: ["Konsultasi UI/UX", "API Integration", "Scalable"],
    bgImage: "/medical_concept.webp"
  },
  {
    icon: PenTool,
    title: "Desain Grafis & UI/UX",
    desc: "Layanan desain visual yang menarik dan berpusat pada pengguna untuk memperkuat branding perusahaan dan meningkatkan pengalaman interaksi.",
    tags: ["UI/UX", "Branding"],
    features: ["Prototyping", "Aset Visual", "Design System"],
    bgImage: "/desain.webp"
  },
  {
    icon: Globe,
    title: "Pembuatan Web & Portal",
    desc: "Pengembangan website berskala besar, portal berita, atau platform komunitas dengan performa tinggi yang dirancang untuk menampung traffic besar.",
    tags: ["Web", "Portal"],
    features: ["High Performance", "CMS Terintegrasi", "Responsive"],
    bgImage: "/001.webp"
  }
];

const testimonials = [
  { name: "Sbagiamu Coffee", role: "Pengusaha", text: <strong>Mantaplah pokoknya. Bikin aplikasi kasir eksekusi rapi, garapanya cepat, cocok nih sesuai konsep bisa mengelola banyak cabang...</strong> },
  {
    name: "Sinter Pamong", role: "Pengelola Sekolah", text: <strong>Desainnya bagus, harganya jg termasuk murah sih! Overall saya puas lihat hasilnya, <br></br> Next saya ajukan ke kepala sekolah lagi</strong>
  },
  { name: "KPKN Grobogan", role: "Staff PK3", text: <strong>Lagi iseng cari2 orang yang bisa buat sistem antrean<br />ee malah ketemu mas ini.. ternyata diluar ekpetasi.<br />Joss gandos top markotop garapanmu mas...</strong> },
  { name: "Kantong Mas", role: "Pengusaha", text: <strong>Orangnya teliti,Sabar,Dan bisa di andalkan <br />Bintang 5 lah buat developer ini<br />Terima kasih</strong> },
  { name: "CV.Aulia Usaha", role: "Pengusaha", text: <strong>Dapat rekomendasi dari temenku<br />gak nyangka sebagus itu<br />jangan ragu pesan aplikasi sama mas ini...</strong> },
  { name: "Kandang Biru", role: "Pengusaha", text: <strong>Lumayan lah daripada Langganan bulanan<br />Aplikasinya User-friendly banget <br />biasanya Aplikasi pada ribet ini mah enggak!</strong>, rating: 4 },
];

const AnimatedCounter = ({ end, suffix = "", decimals = 0 }: { end: number, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 4500; // Durasi sangat pelan (4.5 detik)

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Linear progress: konstan dan pelan dari awal sampai akhir
      const easeProgress = progress;
      setCount(easeProgress * end);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end]);

  return <>{count.toFixed(decimals)}{suffix}</>;
};

const TypingHighlight = () => {
  const [index, setIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const text1 = "Kami merancang, membangun ";
  const text2 = "Aplikasi & Server";
  const text3 = "Mobile, Web Apps, IOS, Android, Desktop Apps dan Website Modern";
  const text4 = "siap mengangkat bisnis Anda ke level berikutnya";
  const fullText = text1 + text2 + text3 + text4;

  // Pantau apakah elemen sudah terlihat di layar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let timer: any;
    // Delay lebih singkat karena sudah menunggu scroll
    const startTimeout = setTimeout(() => {
      timer = setInterval(() => {
        setIndex(prev => {
          if (prev >= fullText.length) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 40);
    }, 200);
    return () => {
      clearTimeout(startTimeout);
      if (timer) clearInterval(timer);
    };
  }, [fullText.length, hasStarted]);

  const getSub = (text: string, start: number) => {
    const len = index - start;
    if (len <= 0) return "";
    return text.substring(0, len);
  };

  const end1 = text1.length;
  const end2 = end1 + text2.length;
  const end3 = end2 + text3.length;

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto text-center reveal-up reveal">
      <p className="text-sm md:text-xl font-semibold text-foreground/90 min-h-[1.75rem]">
        {getSub(text1, 0)}
        {index > end1 && <span className="text-gradient font-bold">{getSub(text2, end1)}</span>}
        {index < end2 && <span className="animate-pulse">|</span>}
      </p>
      <p className="text-base md:text-2xl font-bold text-foreground my-2 min-h-[2rem]">
        {getSub(text3, end2)}
        {index >= end2 && index < end3 && <span className="animate-pulse">|</span>}
      </p>
      <p className="text-sm md:text-xl font-semibold text-foreground/90 min-h-[1.75rem]">
        {getSub(text4, end3)}
        {index >= end3 && index < fullText.length && <span className="animate-pulse">|</span>}
      </p>
    </div>
  );
};

function Index() {
  useReveal();

  const slides = ["/slide-1.webp", "/slide-2.webp", "/slide-3.webp", "/slide-4.webp"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTesti, setCurrentTesti] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const portofolioSection = document.getElementById('portofolio');
      if (portofolioSection) {
        const rect = portofolioSection.getBoundingClientRect();
        if (rect.top <= 300 && rect.bottom >= 300) {
          setActiveSection('portofolio');
        } else {
          setActiveSection('home');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTestimonialPaused = useRef(false);
  const lastTestimonialInteraction = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    const timerTesti = setInterval(() => {
      if (!isTestimonialPaused.current) {
        setCurrentTesti((prev) => (prev + 1) % testimonials.length);
      }
    }, 4000);
    return () => {
      clearInterval(timer);
      clearInterval(timerTesti);
    };
  }, []);

  useEffect(() => {
    const navEntries = window.performance.getEntriesByType('navigation');
    const isReload = navEntries.length > 0 && (navEntries[0] as any).type === 'reload';

    if (isReload) {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      window.scrollTo(0, 0);
    } else if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // slight delay to allow rendering
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-border/40 bg-background/60">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center lg:w-1/3">
            <Link to="/" className="group font-display text-xl font-bold tracking-wider flex items-center relative pb-1 ml-0 md:ml-12">
              <span className="relative inline-block shine-text" data-text="ELPROJECT">
                <span className="text-foreground/90 transition-colors duration-300 group-hover:text-primary">EL</span>
                <span className="text-gradient">PROJECT</span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" style={{ background: "var(--gradient-primary)" }} />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-8 lg:w-1/3">
            <Link to="/" className={`text-sm font-bold transition-colors ${activeSection === 'home' ? 'text-gradient hover:opacity-80' : 'text-foreground/80 hover:text-primary'}`}>Beranda</Link>
            <a href="#portofolio" className={`text-sm font-bold transition-colors ${activeSection === 'portofolio' ? 'text-gradient hover:opacity-80' : 'text-foreground/80 hover:text-primary'}`}>Konsep</a>
            <Link to="/blog" className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">Wawasan</Link>
          </nav>

          <div className="flex items-center justify-end lg:w-1/3">
            <a href="https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio" target="_blank" rel="noopener noreferrer" className="btn-primary !hidden lg:!flex text-sm !py-2 !px-12">Konsultasi <ChevronRight className="w-4 h-4" /></a>
            <button
              className="lg:hidden p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Buka menu navigasi"
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
            aria-label="Tutup menu navigasi"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs font-semibold text-gradient uppercase tracking-widest mb-8">Menu Navigasi</div>

          <nav className="flex flex-col gap-5 text-center w-full">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`font-bold text-lg transition-all duration-300 hover:scale-105 ${activeSection === 'home' ? 'text-gradient hover:opacity-80' : 'text-foreground/80 hover:text-primary'}`}>Beranda</Link>
            <a href="#portofolio" onClick={() => setIsMobileMenuOpen(false)} className={`font-bold text-lg transition-all duration-300 hover:scale-105 ${activeSection === 'portofolio' ? 'text-gradient hover:opacity-80' : 'text-foreground/80 hover:text-primary'}`}>Konsep</a>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-foreground/80 transition-all duration-300 hover:text-primary hover:scale-105">Wawasan</Link>

            <div className="w-full h-px bg-border/50 my-2" />

            <a href="https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full justify-center !py-3 mt-2 shadow-[0_0_15px_var(--color-primary)]">
              Konsultasi
            </a>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="relative pt-24 pb-20 px-6 grid-bg">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="reveal-ltr reveal py-6 md:py-12 md:pl-16 lg:pl-24 md:pr-0 lg:pr-8 h-full flex flex-col justify-center">

            <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] mb-6 text-center lg:text-left">
              Wujudkan <span className="text-gradient">Aplikasi</span> <span className="block mt-2 text-[0.64em]">Untuk Bisnis Modern Anda</span>
            </h1>
            <div className="w-full max-w-lg mx-auto lg:mx-0 mt-6 mb-10 md:mt-8 md:mb-12 flex flex-col sm:flex-row gap-4">
              <a href="/live-demo" className="btn-primary flex-1 justify-center">Live Demo <ChevronRight className="w-4 h-4" /></a>
              <a href="#layanan" className="btn-ghost flex-1 justify-center">Lihat Layanan</a>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4 w-full max-w-lg mx-auto lg:mx-0">
              <div className="glass-card rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center">
                <div className="text-xl md:text-2xl font-display font-bold text-gradient">
                  <AnimatedCounter end={120} suffix="+" />
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1">Project</div>
              </div>
              <div className="glass-card rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center">
                <div className="text-xl md:text-2xl font-display font-bold text-gradient">
                  <AnimatedCounter end={80} suffix="+" />
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1">Klien</div>
              </div>
              <div className="glass-card rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center">
                <div className="text-xl md:text-2xl font-display font-bold text-gradient translate-x-1">
                  <AnimatedCounter end={4.9} decimals={1} suffix="★" />
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1">Rating</div>
              </div>
            </div>
          </div>
          <div className="reveal p-2 md:p-8 flex flex-col items-center justify-center w-full h-full">
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] mx-auto mt-8 md:mt-12 group">
              <div className="relative w-full h-full overflow-hidden rounded-2xl border border-border/50">
                {slides.map((slide, index) => {
                  let positionClass = "translate-x-full opacity-0 z-0";
                  if (index === currentSlide) positionClass = "translate-x-0 opacity-100 z-10";
                  else if (index === (currentSlide - 1 + slides.length) % slides.length) positionClass = "-translate-x-full opacity-0 z-0";

                  return (
                    <img
                      key={slide}
                      src={slide}
                      alt={`Portofolio Aplikasi EL Project Studio Digital - Desain Premium ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${positionClass}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Slider Controls (Below Photo) */}
            <div className="flex items-center justify-between w-full max-w-xs mt-6 mb-8 md:mb-0 gap-4">
              {/* Tombol Navigasi Kiri */}
              <button
                onClick={prevSlide}
                className="w-10 h-10 shrink-0 rounded-full bg-background/60 backdrop-blur-md border border-border/40 flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer shadow-sm"
                aria-label="Slide sebelumnya"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>

              {/* Indikator Dot */}
              <div className="flex justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide
                      ? "w-6 h-2 bg-primary shadow-[0_0_8px_var(--color-primary)]"
                      : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60 md:bg-foreground/30 md:hover:bg-foreground/60"
                      }`}
                  />
                ))}
              </div>

              {/* Tombol Navigasi Kanan */}
              <button
                onClick={nextSlide}
                className="w-10 h-10 shrink-0 rounded-full bg-background/60 backdrop-blur-md border border-border/40 flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer shadow-sm"
                aria-label="Slide selanjutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT CARD */}
      <section className="px-6 relative z-10 mt-16 md:mt-24 pb-10">
        <TypingHighlight />
      </section>

      {/* MARQUEE */}
      <section className="py-8 border-y border-border/40">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto overflow-hidden">
          <div className="flex w-max marquee-track whitespace-nowrap text-2xl font-display font-semibold text-muted-foreground/60">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6 md:gap-16 pr-6 md:pr-16">
                {["Typescript", "·", "React", "·", "SwiftUI", "·", "Next.js", "·", "Flutter", "·", "Node.js", "·", "Figma", "·", "AWS", "·", "Firebase", "·", "GitHub", "·", "Supabase", "·", "Canva", "·", "Python", "·", "Flask", "·", "PostgreSQL", "·", "SQLite", "·", "TailwindCSS", "·", "Vercel", "·"].map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="layanan" className="pt-12 pb-12 px-6">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto">
          <div className="text-center mt-6 md:mt-8 mb-10 md:mb-16 reveal-up reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Layanan <span className="text-gradient">Unggulan</span> Kami</h2>
            <p className="text-sm md:text-xl font-semibold text-foreground/90 max-w-2xl mx-auto">
              Kami menyediakan solusi digital front-to-end <br className="md:hidden" /> untuk kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className={`relative group glass-card rounded-2xl px-4 py-6 sm:p-6 md:p-8 flex flex-col justify-between items-start overflow-hidden min-h-[360px] md:min-h-[320px] ${i % 2 ? "reveal" : "reveal-ltr reveal"}`} style={{ animationDelay: `${i * 100}ms` }}>

                {/* Background Image of the Card */}
                <div className="absolute inset-0 z-0 bg-black">
                  <img
                    src={s.bgImage}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700 pointer-events-none" />
                </div>

                <div className="w-full relative z-10 flex flex-col h-full">
                  {/* Number (Top Right) */}
                  <div className="flex justify-end items-start w-full mb-2">
                    <span className="text-4xl font-extrabold text-foreground/10 font-display select-none group-hover:text-foreground/30 transition-colors drop-shadow-md">
                      {`0${i + 1}`}
                    </span>
                  </div>

                  {/* Content (Vertically centered) */}
                  <div className="my-auto flex flex-col items-center text-center w-full">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground font-display mb-3 flex items-center justify-center gap-2 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      <span>{s.title}</span>
                    </h3>

                    {/* Desc */}
                    <p className="w-full text-[12px] sm:text-[13px] md:text-sm tracking-tight leading-relaxed text-foreground font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,1)] mb-5">
                      {s.desc}
                    </p>
                  </div>

                  {/* Category Badge (Bottom) */}
                  <div className="flex justify-center mt-auto">
                    <span className="text-[10px] uppercase font-bold text-foreground/80 tracking-wider bg-background/50 backdrop-blur-md border border-border/30 px-2.5 py-1 rounded-md drop-shadow-md">
                      {s.tag}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="kenapa" className="pt-12 pb-12 px-6 relative">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-stretch">
          <div className="relative group reveal-ltr reveal glass-card p-6 md:p-12 rounded-3xl flex flex-col justify-center h-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-black">
              <img
                src="/why_us_bg.webp"
                alt="Mengapa Memilih Kami"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-700 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-xl">
              <h2 className="text-[34px] md:text-[39px] leading-tight font-bold mb-6 text-foreground drop-shadow-lg">
                Lebih dari sekadar <span className="text-gradient">developer</span><br></br>kami partner pertumbuhan Anda.
              </h2>
              <p className="text-xs md:text-sm text-foreground font-semibold mb-8 drop-shadow-md">
                Kami memahami bahwa aplikasi yang hebat bukan hanya soal kode saja,<br className="hidden md:inline" />
                tapi soal detail, fungsi, serta eksekusi penggunaan user friendly.
              </p>

            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className="glass-card rounded-2xl p-6 reveal h-full flex flex-col relative group overflow-hidden" style={{ animationDelay: `${i * 80}ms` }}>
                {f.bgImage && (
                  <div className="absolute inset-0 z-0 bg-black">
                    <img
                      src={f.bgImage}
                      alt={f.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-700 pointer-events-none" />
                  </div>
                )}
                <div className="relative z-10 flex flex-col h-full justify-center my-auto">
                  <h3 className={`text-base font-bold mb-2 ${f.bgImage ? 'text-foreground drop-shadow-lg' : ''}`}>{f.title}</h3>
                  <p className={`text-[13px] md:text-sm tracking-tight leading-relaxed ${f.bgImage ? 'text-foreground/90 font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,1)]' : 'text-muted-foreground'}`}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCEPTS GRID */}
      <section id="portofolio" className="scroll-mt-20 mt-4 md:mt-10 pt-12 pb-24 px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16 reveal-up reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="md:hidden">Konsep <span className="text-gradient">Aplikasi</span></span>
            <span className="hidden md:inline">Konsep <span className="text-gradient">Aplikasi</span> & Sistem</span>
          </h2>
        </div>
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((c, i) => (
            <div key={c.title} className="glass-card rounded-2xl p-8 reveal flex flex-col h-full relative group overflow-hidden" style={{ animationDelay: `${(i % 3) * 100}ms` }}>
              {c.bgImage && (
                <div className="absolute inset-0 z-0 bg-black">
                  <img
                    src={c.bgImage}
                    alt={c.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-700 pointer-events-none" />
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{c.title}</h3>
                <p className="text-sm font-semibold leading-relaxed text-foreground mb-6 flex-grow drop-shadow-[0_4px_6px_rgba(0,0,0,1)]">{c.desc}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white uppercase tracking-wider shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-border/40 pt-4">
                    <ul className="space-y-2">
                      {c.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-xs text-foreground/90 font-semibold">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 md:mt-16 reveal-up reveal">
          <a href="/blog" className="btn-primary w-fit">Lihat Wawasan<ChevronRight className="w-4 h-4" /></a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimoni" className="pt-12 pb-12 px-6">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto">
          <div className="text-center mb-10 md:mb-16 reveal-up reveal">
            <h2 className="text-4xl md:text-5xl font-bold">Dipercaya oleh <span className="text-gradient">Owner</span> & Perusahaan</h2>
          </div>
          <div
            className="relative w-full max-w-lg md:max-w-none mx-auto h-[220px] md:h-[220px]"
            onMouseEnter={() => isTestimonialPaused.current = true}
            onMouseLeave={() => isTestimonialPaused.current = false}
            onTouchStart={() => isTestimonialPaused.current = true}
            onTouchEnd={() => isTestimonialPaused.current = false}
            onTouchCancel={() => isTestimonialPaused.current = false}
          >
            {testimonials.map((t, i) => {
              const diff = (i - currentTesti + testimonials.length) % testimonials.length;

              let mobileClass = "translate-x-[50%] opacity-0 z-0 pointer-events-none";
              if (diff === 0) mobileClass = "translate-x-0 opacity-100 z-10 pointer-events-auto";
              else if (diff === testimonials.length - 1) mobileClass = "-translate-x-[50%] opacity-0 z-0 pointer-events-none";

              let desktopClass = "md:translate-x-[calc(200%_+_48px)] md:opacity-0 md:z-0 md:pointer-events-none";
              if (diff === 0) desktopClass = "md:translate-x-0 md:opacity-100 md:z-10 md:pointer-events-auto";
              else if (diff === 1) desktopClass = "md:translate-x-[calc(100%_+_24px)] md:opacity-100 md:z-10 md:pointer-events-auto";
              else if (diff === 2) desktopClass = "md:translate-x-[calc(200%_+_48px)] md:opacity-100 md:z-10 md:pointer-events-auto";
              else if (diff === testimonials.length - 1) desktopClass = "md:-translate-x-[calc(100%_+_24px)] md:opacity-0 md:z-0 md:pointer-events-none";

              return (
                <div key={`${t.name}-${i}`} className={`absolute inset-y-0 left-0 glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-center transition-all duration-700 ease-in-out w-full md:w-[calc(33.333%_-_16px)] ${mobileClass} ${desktopClass}`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={`star-${i}-${j}`} className={`w-4 h-4 ${j < (t.rating || 5) ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`} />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-foreground/90 mb-6 flex-grow">{t.text}</p>
                  <div className="mt-auto">
                    <div className="text-sm md:text-base font-semibold text-purple-500">{t.name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground font-bold">{t.role}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => setCurrentTesti(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentTesti ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="pt-12 pb-12 px-6">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto glass-card rounded-3xl px-6 py-12 md:p-16 text-center relative overflow-hidden reveal-up reveal group border border-border/50 shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-black">
            <img
              src="/colorwall.webp"
              alt="ColorWall background"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-700 pointer-events-none" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">Siap membangun <span className="text-gradient">sesuatu yang hebat?</span></h2>
            <p className="text-sm md:text-xl font-semibold text-foreground/90 mb-8 max-w-2xl mx-auto drop-shadow-sm">
              Ceritakan ide Anda
              <span className="hidden md:inline"> — </span><br className="md:hidden" />
              Konsultasi gratis
              <span className="hidden md:inline"> — </span><br className="md:hidden" />
              Kami balas secepatnya
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-20">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=elproject.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-primary shadow-[0_0_15px_var(--color-primary)]">elproject@studio.id <ChevronRight className="w-4 h-4" /></a>
              <a href="https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio" target="_blank" rel="noopener noreferrer" className="btn-ghost bg-background/50 backdrop-blur-sm border-white/10 hover:bg-white/10">Chat WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT BLOCK */}
      <section className="sr-only">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto text-sm text-muted-foreground/80 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-foreground/90 mb-2 drop-shadow-sm">Jasa Buat Aplikasi Mobile & Website Profesional</h2>
            <p className="leading-relaxed">
              Di era digital saat ini, memiliki platform digital yang andal adalah keharusan. EL Project menyediakan <strong>jasa buat aplikasi</strong> terbaik untuk kebutuhan bisnis Anda. Mulai dari <strong>aplikasi kasir (POS)</strong>, <strong>sistem ERP</strong>, hingga <strong>aplikasi booking dan antrean</strong>. Tim kami terdiri dari developer berpengalaman yang siap memberikan solusi pengembangan <strong>aplikasi mobile Android dan iOS</strong> yang responsif, cepat, dan <em>user-friendly</em>.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground/90 mb-2 drop-shadow-sm">Mengapa Memilih Jasa Pembuatan Aplikasi Kami?</h2>
            <p className="leading-relaxed">
              Kami tidak sekadar menulis kode, tetapi merancang solusi dari depan ke belakang (<em>front-to-end</em>). Layanan <strong>jasa pembuatan aplikasi mobile</strong> kami mencakup UI/UX premium, integrasi CMS, optimasi server, hingga perawatan berkelanjutan. Baik Anda mencari <strong>jasa pembuatan website</strong> perusahaan, <strong>sistem manajemen terpadu</strong>, maupun <strong>aplikasi kasir</strong> untuk mengelola banyak cabang, kami siap menjadi partner teknologi Anda untuk tumbuh dan bersaing di pasar modern.
            </p>
            <p>
              Layanan kami dirancang untuk membantu bisnis Anda berkembang dengan teknologi yang efisien dan modern. Dengan pengalaman puluhan proyek, tim kami siap menghadirkan solusi terbaik yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
            </p>
            <p>
              Tim kami terdiri dari developer berpengalaman yang berdedikasi tinggi untuk memberikan hasil terbaik. Kami memahami bahwa setiap bisnis memiliki kebutuhan unik, sehingga kami menawarkan solusi yang dapat disesuaikan untuk memastikan kesuksesan proyek Anda.
            </p>
            <p>
              Kami menawarkan berbagai macam layanan pembuatan aplikasi, termasuk <strong>aplikasi kasir (POS)</strong>, <strong>sistem ERP</strong>, <strong>aplikasi booking dan antrean</strong>, serta <strong>aplikasi mobile Android dan iOS</strong>. Setiap proyek dikerjakan dengan standar kualitas tertinggi untuk memastikan performa optimal dan pengalaman pengguna terbaik.
            </p>
            <p>
              Dengan komitmen kami terhadap kualitas, transparansi, dan layanan pelanggan yang unggul, EL Project telah menjadi pilihan utama bagi bisnis yang mencari solusi digital andal. Tim kami selalu mengikuti perkembangan teknologi terbaru untuk memastikan bahwa aplikasi yang kami bangun tidak hanya memenuhi kebutuhan saat ini, tetapi juga siap untuk pertumbuhan bisnis di masa depan.
            </p>
            <p>
              Sebagai penyedia <strong>jasa pembuatan aplikasi custom</strong> dan <strong>jasa pembuatan website perusahaan</strong> terbaik, EL Project melayani segala kebutuhan digitalisasi untuk <strong>bisnis skala kecil (UMKM), menengah, hingga besar (enterprise)</strong>. Kami dikenal luas sebagai pakar terpercaya untuk <strong>layanan jasa pembuatan aplikasi di Yogyakarta</strong> yang telah menjangkau klien di seluruh pelosok Nusantara. Layanan unggulan kami meliputi <strong>jasa pembuatan sistem ERP</strong>, <strong>jasa pembuatan aplikasi kasir (POS)</strong>, <strong>aplikasi booking dan antrean</strong>, serta <strong>jasa pembuatan aplikasi mobile Android dan iOS</strong>. Layanan <strong>jasa pembuatan website dan aplikasi</strong> kami secara penuh mendukung klien dari area <strong>Yogyakarta (Jogja), Solo, Magelang, Wonosobo, Purwokerto, Purbalingga, Cilacap, Tegal, Sragen, Semarang, Bandung, Jakarta, Surabaya, Bali, Medan, Lampung, Palembang, Pontianak, Palangkaraya, Samarinda, Balikpapan, Makassar, Gorontalo, Maluku, Kupang, Timor Leste, Sorong, hingga Jayapura (Papua)</strong>. Dengan dedikasi penuh pada kualitas UI/UX premium dan optimasi performa tinggi, kami memastikan setiap proyek dieksekusi dengan presisi mutlak untuk mendukung kesuksesan digital bisnis Anda.
            </p>
            <p>kami menawarkan jasa pembuatan aplikasi <strong>sistem antrean</strong> dan juga layanan jasa pembuatan aplikasi <strong>absensi</strong></p>

          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground/90 mb-2 drop-shadow-sm">Layanan Jasa Pembuatan Aplikasi Seluruh Indonesia</h2>
            <p className="leading-relaxed">
              EL Project melayani <strong>jasa pembuatan aplikasi</strong> untuk klien di <strong>seluruh Indonesia</strong>. Di mana pun bisnis Anda berlokasi, mulai dari <strong>Jakarta, Surabaya, Bandung, Semarang, Yogyakarta (Jogja), Medan, Makassar, Bali, hingga Balikpapan dan kota lainnya</strong>, tim kami siap membantu Anda. Kami menangani proyek pembuatan aplikasi skala kecil hingga enterprise secara profesional.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 px-6 text-center text-[10px] md:text-xs text-muted-foreground transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] cursor-default">
        © 2026 EL PROJECT DEVELOPMENT BUILDER WEB APPS © 2026
      </footer>
    </main>
  );
}
