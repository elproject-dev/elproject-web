import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, MonitorSmartphone, Server, Search, PenTool, LineChart, ChevronRight, Gem, Rocket, Shield, Code2, Check, Star, Menu, X, Palette, ClockArrowUp, Paintbrush, Figma, Layers } from "lucide-react";
import { LuPaintbrushVertical } from "react-icons/lu";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EL Project — Jasa Pembuatan Aplikasi Mobile, Web & iOS" },
      { name: "description", content: "Studio digital profesional untuk pembuatan aplikasi mobile, web apps, iOS, dan website premium." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Globe, title: "Web Development", desc: "Pembuatan website modern, responsif, dan SEO-friendly", tag: "React · Next.js · WordPress" },
  { icon: Server, title: "Build Server", desc: "pembuatan server pribadi untuk kebutuhan data bisnis", tag: "Database · Network · Security" },
  { icon: Code2, title: "Development Apps", desc: "Pembuatan aplikasi modern untuk semua bisnis digital", tag: "Android · Windows · macOS · Linux" },
  { icon: Search, title: "SEO Optimization", desc: "Tingkatkan peringkat website Anda di mesin pencarian", tag: "On-Page · Off-Page · Technical" },
  { icon: LuPaintbrushVertical, title: "Graphic Design", desc: "Desain visual yang menarik untuk memperkuat branding.", tag: "UI/UX · Branding · Illustration · Canva · Figma" },
  { icon: LineChart, title: "Business Consulting", desc: "Konsultasi bisnis terpercaya untuk identifikasi peluang usaha", tag: "Strategy · Operations · Management" },
];

const features = [
  { icon: ClockArrowUp, title: "Pengembangan Cepat", desc: "Sprint agile 1 minggu dengan demo rutin agar progress selalu terlihat dan Real-Time." },
  { icon: Shield, title: "Kualitas Terjamin", desc: <>QA otomatis, code review ketat, <br className="hidden md:inline" />Garansi bug 90 hari pasca rilis.</> },
  { icon: Code2, title: "Source Code Anda", desc: "Anda memiliki 100% source code, dokumentasi lengkap, dan hak intelektual." },
  { icon: Palette, title: "Desain Premium", desc: "UI/UX kelas dunia oleh tim desainer berpengalaman lintas industri." },
];

const plans = [
  { name: "Starter", price: "1 Jt", desc: "Untuk validasi ide & MVP cepat", features: ["1 platform (Web atau Mobile)", "Hingga 5 halaman / screen", "Desain UI standar", "Garansi 60 hari", "Support database"] },
  { name: "Pro", price: "5 Jt", desc: "Paling populer untuk bisnis berkembang", features: ["Web + Mobile App", "Hingga 20 screen kustom", "UI/UX premium + animasi", "Integrasi API & database", "Garansi 90 hari", "Support prioritas", "Support Maintenance 1 tahun"], featured: true },
  { name: "Enterprise", price: "Custom", desc: "Solusi end-to-end skala besar", features: ["Multi-platform (iOS/Android/Web)", "Arsitektur scalable", "Dedicated team", "SLA 99.9%", "Maintenance 1 tahun", "On-site training", "Mode Admin Control System"] },
];

