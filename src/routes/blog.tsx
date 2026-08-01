import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Menu, X, ArrowRight, Calendar, User } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Artikel — EL Project" },
      { name: "description", content: "Kumpulan artikel, tips digital marketing, dan wawasan teknologi terbaru dari EL Project." },
    ],
  }),
  component: BlogPage,
});

const blogPosts = [
  {
    title: "Masa Depan Web Development di Era AI",
    excerpt: "Bagaimana Artificial Intelligence mengubah cara developer membangun aplikasi dan website modern di tahun mendatang.",
    date: "12 Agustus 2026",
    author: "Tim EL Project",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    category: "Teknologi"
  },
  {
    title: "5 Alasan Kenapa Bisnis Anda Butuh Aplikasi Kasir",
    excerpt: "Sistem Point of Sales (POS) bukan lagi kemewahan, melainkan kebutuhan dasar untuk bertahan di era digital yang serba cepat.",
    date: "5 Agustus 2026",
    author: "Tim EL Project",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
    category: "Bisnis"
  },
  {
    title: "Optimasi SEO: Rahasia Tampil di Halaman Pertama Google",
    excerpt: "Pelajari langkah-langkah praktis dan fundamental teknis SEO untuk mendominasi hasil pencarian mesin penelusur.",
    date: "28 Juli 2026",
    author: "Tim EL Project",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop",
    category: "Digital Marketing"
  }
];

function BlogPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-border/40 bg-background/60">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="group font-display text-xl font-bold tracking-wider flex items-center relative pb-1 ml-0 md:ml-12">
              <span className="relative inline-block shine-text" data-text="ELPROJECT">
                <span className="text-foreground/90 transition-colors duration-300 group-hover:text-primary">EL</span>
                <span className="text-gradient">PROJECT</span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" style={{ background: "var(--gradient-primary)" }} />
            </Link>
            
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Home</Link>
              <Link to="/showcase" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Portofolio</Link>
              <Link to="/blog" className="text-sm font-medium text-primary transition-colors">Blog</Link>
            </nav>
          </div>

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
        <div className="absolute inset-0 bg-background/60 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`relative w-full max-w-[85vw] glass-card border border-border/50 shadow-2xl rounded-3xl p-8 flex flex-col items-center transition-all duration-300 ${isMobileMenuOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}`}>
          <button className="absolute top-4 right-4 p-2 bg-foreground/5 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-5 h-5" />
          </button>
          <div className="text-xs font-semibold text-gradient uppercase tracking-widest mb-8">Menu Navigasi</div>
          <nav className="flex flex-col gap-5 text-center w-full">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-foreground/80 transition-all duration-300 hover:text-primary hover:scale-105">Home</Link>
            <Link to="/showcase" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-foreground/80 transition-all duration-300 hover:text-primary hover:scale-105">Portofolio</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-primary transition-all duration-300 hover:scale-105">Blog</Link>
            <div className="w-full h-px bg-border/50 my-2" />
            <a href="https://wa.me/6283867180887?text=halo" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full justify-center !py-3 mt-2 shadow-[0_0_15px_var(--color-primary)]">
              Konsultasi
            </a>
          </nav>
        </div>
      </div>

      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50" />
        <div className="w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto text-center reveal-up reveal in-view">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-white/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Artikel & Tips</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Wawasan <span className="text-gradient">Digital</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan artikel terbaru seputar teknologi, panduan bisnis, dan strategi digital marketing untuk mengembangkan usaha Anda.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-24 px-6 relative z-10">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:border-primary/50 transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-primary text-primary-foreground uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</div>
                  <div className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>
                <div className="mt-auto">
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    Baca Selengkapnya <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-8 px-6 text-center text-[10px] md:text-xs text-muted-foreground transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] cursor-default">
        © 2026 EL PROJECT DEVELOPMENT BUILDER WEB APPS © 2026
      </footer>
    </div>
  );
}
