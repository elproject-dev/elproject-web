import { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const demos = [
  {
    title: "Sistem Poin - Manajemen Promo",
    desc: "Manajemen Promo dan Poin untuk Swalayan.",
    url: "https://maga-swalayan.vercel.app/",
  },
  {
    title: "Aplikasi Kasir & Manajemen Stok",
    desc: "Sistem POS lengkap dengan manajemen inventaris dan laporan penjualan.",
    url: "https://cashier-app-neon.vercel.app/",
  },
  {
    title: "Sistem Reservasi & Antrean Digital",
    desc: "Platform booking jadwal & antrean real-time.",
    url: "https://wa.me/6283867180887?text=Halo%20EL%20Project,%20saya%20tertarik%20mencoba%20demo%20Sistem%20Booking%20%26%20Antrean.",
  },
  {
    title: "Event ticket booking online",
    desc: "Pemesanan tiket event online ",
    url: "https://ticket-event-flame.vercel.app/",
  },
  {
    title: "Manajement Keuangan Arus Keluar Masuk",
    desc: "untuk mengelola arus keuangan bisnis,",
    url: "https://jmb-liart.vercel.app/",
  },
  {
    title: "Marketplace Aplikasi online shop",
    desc: "Jualan Online dengan fitur pengembangan",
    url: "https://toko-ungu.vercel.app/",
  },
  {
    title: "Aplikasi Nonton Movie Gratis",
    desc: "Nonton Movie Gratis",
    url: "https://movies.elproject.studio/",
  },
];

export function LiveDemoModal({ isOpen, onClose }: LiveDemoModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-background border border-border/50 rounded-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Purple top line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-purple-600 via-primary to-purple-400" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div>
            <h2 className="text-lg font-bold font-display text-foreground">
              Pilih <span className="text-gradient">Live Demo</span>
            </h2>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Coba langsung aplikasi yang kami kembangkan
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/40 mx-5" />

        {/* Demo List */}
        <div className="px-5 py-4 space-y-2.5 max-h-[60vh] overflow-y-auto scrollbar-none">
          {demos.map((demo) => (
            <a
              key={demo.title}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 p-3.5 rounded-xl border border-border/30 hover:border-primary/40 bg-white/[0.02] hover:bg-primary/[0.06] transition-all duration-200"
            >
              <div className="min-w-0">
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {demo.title}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                  {demo.desc}
                </div>
              </div>
              <div className="shrink-0 w-7 h-7 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all duration-200">
                <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-border/30 bg-white/[0.01]">
          <a
            href="https://wa.me/6283867180887?text=Halo%20EL%20Project,%20saya%20ingin%20meminta%20akses%20live%20demo%20custom."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Butuh demo lain? <span className="font-semibold text-primary">Hubungi kami</span>
          </a>
        </div>
      </div>
    </div>
  );
}