const testimonials = [
  { name: "Sbagiamu Coffee", role: "Pengusaha", text: <>Mantaplah pokoknya. Bikin aplikasi kasir eksekusi rapi, garapanya cepat, cocok nih sesuai konsep bisa mengelola banyak cabang...</> },
  {
    name: "Sinter Pamong", role: "Pengelola Sekolah", text: <>Desainnya bagus, harganya jg termasuk murah sih! Overall saya puas lihat hasilnya, <br></br> Next saya ajukan ke kepala sekolah lagi</>
  },
  { name: "KPKN Grobogan", role: "Staff PK3", text: <>Lagi iseng cari2 orang yang bisa buat sistem antrean<br />ee malah ketemu mas ini.. ternyata diluar ekpetasi.<br />Joss gandos top markotop garapanmu mas...</> },
  { name: "Kantong Mas", role: "Pengusaha", text: <>Orangnya teliti,Sabar,Dan bisa di andalkan <br />Bintang 5 lah buat developer ini<br />Terima kasih</> },
  { name: "CV.Aulia Usaha", role: "Pengusaha", text: <>Dapat rekomendasi dari temenku<br />gak nyangka sebagus itu<br />jangan ragu pesan aplikasi sama mas ini...</> },
  { name: "Kandang Biru", role: "Pengusaha", text: <>Lumayan lah daripada Langganan bulanan<br />Aplikasinya User-friendly banget <br />biasanya Aplikasi pada ribet ini mah enggak!</>, rating: 4 },
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
  const text3 = "Mobile, Web Apps, iOS, Android, Desktop Apps dan Website Modern";
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
      <p className="text-xs md:text-lg text-muted-foreground min-h-[1.5rem]">
        {getSub(text1, 0)}
        {index > end1 && <span className="text-primary font-semibold">{getSub(text2, end1)}</span>}
        {index < end2 && <span className="animate-pulse">|</span>}
      </p>
      <p className="text-sm md:text-xl font-semibold text-foreground my-2 min-h-[1.75rem]">
        {getSub(text3, end2)}
        {index >= end2 && index < end3 && <span className="animate-pulse">|</span>}
      </p>
      <p className="text-xs md:text-lg text-muted-foreground min-h-[1.5rem]">
        {getSub(text4, end3)}
        {index >= end3 && index < fullText.length && <span className="animate-pulse">|</span>}
      </p>
    </div>
  );
};

