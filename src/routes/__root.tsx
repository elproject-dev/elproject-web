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
      { title: "EL Project — Jasa Pembuatan Aplikasi Mobile, Web & iOS" },
      { name: "description", content: "Studio digital pro untuk pembuatan aplikasi mobile, web apps, iOS, dan website modern dengan desain premium." },
      { name: "keywords", content: "jasa pembuatan aplikasi, bikin aplikasi, web development, mobile apps development, iOS development, software house, el project, elproject studio" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "EL Project" },
      { property: "og:title", content: "EL Project — Pro App Development" },
      { property: "og:description", content: "Wujudkan aplikasi untuk bisnis Anda — kami membangun aplikasi mobile,ios,windows,android dan website modern untuk kemudahan pengguna" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.elproject.studio/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
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
          "@type": "LocalBusiness",
          "name": "EL Project",
          "image": "https://www.elproject.studio/og-image.jpg",
          "url": "https://www.elproject.studio",
          "telephone": "+6283867180887",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "ID"
          },
          "hasMap": "https://maps.app.goo.gl/2Zz55g4VUP2fi1Ya6",
          "sameAs": [
            "https://www.instagram.com/elproject_development"
          ],
          "description": "Kami adalah salah satu penyedia layanan jasa pembuatan aplikasi mobile,dekstop, ios dan website, aplikasi mobile android,ios,desktop,serta web app. Kami menyediakan jasa pembuatan server juga,konsultasi bisnis,serta menyediakan jasa pembuatan Konten Kreatif. Kami akan memberikan rekomendasi dan arahan terbaik untuk bisnis Anda"
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
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.error('ServiceWorker registration failed:', err);
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
