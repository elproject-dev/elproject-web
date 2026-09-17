import { X } from "lucide-react";

export interface DemoItem {
  id: string;
  title: string;
  description: string;
  url: string;
  isExternal?: boolean;
}

const DEMO_ITEMS: DemoItem[] = [
  {
    id: "maga-swalayan",
    title: "Maga Swalayan & Toko Online",
    description: "Platform swalayan & e-commerce modern dengan katalog produk, keranjang belanja, dan manajemen transaksi.",
    url: "https://maga-swalayan.vercel.app/",
  },
  {
    id: "erp-dashboard",
    title: "Dashboard ERP & Analytic Bisnis",
    description: "Dashboard executive monitoring performa bisnis, statistik realtime, dan manajemen karyawan.",
    url: "https://elproject-erppos.vercel.app",
    isExternal: false,
  },
  {
    id: "toko-ungu",
    title: "Toko Ungu - E-Commerce",
    description: "Website e-commerce & toko online interaktif dengan katalog produk, keranjang belanja, dan tampilan modern.",
    url: "https://toko-ungu.vercel.app/",
  },
  {
    id: "finance-cashflow",
    title: "Aplikasi Keuangan & Arus Kas",
    description: "Sistem pencatatan keuangan arus kas masuk & keluar, laporan keuangan bulanan, dan manajemen anggaran.",
    url: "https://jmb-liart.vercel.app/",
  },
  {
    id: "movies-app",
    title: "Aplikasi Streaming & Informasi Film",
    description: "Platform streaming film & hiburan dengan katalog bioskop, pencarian cepat, sinopsis, dan UI modern.",
    url: "https://movies.elproject.studio/",
  },
  {
    id: "ticket-event",
    title: "Sistem Tiket Event & Konser",
    description: "Platform pemesanan tiket event & konser online dengan sistem e-ticket, QR code check-in, dan manajemen tiket.",
    url: "https://ticket-event-flame.vercel.app/",
  },
  {
    id: "booking-app",
    title: "Sistem Booking & Antrean Digital",
    description: "Sistem reservasi jadwal otomatis untuk klinik, salon, bengkel, dan manajemen antrean pelanggan.",
    url: "https://wa.me/6283867180887?text=Halo%20Tembus%20Digital,%20saya%20tertarik%20mencoba%20demo%20Sistem%20Booking%20%26%20Antrean",
    isExternal: true,
  },
  {
    id: "custom-demo",
    title: "Minta Demo Custom / Konsultasi Gratis",
    description: "Membutuhkan sistem aplikasi dengan alur bisnis khusus? Konsultasikan ide Anda secara langsung.",
    url: "https://wa.me/6283867180887?text=Halo%20Tembus%20Digital,%20saya%20ingin%20meminta%20demo%20aplikasi%20custom%20sesuai%20kebutuhan%20bisnis%20saya",
    isExternal: true,
  },
];

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LiveDemoModal({ isOpen, onClose }: LiveDemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container - Purple Theme */}
      <div className="relative w-full max-w-2xl bg-[#0f0b17] border border-purple-500/30 rounded-2xl shadow-[0_0_50px_rgba(147,51,234,0.25)] overflow-hidden z-10 flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1e1333] via-[#160c28] to-[#0f0b17] p-5 border-b border-purple-500/20 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight">
              Pilih Live Demo Aplikasi
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/70 mt-0.5">
              Pilih salah satu demo sistem yang tersedia saat ini
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-purple-500/10 hover:bg-purple-500/25 text-purple-200 hover:text-white flex items-center justify-center transition-colors border border-purple-500/30 shrink-0"
            aria-label="Tutup Pop-up Demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo List Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 max-h-[60vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#0c0814]">
          {DEMO_ITEMS.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative bg-[#181226]/80 hover:bg-[#201736] border border-purple-500/20 hover:border-purple-500/60 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(147,51,234,0.2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-purple-500/15 flex justify-end">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex items-center justify-center px-4.5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all duration-200 shadow-md hover:shadow-purple-500/40 active:scale-95"
                  >
                    <span>{item.isExternal ? "Hubungi CS" : "Uji Coba Demo"}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="bg-[#130b21] px-5 py-3.5 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-purple-200/70">
          <p>Butuh aplikasi dengan desain &amp; fitur khusus?</p>
          <a
            href="https://wa.me/6283867180887?text=Halo%20Tembus%20Digital,%20saya%20ingin%20diskusi%20pembuatan%20aplikasi%20custom"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="text-purple-300 font-medium hover:text-white hover:underline flex items-center gap-1 transition-colors"
          >
            Konsultasi Gratis via WhatsApp ↗
          </a>
        </div>
      </div>
    </div>
  );
}
