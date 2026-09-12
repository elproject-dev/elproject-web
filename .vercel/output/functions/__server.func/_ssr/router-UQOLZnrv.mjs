import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as lazyRouteComponent, d as Link, f as useRouter, i as HeadContent, l as createFileRoute, o as createRouter, r as Scripts, s as Outlet, u as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Analytics } from "../_libs/vercel__analytics.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-UQOLZnrv.js
var router_UQOLZnrv_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BhXPqROq.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Jasa Buat Aplikasi Mobile, Web, Desktop & Server | EL Project" },
			{
				name: "description",
				content: "Cari jasa buat aplikasi? EL Project menyediakan jasa pembuatan aplikasi mobile (Android & iOS), desktop, website modern, sistem ERP, hingga aplikasi kasir dengan harga terjangkau."
			},
			{
				name: "keywords",
				content: "jasa buat aplikasi, jasa buat aplikasi mobile, jasa buat aplikasi web, jasa buat aplikasi kasir, jasa pembuatan aplikasi, jasa pembuatan website, aplikasi mobile android, ios developer, bikin aplikasi desktop, web developer indonesia, konsultan it, jasa pembuatan server, konten kreatif, el project, elproject studio, software house, jasa pembuatan aplikasi jogja, jasa pembuatan website yogyakarta, software house jogja, web developer yogyakarta, bikin aplikasi android jogja, ios developer yogyakarta, pembuatan aplikasi kasir jogja, jasa it yogyakarta, developer aplikasi jogja, el project yogyakarta, elproject studio, konsultan it jogja, jasa pembuatan server yogyakarta, software house indonesia, jasa pembuatan aplikasi jakarta, jasa pembuatan website jakarta, software house jakarta, web developer jakarta, bikin aplikasi android jakarta, ios developer jakarta, pembuatan aplikasi kasir jakarta, jasa it jakarta, developer aplikasi jakarta, el project jakarta, elproject studio, konsultan it jakarta, jasa pembuatan server jakarta, software house jakarta"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "author",
				content: "EL Project"
			},
			{
				property: "og:title",
				content: "Jasa Buat Aplikasi Mobile, Web, Desktop & Server | EL Project"
			},
			{
				property: "og:description",
				content: "Cari jasa buat aplikasi? EL Project menyediakan jasa pembuatan aplikasi mobile (Android & iOS), desktop, website modern, sistem ERP, hingga aplikasi kasir dengan harga terjangkau."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "https://www.elproject.studio/og-image.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Jasa Buat Aplikasi Mobile, Web, Desktop & Server | EL Project"
			},
			{
				name: "twitter:description",
				content: "Cari jasa buat aplikasi? EL Project menyediakan jasa pembuatan aplikasi mobile, desktop, web apps, hingga server dan konsultasi bisnis."
			},
			{
				name: "twitter:image",
				content: "https://www.elproject.studio/og-image.jpg"
			},
			{
				name: "theme-color",
				content: "#000000"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://www.elproject.studio"
			},
			{
				rel: "manifest",
				href: "/manifest.json"
			},
			{
				rel: "icon",
				href: "/icon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/icon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Outfit:wght@400;700;900&display=swap"
			}
		],
		scripts: [
			{ children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W475F8Z5');` },
			{
				src: "https://www.googletagmanager.com/gtag/js?id=G-6VKWPQVQPQ",
				async: true
			},
			{ children: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-6VKWPQVQPQ');` },
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
					"sameAs": ["https://www.instagram.com/elproject_development"],
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
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				src: "https://www.googletagmanager.com/ns.html?id=GTM-W475F8Z5",
				height: "0",
				width: "0",
				style: {
					display: "none",
					visibility: "hidden"
				}
			}) }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	(0, import_react.useEffect)(() => {
		if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").then(() => {}).catch(() => {});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Analytics, { debug: false })]
	});
}
var $$splitComponentImporter$1 = () => import("./routes-BCRnpOQV.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Jasa Pembuatan Aplikasi Mobile & Website Yogyakarta | EL Project" },
		{
			name: "description",
			content: "Layanan jasa pembuatan aplikasi mobile (Android, iOS), web apps, software custom, dan website profesional di Yogyakarta. Developer terpercaya untuk bisnis Anda."
		},
		{
			name: "keywords",
			content: "jasa pembuatan aplikasi, jasa pembuatan aplikasi Yogyakarta, jasa buat aplikasi jogja, software house jogja, developer aplikasi, pembuatan website, aplikasi kasir"
		},
		{
			property: "og:image",
			content: "https://www.elproject.studio/og-image.jpg"
		},
		{
			name: "twitter:image",
			content: "https://www.elproject.studio/og-image.jpg"
		},
		{
			name: "robots",
			content: "max-image-preview:large"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog-Dse8uOQ5.mjs");
var Route = createFileRoute("/blog")({
	head: () => ({ meta: [{ title: "Blog & Artikel — EL Project" }, {
		name: "description",
		content: "Kumpulan artikel, tips digital marketing, dan wawasan teknologi terbaru dari EL Project."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	BlogRoute: Route.update({
		id: "/blog",
		path: "/blog",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter, router_UQOLZnrv_exports as t };