function Index() {
  useReveal();

  const slides = ["/slide-1.png", "/slide-2.png", "/slide-3.png", "/slide-4.png"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const pricingScrollRef = useRef<HTMLDivElement>(null);
  const isSliderPaused = useRef(false);
  const lastInteractionTime = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slide = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (isSliderPaused.current || Date.now() - lastInteractionTime.current < 4000) return;
      if (ref.current) {
        const { scrollLeft, scrollWidth, clientWidth, children } = ref.current;
        const scrollAmount = children[0] ? children[0].clientWidth + 24 : clientWidth * 0.85;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          ref.current.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    };

    const timerPricing = setInterval(() => slide(pricingScrollRef), 3000);
    const timerTestimonial = setInterval(() => slide(testimonialScrollRef), 3800);

    return () => {
      clearInterval(timerPricing);
      clearInterval(timerTestimonial);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-border/40 bg-background/60">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#" className="group font-display text-xl font-bold tracking-wider flex items-center relative pb-1">
            <span className="relative inline-block shine-text" data-text="ELPROJECT">
              <span className="text-foreground/90 transition-colors duration-300 group-hover:text-primary">EL</span>
              <span className="text-gradient">PROJECT</span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" style={{ background: "var(--gradient-primary)" }} />
          </a>

          <div className="flex items-center">
            <a href="https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio" target="_blank" rel="noopener noreferrer" className="btn-primary !hidden lg:!flex text-sm !py-2 !px-12">Konsultasi <ChevronRight className="w-4 h-4" /></a>
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
              { href: "#layanan", label: "Layanan" },
              { href: "#kenapa", label: "Kenapa Kami" },
              { href: "#harga", label: "Harga" },
              { href: "#testimoni", label: "Testimoni" },
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

      {/* HERO */}
      <section className="relative pt-24 pb-20 px-6 grid-bg">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="reveal-ltr reveal py-6 md:py-12 md:pl-12 md:pr-0 lg:pr-0 h-full flex flex-col justify-center">

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
          <div className="reveal p-2 md:p-8 flex items-center justify-center w-full h-full">
            <div className="relative float-glow w-full aspect-[16/9] mx-auto mt-8 md:mt-12">
              <div className="relative w-full h-full overflow-hidden rounded-2xl border border-border/50 shadow-2xl group">
                {slides.map((slide, index) => {
                  // Tentukan posisi gambar (aktif, di kiri, atau di kanan)
                  let positionClass = "translate-x-full opacity-0 z-0";
                  if (index === currentSlide) positionClass = "translate-x-0 opacity-100 z-10";
                  else if (index === (currentSlide - 1 + slides.length) % slides.length) positionClass = "-translate-x-full opacity-0 z-0";

                  return (
                    <img
                      key={slide}
                      src={slide}
                      alt={`Project slide ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${positionClass}`}
                    />
                  );
                })}

                {/* Tombol Navigasi Kiri */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-background/60 backdrop-blur-md border border-border/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>

                {/* Tombol Navigasi Kanan */}
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-background/60 backdrop-blur-md border border-border/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Indikator Dot */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide
                        ? "w-6 h-2 bg-primary shadow-[0_0_8px_var(--color-primary)]"
                        : "w-2 h-2 bg-foreground/30 hover:bg-foreground/60"
                        }`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -inset-4 -z-10 rounded-3xl opacity-50" style={{ background: "var(--gradient-glow)" }} />
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
                {["Javascript", "·", "React", "·", "SwiftUI", "·", "Next.js", "·", "Flutter", "·", "Node.js", "·", "Figma", "·", "AWS", "·", "Firebase", "·", "GitHub", "·", "Supabase", "·", "Canva", "·", "Python", "·"].map((t, j) => (
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
          <div className="text-center mb-10 md:mb-16 reveal-up reveal">
            <div className="text-sm font-semibold text-gradient uppercase tracking-widest mb-3">Layanan Kami</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Layanan <span className="text-gradient">Unggulan</span> Kami</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan solusi digital front-to-end <br className="md:hidden" /> untuk kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className={`glass-card rounded-2xl p-6 ${i % 2 ? "reveal" : "reveal-ltr reveal"}`} style={{ animationDelay: `${i * 100}ms` }}>
                <div className="mb-5">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">{s.desc}</p>
                <div className="text-xs font-medium text-primary/80">{s.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="kenapa" className="pt-12 pb-12 px-6 relative">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-stretch">
          <div className="reveal-ltr reveal glass-card p-6 md:p-12 rounded-3xl flex flex-col justify-center h-full">
            <div className="text-sm font-semibold text-gradient uppercase tracking-widest mb-3">Mengapa Memilih Kami</div>
            <h2 className="text-[34px] md:text-[39px] leading-tight font-bold mb-6">Lebih dari sekadar <span className="text-gradient">developer</span><br></br>kami partner pertumbuhan Anda.</h2>
            <p className="text-xs md:text-sm text-muted-foreground mb-8">
              Kami memahami bahwa aplikasi yang hebat bukan hanya soal kode saja,<br />
              tapi soal eksekusi, strategi,serta detail aplikasi
            </p>
            <Link to="/showcase" className="btn-primary">Lihat Semua<ChevronRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className="glass-card rounded-2xl p-6 reveal h-full flex flex-col" style={{ animationDelay: `${i * 80}ms` }}>
                <f.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-sm font-semibold mb-1">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="harga" className="pt-12 pb-24 px-6">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto">
          <div className="text-center mb-10 md:mb-16 reveal-up reveal">
            <div className="text-sm font-semibold text-gradient uppercase tracking-widest mb-3">Paket Harga</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="md:hidden">Pilihan Paket</span>
              <span className="hidden md:inline">Pilihan Paket</span>
            </h2>
          </div>
          <div
            ref={pricingScrollRef}
            className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-4 -mt-4 touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseEnter={() => isSliderPaused.current = true}
            onMouseLeave={() => { isSliderPaused.current = false; lastInteractionTime.current = Date.now(); }}
            onTouchStart={() => { isSliderPaused.current = true; lastInteractionTime.current = Date.now(); }}
            onTouchMove={() => lastInteractionTime.current = Date.now()}
            onTouchEnd={() => { isSliderPaused.current = false; lastInteractionTime.current = Date.now(); }}
            onTouchCancel={() => { isSliderPaused.current = false; lastInteractionTime.current = Date.now(); }}
          >
            {[...plans, ...plans, ...plans, ...plans].map((p, i) => (
              <div key={`${p.name}-${i}`} className={`glass-card rounded-2xl p-8 relative flex flex-col items-center text-center w-[85vw] md:w-[calc(33.333%-16px)] shrink-0 snap-center ${p.featured ? "ring-2 ring-primary/60" : ""} ${i === 0 ? "reveal-ltr reveal" : "reveal"}`} style={{ animationDelay: `${(i % plans.length) * 120}ms` }}>
                {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap" style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)" }}>Paling Populer</div>}
                <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold text-gradient">Rp {p.price}</span>
                  <span className="text-muted-foreground text-sm"> /proyek</span>
                </div>
                <ul className="space-y-3 mb-8 w-fit text-left">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/6283867180887?text=halo,saya%20tertarik%20ingin%20membuat%20aplikasi%0Apaket%20yg%20saya%20butuhkan%20adalah%20paket%20${p.name.toLowerCase()}%0A%0Asaya%20tertarik%20setelah%20melihat%20web%20ini%0A%0A%0Ahttps://elproject.studio`} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center mt-auto">Pilih Paket</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimoni" className="pt-12 pb-12 px-6">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto">
          <div className="text-center mb-10 md:mb-16 reveal-up reveal">
            <div className="text-sm font-semibold text-gradient uppercase tracking-widest mb-3">Testimoni</div>
            <h2 className="text-4xl md:text-5xl font-bold">Dipercaya oleh Owner & Perusahaan</h2>
          </div>
          <div
            ref={testimonialScrollRef}
            className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-4 touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseEnter={() => isSliderPaused.current = true}
            onMouseLeave={() => { isSliderPaused.current = false; lastInteractionTime.current = Date.now(); }}
            onTouchStart={() => { isSliderPaused.current = true; lastInteractionTime.current = Date.now(); }}
            onTouchMove={() => lastInteractionTime.current = Date.now()}
            onTouchEnd={() => { isSliderPaused.current = false; lastInteractionTime.current = Date.now(); }}
            onTouchCancel={() => { isSliderPaused.current = false; lastInteractionTime.current = Date.now(); }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div key={`${t.name}-${i}`} className={`glass-card rounded-2xl p-6 reveal w-[85vw] md:w-[calc(33.333%-16px)] shrink-0 snap-center`} style={{ animationDelay: `${(i % testimonials.length) * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={`star-${i}-${j}`} className={`w-4 h-4 ${j < (t.rating || 5) ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`} />
                  ))}
                </div>
                <p className="text-sm md:text-base text-foreground/90 mb-6">{t.text}</p>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="pt-12 pb-12 px-6">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto glass-card rounded-3xl px-6 py-12 md:p-16 text-center relative overflow-hidden reveal-up reveal">
          <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-glow)" }} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap membangun <span className="text-gradient">sesuatu yang hebat?</span></h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ceritakan ide Anda
            <span className="hidden md:inline"> — </span><br className="md:hidden" />
            konsultasi 100% gratis
            <span className="hidden md:inline"> — </span><br className="md:hidden" />
            Kami balas dalam 24 jam.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=elproject.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-primary">elproject@studio.id <ChevronRight className="w-4 h-4" /></a>
            <a href="https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio" target="_blank" rel="noopener noreferrer" className="btn-ghost">Chat WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 px-6 text-center text-[10px] md:text-xs text-muted-foreground transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] cursor-default">
        © 2026 EL PROJECT DEVELOPMENT BUILDER WEB APPS © 2026
      </footer>
    </div>
  );
}
