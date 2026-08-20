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
      { title: "Jasa Buat Aplikasi Mobile, Web, Desktop & Server | EL Project" },
      { name: "description", content: "Cari jasa buat aplikasi? EL Project menyediakan jasa pembuatan aplikasi mobile (Android & iOS), desktop, website modern, sistem ERP, hingga aplikasi kasir dengan harga terjangkau." },
      { name: "keywords", content: "jasa buat aplikasi, jasa buat aplikasi mobile, jasa buat aplikasi web, jasa buat aplikasi kasir, jasa pembuatan aplikasi, jasa pembuatan website, aplikasi mobile android, ios developer, bikin aplikasi desktop, web developer indonesia, konsultan it, jasa pembuatan server, konten kreatif, el project, elproject studio, software house, jasa pembuatan aplikasi jogja, jasa pembuatan website yogyakarta, software house jogja, web developer yogyakarta, bikin aplikasi android jogja, ios developer yogyakarta, pembuatan aplikasi kasir jogja, jasa it yogyakarta, developer aplikasi jogja, el project yogyakarta, elproject studio, konsultan it jogja, jasa pembuatan server yogyakarta, software house indonesia, jasa pembuatan aplikasi jakarta, jasa pembuatan website jakarta, software house jakarta, web developer jakarta, bikin aplikasi android jakarta, ios developer jakarta, pembuatan aplikasi kasir jakarta, jasa it jakarta, developer aplikasi jakarta, el project jakarta, elproject studio, konsultan it jakarta, jasa pembuatan server jakarta, software house jakarta" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "EL Project" },
      { property: "og:title", content: "Jasa Buat Aplikasi Mobile, Web, Desktop & Server | EL Project" },
      { property: "og:description", content: "Cari jasa buat aplikasi? EL Project menyediakan jasa pembuatan aplikasi mobile (Android & iOS), desktop, website modern, sistem ERP, hingga aplikasi kasir dengan harga terjangkau." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.elproject.studio/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jasa Buat Aplikasi Mobile, Web, Desktop & Server | EL Project" },
      { name: "twitter:description", content: "Cari jasa buat aplikasi? EL Project menyediakan jasa pembuatan aplikasi mobile, desktop, web apps, hingga server dan konsultasi bisnis." },
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
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W475F8Z5');`,
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-6VKWPQVQPQ",
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-6VKWPQVQPQ');`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Jasa Pembuatan Aplikasi & Software House Yogyakarta - EL Project",
          "image": "https://www.elproject.studio/og-image.jpg",
          "url": "https://www.elproject.studio",
          "telephone": "+6283867180887",
          "priceRange": "Rp 1.000.000 - Custom",
          "knowsAbout": [
            "Jasa Pembuatan Aplikasi",
            "Jasa Pembuatan Aplikasi Yogyakarta",
            "Jasa Pembuatan Website",
            "Software House Jogja",
            "Aplikasi Kasir POS",
            "Sistem ERP",
            "Pembuatan Aplikasi Android",
            "Pembuatan Aplikasi iOS",
            "Jasa Developer Aplikasi",
            "Konsultan IT"
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W475F8Z5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
