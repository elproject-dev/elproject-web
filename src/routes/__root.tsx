import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EL Project | Jasa Pembuatan Aplikasi Mobile, Web, Desktop & Server, Kursus Pemrograman Sampai Bisa, Mentoring Coding Programmer Profesional, Kelas Belajar Coding Pemula hingga Mahir" },
      { name: "description", content: "EL Project adalah penyedia jasa pembuatan aplikasi mobile (Android & iOS), desktop, website modern, pembuatan server, hingga konsultasi IT profesional." },
      { name: "keywords", content: "jasa pembuatan aplikasi, jasa pembuatan website, aplikasi mobile android, ios developer, bikin aplikasi desktop, web developer indonesia, konsultan it, jasa pembuatan server, konten kreatif, el project, elproject studio, software house, jasa pembuatan aplikasi jogja, jasa pembuatan website yogyakarta, software house jogja, web developer yogyakarta, bikin aplikasi android jogja, ios developer yogyakarta, pembuatan aplikasi kasir jogja, jasa it yogyakarta, developer aplikasi jogja, el project yogyakarta, elproject studio, konsultan it jogja, jasa pembuatan server yogyakarta, software house indonesia, jasa pembuatan aplikasi jakarta, jasa pembuatan website jakarta, software house jakarta, web developer jakarta, bikin aplikasi android jakarta, ios developer jakarta, pembuatan aplikasi kasir jakarta, jasa it jakarta, developer aplikasi jakarta, el project jakarta, elproject studio, konsultan it jakarta, jasa pembuatan server jakarta, software house jakarta" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "EL Project" },
      { property: "og:title", content: "EL Project | Layanan Profesional App & Web Development" },
      { property: "og:description", content: "Kami memberikan rekomendasi dan arahan terbaik untuk membangun aplikasi mobile, desktop, dan website modern demi kesuksesan bisnis Anda." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.elproject.studio/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EL Project | Jasa Pembuatan Aplikasi & Website" },
      { name: "twitter:description", content: "Solusi lengkap pembuatan aplikasi mobile, desktop, web apps, hingga server dan konsultasi bisnis." },
      { name: "twitter:image", content: "https://www.elproject.studio/og-image.jpg" },
      { name: "theme-color", content: "#000000" },
    ],
    links: [
      { rel: "canonical", href: "https://www.elproject.studio" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/icon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Outfit:wght@400;700;900&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "EL Project",
          "image": "https://www.elproject.studio/og-image.jpg",
          "url": "https://www.elproject.studio",
          "telephone": "+6283867180887",
          "priceRange": "Rp 1.000.000 - Custom",
          "knowsAbout": [
            "Layanan Kursus Pemrograman Sampai Bisa",
            "Mentoring Coding Programmer Profesional",
            "Kelas Belajar Coding Pemula hingga Mahir",
            "Layanan Jasa Pembuatan Aplikasi",
            "Layanan Jasa Pembuatan Aplikasi Costum",
            "Layanan Jasa Pembuatan Aplikasi Android",
            "Layanan Jasa Pembuatan Aplikasi iOS",
            "Layanan Jasa Pembuatan Aplikasi Dekstop",
            "Layanan Jasa Pembuatan Aplikasi Web",
            "Layanan Jasa Pembuatan Server",
            "Layanan Jasa Pembuatan Aplikasi AI",
            "Layanan Jasa Pembuatan Konten Kreatif",
            "Layanan Jasa Pengembangan Aplikasi",
            "Layanan Jasa Pembuatan Website",
            "Layanan Jasa Web Development",
            "Layanan Jasa iOS App Development",
            "Layanan Jasa Android App Development",
            "Layanan Jasa Desktop App Development",
            "Layanan Jasa Server Infrastructure",
            "Layanan Jasa IT Consulting",
            "Layanan Jasa Konsultasi Bisnis",
            "Jasa Pembuatan Aplikasi Android",
            "Jasa Pembuatan Aplikasi iOS",
            "Jasa Pembuatan Aplikasi Desktop",
            "Jasa Pembuatan Aplikasi Web",
            "Jasa Pembuatan Server",
            "Jasa Pembuatan Aplikasi AI",
            "Jasa Pembuatan Konten Kreatif",
            "Jasa Pengembangan Aplikasi",
            "Jasa Pembuatan Website",
            "Jasa Web Development",
            "Jasa iOS App Development",
            "Jasa Android App Development",
            "Jasa Desktop App Development",
            "Jasa Server Infrastructure",
            "Jasa IT Consulting",
            "Jasa Konsultasi Bisnis",
            "Pembuatan Aplikasi Mobile",
            "Pembuatan Aplikasi Android",
            "Pembuatan Aplikasi iOS",
            "Pembuatan Aplikasi Desktop",
            "Pembuatan Aplikasi Web",
            "Pembuatan Server",
            "Pembuatan Aplikasi AI",
            "Pembuatan Konten Kreatif",
            "Pengembangan Aplikasi",
            "Pembuatan Website",
            "Web Development",
            "iOS App Development",
            "Android App Development",
            "Desktop App Development",
            "Server Infrastructure",
            "IT Consulting",
            "Buat Aplikasi Sistem Antrean",
            "Buat Aplikasi POS",
            "Buat Aplikasi Toko Online",
            "Buat Aplikasi Marketplace",
            "Buat Aplikasi Restoran",
            "Buat Aplikasi E-Commerce",
            "Buat Aplikasi Kasir",
            "Buat Aplikasi Laundry",
            "Buat Aplikasi Bengkel",
            "Buat Aplikasi Salon",
            "Buat Aplikasi Barbershop",
            "Buat Aplikasi Klinik",
            "Buat Aplikasi Apotek",
            "Buat Aplikasi Rumah Sakit",
            "Buat Aplikasi Hotel",
            "Buat Aplikasi Villa",
            "Buat Aplikasi Kos",
            "Buat Aplikasi Kontrakan",
            "Jasa Pembuatan Aplikasi Sistem Antrean",
            "Jasa Pembuatan Aplikasi POS",
            "Jasa Pembuatan Aplikasi Toko Online",
            "Jasa Pembuatan Aplikasi Marketplace",
            "Jasa Pembuatan Aplikasi Restoran",
            "Jasa Pembuatan Aplikasi E-Commerce",
            "Jasa Pembuatan Aplikasi Kasir",
            "Jasa Pembuatan Aplikasi Laundry",
            "Jasa Pembuatan Aplikasi Bengkel",
            "Jasa Pembuatan Aplikasi Salon",
            "Jasa Pembuatan Aplikasi Barbershop",
            "Jasa Pembuatan Aplikasi Klinik",
            "Jasa Pembuatan Aplikasi Apotek",
            "Jasa Pembuatan Aplikasi Rumah Sakit",
            "Jasa Pembuatan Aplikasi Hotel",
            "Jasa Pembuatan Aplikasi Villa",
            "Jasa Pembuatan Aplikasi Kos",
            "Jasa Pembuatan Aplikasi Kontrakan",
            "Jasa Pembuatan Aplikasi Game",
            "Jasa Pembuatan Aplikasi Edukasi",
            "Jasa Pembuatan Aplikasi Kesehatan",
            "Jasa Pembuatan Aplikasi Keuangan",
            "Jasa Pembuatan Aplikasi Bisnis",
            "Jasa Pembuatan Aplikasi Pemerintah",
            "Jasa Pembuatan Aplikasi Sosial",
            "Jasa Pembuatan Aplikasi Hiburan",
            "Jasa Pembuatan Aplikasi Transportasi",
            "Jasa Pembuatan Aplikasi Sekolah",
            "Jasa Pembuatan Aplikasi Universitas",
            "Jasa Pembuatan Aplikasi Institusi Pendidikan",
            "Jasa Pembuatan Aplikasi Institusi Kesehatan",
            "Jasa Pembuatan Aplikasi Institusi Pemerintahan",
            "Jasa Pembuatan Aplikasi Institusi Swasta",
            "Jasa Pembuatan Aplikasi Institusi Militer",
            "Pembuatan Aplikasi Sistem Antrean",
            "Pembuatan Aplikasi POS",
            "Pembuatan Aplikasi Toko Online",
            "Pembuatan Aplikasi Marketplace",
            "Pembuatan Aplikasi Restoran",
            "Pembuatan Aplikasi E-Commerce",
            "Pembuatan Aplikasi Kasir",
            "Pembuatan Aplikasi Laundry",
            "Pembuatan Aplikasi Bengkel",
            "Pembuatan Aplikasi Salon",
            "Pembuatan Aplikasi Barbershop",
            "Pembuatan Aplikasi Klinik",
            "Pembuatan Aplikasi Apotek",
            "Pembuatan Aplikasi Rumah Sakit",
            "Pembuatan Aplikasi Hotel",
            "Pembuatan Aplikasi Villa",
            "Pembuatan Aplikasi Kos",
            "Pembuatan Aplikasi Kontrakan",
            "Pembuatan Aplikasi Game",
            "Pembuatan Aplikasi Edukasi",
            "Pembuatan Aplikasi Kesehatan",
            "Pembuatan Aplikasi Keuangan",
            "Pembuatan Aplikasi Bisnis",
            "Pembuatan Aplikasi Pemerintah",
            "Pembuatan Aplikasi Sosial",
            "Pembuatan Aplikasi Hiburan",
            "Pembuatan Aplikasi Transportasi",
            "Pembuatan Aplikasi Sekolah",
            "Pembuatan Aplikasi Universitas",
            "Pembuatan Aplikasi Institusi Pendidikan",
            "Pembuatan Aplikasi Institusi Kesehatan",
            "Pembuatan Aplikasi Institusi Pemerintahan",
            "Pembuatan Aplikasi Institusi Swasta",
            "Pembuatan Aplikasi Institusi Militer",
            "Pengembangan Aplikasi Sistem Antrean",
            "Pengembangan Aplikasi POS",
            "Pengembangan Aplikasi Toko Online",
            "Pengembangan Aplikasi Marketplace",
            "Pengembangan Aplikasi Restoran",
            "Pengembangan Aplikasi E-Commerce",
            "Pengembangan Aplikasi Kasir",
            "Pengembangan Aplikasi Laundry",
            "Pengembangan Aplikasi Bengkel",
            "Pengembangan Aplikasi Salon",
            "Pengembangan Aplikasi Barbershop",
            "Pengembangan Aplikasi Klinik",
            "Pengembangan Aplikasi Apotek",
            "Pengembangan Aplikasi Rumah Sakit",
            "Pengembangan Aplikasi Hotel",
            "Pengembangan Aplikasi Villa",
            "Pengembangan Aplikasi Kos",
            "Pengembangan Aplikasi Kontrakan",
            "Pengembangan Aplikasi Game",
            "Pengembangan Aplikasi Edukasi",
            "Pengembangan Aplikasi Kesehatan",
            "Pengembangan Aplikasi Keuangan",
            "Pengembangan Aplikasi Bisnis",
            "Pengembangan Aplikasi Pemerintah",
            "Pengembangan Aplikasi Sosial",
            "Pengembangan Aplikasi Hiburan",
            "Pengembangan Aplikasi Transportasi",
            "Pengembangan Aplikasi Sekolah",
            "Pengembangan Aplikasi Universitas",
            "Pengembangan Aplikasi Institusi Pendidikan",
            "Pengembangan Aplikasi Institusi Kesehatan",
            "Pengembangan Aplikasi Institusi Pemerintahan",
            "Pengembangan Aplikasi Institusi Swasta",
            "Pengembangan Aplikasi Institusi Militer",
            "Jasa Pengembangan Aplikasi Sistem Antrean",
            "Jasa Pengembangan Aplikasi POS",
            "Jasa Pengembangan Aplikasi Toko Online",
            "Jasa Pengembangan Aplikasi Marketplace",
            "Jasa Pengembangan Aplikasi Restoran",
            "Jasa Pengembangan Aplikasi E-Commerce",
            "Jasa Pengembangan Aplikasi Kasir",
            "Jasa Pengembangan Aplikasi Laundry",
            "Jasa Pengembangan Aplikasi Bengkel",
            "Jasa Pengembangan Aplikasi Salon",
            "Jasa Pengembangan Aplikasi Barbershop",
            "Jasa Pengembangan Aplikasi Klinik",
            "Jasa Pengembangan Aplikasi Apotek",
            "Jasa Pengembangan Aplikasi Rumah Sakit",
            "Jasa Pengembangan Aplikasi Hotel",
            "Jasa Pengembangan Aplikasi Villa",
            "Jasa Pengembangan Aplikasi Kos",
            "Jasa Pengembangan Aplikasi Kontrakan",
            "Jasa Pengembangan Aplikasi Game",
            "Jasa Pengembangan Aplikasi Edukasi",
            "Jasa Pengembangan Aplikasi Kesehatan",
            "Jasa Pengembangan Aplikasi Keuangan",
            "Jasa Pengembangan Aplikasi Bisnis",
            "Jasa Pengembangan Aplikasi Pemerintah",
            "Jasa Pengembangan Aplikasi Sosial",
            "Jasa Pengembangan Aplikasi Hiburan",
            "Jasa Pengembangan Aplikasi Transportasi",
            "Jasa Pengembangan Aplikasi Sekolah",
            "Jasa Pengembangan Aplikasi Universitas",
            "Jasa Pengembangan Aplikasi Institusi Pendidikan",
            "Jasa Pengembangan Aplikasi Institusi Kesehatan",
            "Jasa Pengembangan Aplikasi Institusi Pemerintahan",
            "Jasa Pengembangan Aplikasi Institusi Swasta",
            "Jasa Pengembangan Aplikasi Institusi Militer",
            "Jasa Pembuatan Aplikasi Sekolah",
            "Jasa Pembuatan Aplikasi Universitas",
            "Jasa Pembuatan Aplikasi Institusi Pendidikan",
            "Jasa Pembuatan Aplikasi Institusi Kesehatan",
            "Jasa Pembuatan Aplikasi Institusi Pemerintahan",
            "Jasa Pembuatan Aplikasi Institusi Swasta",
            "Jasa Pembuatan Aplikasi Institusi Militer",
            "Jasa Pembuatan Server",
            "Jasa Konsultasi Bisnis",
            "Jasa Pembuatan Konten Kreatif"
          ],
          "serviceArea": {
            "@type": "AdministrativeArea",
            "name": "Indonesia"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "ID",
            "areaServed": "Indonesia, Global",
            "telephone": "+6283867180887"
          },
          "hasMap": "https://maps.app.goo.gl/2Zz55g4VUP2fi1Ya6",
          "sameAs": [
            "https://www.instagram.com/elproject_development"
          ],
          "description": "Kami adalah salah satu penyedia layanan jasa pembuatan aplikasi mobile, dekstop, ios dan website, aplikasi mobile android, ios, desktop, serta web app. Kami menyediakan jasa pembuatan server juga, konsultasi bisnis, serta menyediakan jasa pembuatan Konten Kreatif. Kami akan memberikan rekomendasi dan arahan terbaik untuk bisnis Anda"
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Apa saja layanan yang disediakan oleh EL Project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "EL Project menyediakan jasa pembuatan aplikasi mobile (Android & iOS), aplikasi desktop (Windows, macOS, Linux), website modern (landing page, e-commerce, web app), pembuatan & manajemen server, serta konsultasi IT & bisnis profesional."
              }
            },
            {
              "@type": "Question",
              "name": "Bagaimana cara berkonsultasi atau memesan layanan di EL Project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Anda dapat menghubungi kami langsung melalui nomor WhatsApp resmi di +62 838 6718 0887 atau mengirim pesan langsung (DM) ke akun Instagram kami di @elproject_development."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa biaya pembuatan aplikasi atau website di EL Project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Biaya pengembangan bervariasi mulai dari Rp 1.000.000, tergantung pada kompleksitas fitur, platform yang digunakan (web, mobile, atau desktop), serta estimasi waktu pengerjaan. Kami selalu memberikan opsi penawaran terbaik yang sesuai dengan anggaran dan kebutuhan bisnis Anda."
              }
            },
            {
              "@type": "Question",
              "name": "Teknologi dan tools apa saja yang digunakan oleh EL Project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami menggunakan berbagai tumpukan teknologi dan tools modern seperti Javascript, React, SwiftUI, Next.js, Flutter, Node.js, Figma, AWS, Firebase, GitHub, Supabase, Canva, Python, TypeScript, TanStack Start, TailwindCSS, dan Nitro/Vercel serverless."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah EL Project menyediakan layanan pasca-pembuatan (maintenance & support)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, setiap proyek yang kami kerjakan dilengkapi dengan masa garansi pemeliharaan (maintenance) gratis untuk memastikan aplikasi berjalan lancar dan bebas dari bug. Kami juga menawarkan paket dukungan jangka panjang untuk pembaruan fitur atau kapasitas server."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah EL Project menyediakan kursus atau kelas belajar pemrograman?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami menyediakan layanan kursus dan mentoring belajar pemrograman intensif secara terarah dari pemula (nol) hingga tingkat mahir (sampai bisa) untuk menguasai teknologi modern sesuai standar kebutuhan industri."
              }
            }
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(() => {
        // SW registered successfully
      }).catch(() => {
        // SW registration may be blocked by browser extension or privacy settings — this is non-fatal
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Analytics debug={false} />
    </QueryClientProvider>
  );
}
