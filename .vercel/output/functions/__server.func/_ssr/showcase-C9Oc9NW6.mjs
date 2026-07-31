import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronRight, a as Settings, b as CalendarCheck, c as School, d as Menu, f as LayoutTemplate, l as PenTool, m as Code, o as Server, p as Globe, r as ShoppingCart, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/showcase-C9Oc9NW6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var concepts = [
	{
		icon: ShoppingCart,
		title: "E-Commerce & Kasir (POS)",
		desc: "Aplikasi penjualan modern yang terintegrasi. Dilengkapi dengan manajemen stok real-time, laporan keuangan, scan barcode, dan dukungan multi-cabang.",
		tags: [
			"Web",
			"Mobile",
			"Desktop"
		],
		features: [
			"Manajemen Stok",
			"Laporan Keuangan",
			"Multi-cabang"
		]
	},
	{
		icon: School,
		title: "Sistem Manajemen Terpadu",
		desc: "Solusi digital untuk operasional sekolah, klinik, maupun perusahaan. Memudahkan administrasi, absensi, hingga rekapitulasi data secara otomatis.",
		tags: ["Web Apps", "ERP"],
		features: [
			"Absensi",
			"Rekap Data",
			"Portal Siswa/Pasien"
		]
	},
	{
		icon: LayoutTemplate,
		title: "Company Profile & Landing Page",
		desc: "Website profesional yang dirancang khusus untuk meningkatkan kredibilitas bisnis Anda, dengan animasi premium dan optimasi SEO tingkat tinggi.",
		tags: ["Web", "SEO"],
		features: [
			"Animasi Premium",
			"SEO Optimized",
			"Responsive"
		]
	},
	{
		icon: CalendarCheck,
		title: "Aplikasi Booking & Antrean",
		desc: "Sistem reservasi online yang meminimalkan antrean fisik. Cocok untuk klinik, salon, atau layanan jasa lainnya dengan notifikasi real-time.",
		tags: ["Mobile", "Web"],
		features: [
			"Reservasi Online",
			"Notifikasi WA",
			"Jadwal Real-time"
		]
	},
	{
		icon: Settings,
		title: "Admin Control System",
		desc: "Dashboard super admin untuk mengontrol seluruh aktivitas bisnis, metrik performa, dan manajemen pengguna dari satu tempat terpusat.",
		tags: ["Web Apps", "Dashboard"],
		features: [
			"Grafik Metrik",
			"Manajemen User",
			"Export Data"
		]
	},
	{
		icon: Server,
		title: "Pembuatan Server Bisnis",
		desc: "Infrastruktur server cloud maupun on-premise yang aman dan handal untuk menyimpan serta mengelola database perusahaan dengan proteksi tingkat tinggi.",
		tags: ["Server", "Database"],
		features: [
			"Security Setup",
			"Backup Otomatis",
			"Load Balancing"
		]
	},
	{
		icon: Code,
		title: "Custom Aplikasi Sesuai Ide",
		desc: "Punya ide unik yang belum ada di pasaran? Kami siap mewujudkannya dari tahap wireframe hingga menjadi produk nyata yang siap pakai.",
		tags: ["Custom", "Startups"],
		features: [
			"Konsultasi UI/UX",
			"API Integration",
			"Scalable"
		]
	},
	{
		icon: PenTool,
		title: "Desain Grafis & UI/UX",
		desc: "Layanan desain visual yang menarik dan berpusat pada pengguna untuk memperkuat branding perusahaan dan meningkatkan pengalaman interaksi.",
		tags: ["UI/UX", "Branding"],
		features: [
			"Prototyping",
			"Aset Visual",
			"Design System"
		]
	},
	{
		icon: Globe,
		title: "Pembuatan Web & Portal",
		desc: "Pengembangan website berskala besar, portal berita, atau platform komunitas dengan performa tinggi yang dirancang untuk menampung traffic besar.",
		tags: ["Web", "Portal"],
		features: [
			"High Performance",
			"CMS Terintegrasi",
			"Responsive"
		]
	}
];
function Showcase() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react.useState)(false);
	const fullText = "Berikut adalah beberapa contoh konsep aplikasi dan sistem yang biasa kami kembangkan untuk membantu digitalisasi berbagai jenis bisnis.";
	const [typedText, setTypedText] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let index = 0;
		const timer = setInterval(() => {
			if (index < 135) {
				setTypedText(fullText.substring(0, index + 1));
				index++;
			} else clearInterval(timer);
		}, 30);
		return () => clearInterval(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("in-view");
			});
		};
		const observer = new IntersectionObserver(observerCallback, {
			threshold: .1,
			rootMargin: "0px 0px -50px 0px"
		});
		document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-border/40 bg-background/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group font-display text-xl font-bold tracking-wider flex items-center relative pb-1 ml-0 md:ml-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative inline-block shine-text",
							"data-text": "ELPROJECT",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/90 transition-colors duration-300 group-hover:text-primary",
								children: "EL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "PROJECT"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-0 left-0 w-full h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300",
							style: { background: "var(--gradient-primary)" }
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "btn-primary !hidden lg:!flex text-sm !py-2 !px-12 mr-10",
							children: ["Konsultasi ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer",
							onClick: () => setIsMobileMenuOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-6 h-6" })
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `lg:hidden fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-background/60 backdrop-blur-md",
					onClick: () => setIsMobileMenuOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative w-full max-w-[85vw] glass-card border border-border/50 shadow-2xl rounded-3xl p-8 flex flex-col items-center transition-all duration-300 ${isMobileMenuOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "absolute top-4 right-4 p-2 bg-foreground/5 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer",
							onClick: () => setIsMobileMenuOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold text-gradient uppercase tracking-widest mb-8",
							children: "Menu Navigasi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex flex-col gap-5 text-center w-full",
							children: [
								[
									{
										href: "/#layanan",
										label: "Layanan"
									},
									{
										href: "/#kenapa",
										label: "Kenapa Kami"
									},
									{
										href: "/#harga",
										label: "Harga"
									},
									{
										href: "/#testimoni",
										label: "Testimoni"
									}
								].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: link.href,
									onClick: () => setIsMobileMenuOpen(false),
									className: "font-bold text-lg text-foreground/80 transition-all duration-300 hover:text-primary hover:scale-105",
									children: link.label
								}, link.href)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full h-px bg-border/50 my-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio",
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: () => setIsMobileMenuOpen(false),
									className: "btn-primary w-full justify-center !py-3 mt-2 shadow-[0_0_15px_var(--color-primary)]",
									children: "Konsultasi"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-32 pb-16 px-6 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto text-center reveal-up reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-white/5 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Konsep & Portofolio"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl md:text-6xl font-bold mb-6 tracking-tight",
							children: ["Konsep ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Aplikasi"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base md:text-lg text-muted-foreground max-w-2xl mx-auto min-h-[3rem] md:min-h-[3.5rem]",
							children: typedText
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-24 px-6 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: concepts.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card rounded-2xl p-8 reveal flex flex-col h-full",
						style: { animationDelay: `${i % 3 * 100}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
								style: { background: "var(--gradient-primary)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "w-7 h-7 text-white" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold mb-3",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground mb-6 flex-grow",
								children: c.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: c.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-semibold px-2 py-1 rounded-md bg-primary/10 text-primary uppercase tracking-wider",
										children: tag
									}, tag))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-t border-border/40 pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2",
										children: c.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2 text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1 h-1 rounded-full bg-primary/50" }), f]
										}, f))
									})
								})]
							})
						]
					}, c.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-12 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto glass-card rounded-3xl px-6 py-12 md:p-16 text-center relative overflow-hidden reveal-up reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 -z-10 opacity-60",
							style: { background: "var(--gradient-glow)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-[28px] md:text-4xl font-bold mb-4",
							children: [
								"Punya ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "ide aplikasi"
								}),
								" lain?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mb-8 max-w-2xl mx-auto",
							children: "Mari diskusikan kebutuhan spesifik Anda bersama kami."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-4 justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-primary",
								children: ["Konsultasi Gratis ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/40 py-8 px-6 text-center text-[10px] md:text-xs text-muted-foreground transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] cursor-default",
				children: "© 2026 EL PROJECT DEVELOPMENT BUILDER WEB APPS © 2026"
			})
		]
	});
}
//#endregion
export { Showcase as component };
