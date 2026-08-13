import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Menu, X, ArrowRight, ArrowLeft, Calendar, User } from "lucide-react";
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
    content: `Perkembangan Kecerdasan Buatan (AI) telah mengubah lanskap pengembangan web secara fundamental. Developer kini tidak lagi hanya menulis baris kode dari nol secara manual. Munculnya teknologi Generative AI seperti LLM (Large Language Model), asisten cerdas seperti GitHub Copilot, hingga framework no-code cerdas, secara drastis mempercepat siklus pengembangan perangkat lunak dan pembuatan purwarupa (prototype).

Namun, perkembangan teknologi ini tidak berarti bahwa profesi Web Developer akan hilang. Sebaliknya, peran developer berevolusi menjadi AI-Assisted Developer atau Software Architect. Kemampuan utama yang dibutuhkan bergeser dari sekadar menghafal sintaksis bahasa pemrograman ke arah pemikiran logis tingkat tinggi, merancang arsitektur sistem yang efisien, mengelola keamanan siber, dan memastikan skalabilitas infrastruktur cloud.

Di masa depan, integrasi AI ke dalam aplikasi web akan menjadi standar industri. Fitur-fitur seperti personalisasi dinamis secara real-time, deteksi anomali keamanan otomatis, hingga antarmuka berbasis suara akan menjadi fitur esensial. Bagi developer, tantangannya adalah terus beradaptasi dan belajar memanfaatkan tools AI ini untuk membangun produk digital yang lebih baik, lebih cepat, dan lebih aman bagi pengguna akhir. EL Project selalu siap membantu bisnis Anda menyelaraskan teknologi modern ini dengan solusi web masa depan yang tangguh.`,
    date: "12 Agustus 2026",
    author: "Artikel EL PROJECT",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
    category: "Teknologi"
  },
  {
    title: "5 Alasan Kenapa Bisnis Anda Butuh Aplikasi Kasir",
    excerpt: "Sistem Point of Sales (POS) bukan lagi kemewahan, melainkan kebutuhan dasar untuk bertahan di era digital yang serba cepat.",
    content: `Mengelola operasional bisnis secara manual di era serba digital ini memiliki risiko kesalahan manusia (human error) yang sangat tinggi. Sistem kasir modern atau Point of Sales (POS) hadir bukan hanya sebagai alat penerima pembayaran, tetapi sebagai pusat manajemen operasional bisnis Anda.

Alasan pertama pentingnya aplikasi kasir adalah akurasi dan kecepatan pencatatan transaksi secara real-time. Anda tidak perlu lagi menulis nota fisik atau menghitung sisa stok barang secara manual di akhir hari karena semuanya ter-update otomatis di cloud database. Kedua, aplikasi kasir meminimalisir potensi kebocoran keuangan akibat transaksi yang tidak tercatat dengan benar. Ketiga, POS menyediakan laporan analitik penjualan harian, mingguan, hingga bulanan yang akurat, membantu Anda mengambil keputusan bisnis strategis berbasis data, seperti mengidentifikasi produk terlaris atau menentukan masa promosi.

Keempat, kemudahan integrasi dengan berbagai metode pembayaran cashless (dompet digital, transfer bank, hingga QRIS) akan memperluas jangkauan pelanggan Anda. Terakhir, kepuasan pelanggan akan meningkat berkat proses checkout yang cepat dan profesional. Memiliki aplikasi kasir bukan lagi pengeluaran opsional, melainkan investasi strategis jangka panjang yang krusial bagi kesuksesan dan pertumbuhan bisnis Anda.`,
    date: "5 Agustus 2026",
    author: "Artikel EL PROJECT",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&auto=format&fit=crop",
    category: "Bisnis"
  },
  {
    title: "Optimasi SEO: Rahasia Tampil di Halaman Pertama Google",
    excerpt: "Pelajari langkah-langkah praktis dan fundamental teknis SEO untuk mendominasi hasil pencarian mesin penelusur.",
    content: `Memiliki website yang indah tidak akan memberikan dampak bisnis maksimal jika tidak ada pelanggan yang berkunjung. Di sinilah Search Engine Optimization (SEO) berperan penting sebagai jembatan yang menghubungkan bisnis Anda dengan ribuan calon pelanggan potensial yang aktif mencari solusi setiap harinya melalui Google.

Optimasi SEO dimulai dari riset kata kunci (keyword research) yang mendalam untuk memahami apa saja frasa yang sering dicari oleh audiens target Anda. Setelah itu, optimasi terbagi menjadi dua pilar utama: On-Page SEO dan Off-Page SEO. On-Page SEO fokus pada peningkatan kualitas konten di dalam website Anda sendiri, memastikan penggunaan heading terstruktur, penulisan meta title & description yang relevan, serta optimasi kecepatan loading halaman. Kecepatan situs adalah faktor krusial karena mesin pencari dan pengguna sangat tidak menyukai situs yang lambat diakses.

Pilar berikutnya adalah Technical SEO, yang mencakup pembuatan struktur URL yang bersih, penyediaan sitemap XML yang diperbarui, pengaktifan protokol HTTPS yang aman, serta keramahan tampilan mobile (mobile-friendliness). Di sisi lain, Off-Page SEO melibatkan pembangunan otoritas website melalui backlink berkualitas dari situs-situs terpercaya. Dengan menerapkan strategi SEO yang konsisten dan berbasis data, situs Anda akan secara organik naik ke peringkat pertama pencarian Google, membangun kepercayaan audiens, dan meningkatkan konversi penjualan Anda tanpa biaya iklan yang mahal.`,
    date: "28 Juli 2026",
    author: "Artikel EL PROJECT",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop",
    category: "Digital Marketing"
  },
  {
    title: "Konsep Belajar Coding Efektif: Mulai dari Mana?",
    excerpt: "Menavigasi jalur belajar pemrograman untuk pemula agar tidak terjebak dalam tutorial purgatory dan mulai membangun real-world projects.",
    content: `Bagi kebanyakan pemula, memulai belajar coding terasa seperti memasuki labirin yang sangat membingungkan karena banyaknya bahasa pemrograman dan teknologi yang terus berkembang. Langkah pertama yang paling krusial adalah memahami fondasi berpikir komputasional (computational thinking) dan algoritma dasar, bukan sekadar menghafal baris kode.

Sebelum memilih teknologi canggih, kuasailah dasar logika logika seperti variabel, tipe data, perulangan (loops), pengondisian (if-else), dan fungsi. Cobalah memulai dengan bahasa pemrograman yang ramah pemula namun banyak digunakan di industri, seperti JavaScript (untuk web) atau Python (untuk analisis data & scripting). Setelah memahami dasar-dasar ini, segera keluar dari jebakan 'tutorial purgatory'—kondisi di mana Anda terus-menerus menonton video tutorial tanpa pernah mencoba menulis kode sendiri.

Kunci utama belajar coding yang efektif adalah metode 'Learning by Doing'. Pilihlah satu proyek kecil yang sederhana, seperti aplikasi kalkulator, to-do list, atau web portofolio pribadi, lalu cobalah membangunnya dari nol. Ketika Anda mengalami error (yang merupakan hal yang sangat wajar bagi setiap programmer), mulailah belajar cara melakukan debugging dan memanfaatkan komunitas online seperti Stack Overflow atau dokumentasi resmi. Konsistensi latihan harian jauh lebih penting daripada belajar seharian penuh namun hanya sekali seminggu. Di EL Project, kami memandu para calon programmer dengan kurikulum praktis berbasis proyek agar Anda bisa belajar secara efektif hingga mahir.`,
    date: "22 Juli 2026",
    author: "Artikel EL PROJECT",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop",
    category: "Edukasi"
  },
  {
    title: "Rekomendasi Kursus Pemrograman Intensif di EL Project",
    excerpt: "Temukan program belajar coding dari nol hingga siap kerja (sampai bisa) bersama mentor berpengalaman di EL Project.",
    content: `Apakah Anda ingin beralih profesi menjadi software engineer profesional atau ingin mendalami keterampilan teknologi baru? EL Project menghadirkan solusi program kursus dan mentoring belajar pemrograman intensif yang dirancang secara terarah untuk membantu Anda menguasai keahlian coding secara praktis dari dasar sampai bisa.

Program kursus kami dirancang khusus dengan kurikulum berstandar industri terkini. Kami menawarkan tiga spesialisasi utama:
1. Full-Stack Web Development (menggunakan React, TypeScript, Node.js, dan TailwindCSS) untuk membangun aplikasi web modern dan dinamis.
2. Mobile App Development (menggunakan Flutter, Swift, dan Kotlin) untuk merancang aplikasi Android & iOS berkinerja tinggi.
3. Backend Engineering & Cloud Infrastructure (menggunakan Node.js, Go, Python, dan arsitektur database Supabase/PostgreSQL) untuk sistem berskala besar.

Sistem pembelajaran di EL Project berfokus pada bimbingan interaktif semi-privat yang dipandu langsung oleh mentor berpengalaman yang merupakan praktisi aktif di industri. Anda tidak hanya akan mempelajari teori, tetapi juga terlibat langsung dalam pengerjaan proyek nyata (real-world projects) yang nantinya dapat dijadikan portofolio berharga saat melamar pekerjaan. Kami juga memberikan sesi konsultasi karier untuk mempersiapkan Anda menghadapi proses interview kerja di dunia teknologi. Bergabunglah bersama kami di EL Project dan mulailah perjalanan karier teknologi Anda hari ini!`,
    date: "15 Juli 2026",
    author: "Artikel EL PROJECT",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
    category: "Edukasi"
  },
  {
    title: "Kenapa Belajar Javascript & TypeScript Sangat Penting di Tahun 2026?",
    excerpt: "Mengulas dominasi JavaScript dan TypeScript di era modern untuk frontend, mobile, hingga backend development.",
    content: `Dalam ekosistem pengembangan perangkat lunak modern, JavaScript dan TypeScript telah menempati posisi yang tak tergoyahkan sebagai teknologi paling populer dan krusial untuk dikuasai. Baik Anda fokus pada frontend, mobile, maupun backend development, kombinasi kedua teknologi ini menawarkan solusi yang sangat efisien dan skalabel.

JavaScript adalah satu-satunya bahasa pemrograman yang dapat berjalan secara bawaan di semua peramban (browser) web, menjadikannya tulang punggung dari semua interaksi visual di internet. Namun, seiring dengan kompleksitas aplikasi web yang terus meningkat, TypeScript hadir sebagai solusi cerdas. TypeScript menambahkan fitur pengetikan statis (static typing) di atas JavaScript. Hal ini memungkinkan pendeteksian kesalahan kode (bug) secara dini selama proses penulisan kode, sebelum aplikasi tersebut dijalankan atau dideploy ke server produksi.

Menguasai JavaScript dan TypeScript memberikan Anda kebebasan untuk berpindah ekosistem dengan sangat mudah. Di sisi frontend, Anda dapat membangun aplikasi interaktif dengan framework populer seperti React, Next.js, atau Vue. Di sisi backend, Anda dapat menggunakan Node.js untuk menangani API server. Keahlian dalam TypeScript sangat diminati oleh startup teknologi maupun perusahaan besar karena kemampuannya meningkatkan produktivitas tim dan kualitas kode dalam proyek berskala besar.`,
    date: "08 Juli 2026",
    author: "Artikel EL PROJECT",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    category: "Teknologi"
  },
  {
    title: "Mengenal Backend-as-a-Service (BaaS) dengan Supabase",
    excerpt: "Bagaimana Supabase membantu developer mempercepat pembuatan aplikasi tanpa harus setup database manual dari awal.",
    content: `Bagi pengembang aplikasi mandiri (indie hacker) maupun tim startup kecil, kecepatan meluncurkan produk ke pasar (time-to-market) adalah faktor penentu kesuksesan. Backend-as-a-Service (BaaS) hadir untuk mengatasi hambatan tersebut, dan Supabase saat ini diakui sebagai salah satu platform BaaS open-source terbaik yang sangat populer.

Supabase sering kali disebut sebagai alternatif open-source dari Google Firebase, tetapi dengan keunggulan yang unik: Supabase dibangun di atas database relasional PostgreSQL yang sangat kuat dan terpercaya. Supabase menyediakan berbagai fitur siap pakai yang biasanya memakan waktu berbulan-bulan untuk dikembangkan sendiri dari nol. Fitur tersebut meliputi sistem otentikasi pengguna (authentication) yang aman dengan berbagai pilihan sosial login, penyimpanan file (storage) untuk gambar dan dokumen, API RESTful dan GraphQL yang dibuat secara otomatis, serta database real-time yang langsung sinkron secara instan.

Dengan menggunakan Supabase, Anda dapat menghemat waktu dan sumber daya finansial secara signifikan karena tidak perlu menyewa backend developer khusus untuk setup server, database, dan sistem keamanan dasar secara manual. Fokus utama Anda dapat dialihkan sepenuhnya untuk menyempurnakan antarmuka pengguna (frontend) dan fitur utama produk. EL Project merekomendasikan penggunaan Supabase bagi proyek-proyek modern untuk memastikan performa yang cepat, biaya operasional yang efisien, serta kemudahan pengembangan di masa depan.`,
    date: "01 Juli 2026",
    author: "Artikel EL PROJECT",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop",
    category: "Teknologi"
  },
  {
    title: "Mengenal Jenis-Jenis Aplikasi yang Biasa Dibuat oleh Developer",
    excerpt: "Pahami macam-macam produk digital dari aplikasi kasir, sistem antrean, toko online, hingga software enterprise yang dikembangkan developer.",
    content: `Dunia pengembangan perangkat lunak (software development) mencakup berbagai jenis produk digital yang dirancang untuk kebutuhan yang sangat spesifik. Sebagai pelaku bisnis atau calon klien, penting untuk mengenali berbagai macam aplikasi yang biasa dikembangkan oleh pengembang software.

Pertama, ada Aplikasi Kasir (Point of Sales/POS) dan Sistem Manajemen Inventaris yang berfungsi untuk mengotomatisasi pencatatan stok dan transaksi komersial secara instan. Kedua, Toko Online (E-Commerce) dan Marketplace yang memungkinkan transaksi jual-beli berjalan secara online dengan integrasi Payment Gateway dan jasa ekspedisi. Ketiga, Aplikasi Sistem Antrean Digital yang biasa diterapkan pada klinik, rumah sakit, perbankan, maupun kantor pelayanan publik guna mengoptimalkan alur pelayanan secara efisien.

Keempat, Aplikasi Kustom Enterprise (ERP/CRM) yang membantu bisnis skala besar mengelola data karyawan, operasional rantai pasokan (supply chain), hingga hubungan pelanggan. Terakhir, ada Aplikasi berbasis Internet of Things (IoT) dan integrasi kecerdasan buatan (AI) yang menghubungkan perangkat keras cerdas dengan sistem kontrol berbasis awan (cloud). Di EL Project, kami memiliki spesialisasi dan pengalaman luas dalam merancang dan membangun seluruh kategori aplikasi tersebut untuk menunjang pertumbuhan bisnis Anda.`,
    date: "24 Juni 2026",
    author: "Artikel EL PROJECT",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop",
    category: "Bisnis"
  },
  {
    title: "Pentingnya Maintenance Jangka Panjang bagi Aplikasi Bisnis",
    excerpt: "Aplikasi yang sukses tidak berhenti setelah launching. Pahami kenapa pemeliharaan berkala sangat krusial untuk kestabilan sistem.",
    content: `Meluncurkan website atau aplikasi ke publik barulah langkah awal dari siklus hidup sebuah produk digital. Banyak pelaku bisnis melakukan kesalahan dengan mengabaikan fase pasca-peluncuran, menganggap bahwa aplikasi yang sudah berjalan lancar tidak lagi membutuhkan perawatan. Pada kenyataannya, pemeliharaan jangka panjang (maintenance) adalah kunci utama untuk menjaga stabilitas, keamanan, dan relevansi bisnis Anda.

Alasan paling mendasar pentingnya maintenance adalah keamanan siber. Peretas (hackers) selalu menemukan celah keamanan baru setiap harinya. Tanpa adanya pembaruan (patching) berkala pada sistem operasi server, database, dan library pihak ketiga, aplikasi bisnis Anda akan rentan terhadap serangan siber dan pencurian data sensitif pelanggan. Selain itu, seiring dengan pertumbuhan bisnis, jumlah data transaksi dan pengguna yang masuk ke dalam database akan terus bertambah. Maintenance rutin membantu melakukan optimasi database dan server agar aplikasi tidak mengalami kelambatan akses (loading lama) saat diakses oleh banyak pengguna secara bersamaan.

Selain keamanan dan performa, pemeliharaan berkala juga diperlukan untuk memastikan aplikasi Anda tetap kompatibel dengan pembaruan perangkat keras dan sistem operasi terbaru (seperti pembaruan iOS dan Android terbaru). Dengan melakukan investasi pada paket maintenance jangka panjang dari pengembang profesional seperti EL Project, Anda dapat mengantisipasi masalah sebelum terjadi (preventive maintenance), meminimalisir waktu gangguan sistem (downtime), serta memastikan investasi produk digital Anda terus memberikan nilai bisnis yang optimal bagi masa depan perusahaan.`,
    date: "17 Juni 2026",
    author: "Artikel EL PROJECT",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop",
    category: "Bisnis"
  }
];function BlogPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPostIndex]);

  const activePost = selectedPostIndex !== null ? blogPosts[selectedPostIndex] : null;

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary">
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
            <Link to="/" className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">Beranda</Link>
            <a href="/#portofolio" className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">Konsep</a>
            <Link to="/blog" className="text-sm font-bold text-gradient hover:opacity-80 transition-opacity">Wawasan</Link>
          </nav>

          <div className="flex items-center justify-end lg:w-1/3">
            <a href="https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio" target="_blank" rel="noopener noreferrer" className="btn-primary !hidden lg:!flex text-sm !py-2 !px-12 mr-10">Konsultasi <ChevronRight className="w-4 h-4" /></a>
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
        <div className="absolute inset-0 bg-background/60 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`relative w-full max-w-[85vw] glass-card border border-border/50 shadow-2xl rounded-3xl p-8 flex flex-col items-center transition-all duration-300 ${isMobileMenuOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}`}>
          <button className="absolute top-4 right-4 p-2 bg-foreground/5 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} aria-label="Tutup menu navigasi">
            <X className="w-5 h-5" />
          </button>
          <div className="text-xs font-semibold text-gradient uppercase tracking-widest mb-8">Menu Navigasi</div>
          <nav className="flex flex-col gap-5 text-center w-full">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-foreground/80 transition-all duration-300 hover:text-primary hover:scale-105">Beranda</Link>
            <a href="/#portofolio" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-foreground/80 transition-all duration-300 hover:text-primary hover:scale-105">Konsep</a>
            <Link to="/blog" onClick={() => { setSelectedPostIndex(null); setIsMobileMenuOpen(false); }} className="font-bold text-lg text-gradient hover:opacity-80 transition-all duration-300 hover:scale-105">Wawasan</Link>
            <div className="w-full h-px bg-border/50 my-2" />
            <a href="https://wa.me/6283867180887?text=halo" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full justify-center !py-3 mt-2 shadow-[0_0_15px_var(--color-primary)]">
              Konsultasi
            </a>
          </nav>
        </div>
      </div>

      {activePost ? (
        /* DETAIL VIEW SECTION */
        <section className="pt-32 pb-24 px-6 relative max-w-[96vw] 2xl:max-w-[800px] mx-auto z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] -z-10 pointer-events-none opacity-45" />
          
          <button
            onClick={() => setSelectedPostIndex(null)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </button>

          <div className="h-64 md:h-96 w-full overflow-hidden rounded-2xl relative border border-border/40 mb-8">
            <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 uppercase tracking-wider shadow-sm">
                {activePost.category}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
            <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activePost.date}</div>
            <div className="font-semibold text-foreground/80">{activePost.author}</div>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold mb-6 tracking-tight leading-tight">
            {activePost.title}
          </h1>

          <div className="w-full h-px bg-border/40 my-6" />

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground whitespace-pre-line mb-10">
            {activePost.content}
          </p>

          <div className="glass-card p-6 md:p-8 rounded-2xl border-primary/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10" />
            <h4 className="text-lg md:text-xl font-bold mb-3">Tertarik Belajar Pemrograman Bersama Kami?</h4>
            <p className="text-xs md:text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Daftar kelas kursus / mentoring privat intensif sekarang juga di EL Project dan kuasai coding sampai bisa!
            </p>
            <a
              href={`https://wa.me/6283867180887?text=Halo%20EL%20Project,%20saya%20tertarik%20mengikuti%20kursus%20pemrograman%20setelah%20membaca%20artikel%20"${encodeURIComponent(activePost.title)}"`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex text-xs md:text-sm !py-2.5 !px-8 cursor-pointer"
            >
              Hubungi Mentor via WhatsApp <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      ) : (
        /* GRID VIEW SECTION */
        <>
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
                      <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 uppercase tracking-wider shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</div>
                      <div>{post.author}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>
                    <div className="mt-auto">
                      <button
                        onClick={() => setSelectedPostIndex(i)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                      >
                        Baca Selengkapnya <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-8 px-6 text-center text-[10px] md:text-xs text-muted-foreground transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] cursor-default">
        © 2026 EL PROJECT DEVELOPMENT BUILDER WEB APPS © 2026
      </footer>
    </main>
  );
}
