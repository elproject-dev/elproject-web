import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronRight, a as Settings, b as CalendarCheck, c as School, d as Menu, f as LayoutTemplate, g as ClockArrowUp, h as CodeXml, i as Shield, l as PenTool, m as Code, n as Star, o as Server, p as Globe, r as ShoppingCart, s as Search, t as X, u as Palette, v as ChartLine, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as LuPaintbrushVertical } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BCRnpOQV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal, .reveal-ltr, .reveal-up");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("in-view");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .15 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
var demos = [
	{
		title: "Sistem Poin - Manajemen Promo",
		desc: "Manajemen Promo dan Poin untuk Swalayan.",
		url: "https://maga-swalayan.vercel.app/"
	},
	{
		title: "Aplikasi Kasir & Manajemen Stok",
		desc: "Sistem POS lengkap dengan manajemen inventaris dan laporan penjualan.",
		url: "https://cashier-app-neon.vercel.app/"
	},
	{
		title: "Sistem Reservasi & Antrean Digital",
		desc: "Platform booking jadwal & antrean real-time.",
		url: "https://wa.me/6283867180887?text=Halo%20EL%20Project,%20saya%20tertarik%20mencoba%20demo%20Sistem%20Booking%20%26%20Antrean."
	},
	{
		title: "Event ticket booking online",
		desc: "Pemesanan tiket event online ",
		url: "https://ticket-event-flame.vercel.app/"
	},
	{
		title: "Manajement Keuangan Arus Keluar Masuk",
		desc: "untuk mengelola arus keuangan bisnis,",
		url: "https://jmb-liart.vercel.app/"
	},
	{
		title: "Marketplace Aplikasi online shop",
		desc: "Jualan Online dengan fitur pengembangan",
		url: "https://toko-ungu.vercel.app/"
	},
	{
		title: "Aplikasi Nonton Movie Gratis",
		desc: "Nonton Movie Gratis",
		url: "https://movies.elproject.studio/"
	}
];
function LiveDemoModal({ isOpen, onClose }) {
	(0, import_react.useEffect)(() => {
		const handleKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKey);
		} else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKey);
		};
	}, [isOpen, onClose]);
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 bg-black/70 backdrop-blur-sm",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md bg-background border border-border/50 rounded-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-300",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[2px] w-full bg-gradient-to-r from-purple-600 via-primary to-purple-400" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-5 pt-5 pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-lg font-bold font-display text-foreground",
						children: ["Pilih ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Live Demo"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground mt-0.5",
						children: "Coba langsung aplikasi yang kami kembangkan"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors cursor-pointer",
						"aria-label": "Tutup",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border/40 mx-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 py-4 space-y-2.5 max-h-[60vh] overflow-y-auto scrollbar-none",
					children: demos.map((demo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: demo.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group flex items-center justify-between gap-3 p-3.5 rounded-xl border border-border/30 hover:border-primary/40 bg-white/[0.02] hover:bg-primary/[0.06] transition-all duration-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate",
								children: demo.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground mt-0.5 leading-relaxed",
								children: demo.desc
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 w-7 h-7 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" })
						})]
					}, demo.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 py-3.5 border-t border-border/30 bg-white/[0.01]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://wa.me/6283867180887?text=Halo%20EL%20Project,%20saya%20ingin%20meminta%20akses%20live%20demo%20custom.",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "block text-center text-xs text-muted-foreground hover:text-primary transition-colors",
						children: ["Butuh demo lain? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-primary",
							children: "Hubungi kami"
						})]
					})
				})
			]
		})]
	});
}
var services = [
	{
		icon: Globe,
		title: "Web Development",
		desc: "Pembuatan website modern, responsif, dan SEO-friendly",
		tag: "React · Next.js · WordPress",
		bgImage: "/source_code_indonesia.webp"
	},
	{
		icon: Server,
		title: "Build Server",
		desc: "pembuatan server database untuk kebutuhan data bisnis",
		tag: "Database · Network · Security",
		bgImage: "/server_bg2.webp"
	},
	{
		icon: CodeXml,
		title: "Development Apps",
		desc: "Pembuatan aplikasi modern untuk semua bisnis digital",
		tag: "Android · Windows · macOS · Linux",
		bgImage: "/mobile-dummy1.webp"
	},
	{
		icon: Search,
		title: "SEO Optimization",
		desc: "Tingkatkan peringkat website Anda di mesin pencarian",
		tag: "On-Page · Off-Page · Technical",
		bgImage: "/seo_indonesia.webp"
	},
	{
		icon: LuPaintbrushVertical,
		title: "Graphic Design",
		desc: "Desain visual yang menarik untuk memperkuat branding.",
		tag: "UI/UX · Branding · Canva · Figma",
		bgImage: "/desain_indo.webp"
	},
	{
		icon: ChartLine,
		title: "Business Consulting",
		desc: "Konsultasi bisnis terpercaya untuk identifikasi usaha",
		tag: "Strategy · Operations · Management",
		bgImage: "/consulting_indonesia.webp"
	}
];
var features = [
	{
		icon: ClockArrowUp,
		title: "Pengembangan Cepat",
		desc: "Sprint agile 1 minggu dengan demo rutin agar progress selalu terlihat dan realtime.",
		bgImage: "/pengembangan_cepat.webp"
	},
	{
		icon: Shield,
		title: "Kualitas Terjamin",
		desc: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Hasil terima rapi,sistem di sempurnakan ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:inline" }),
			"Garansi bug 30 hari pasca rilis."
		] }),
		bgImage: "/qa_indonesia.webp"
	},
	{
		icon: CodeXml,
		title: "Source Code Anda",
		desc: "Anda memiliki 100% source code, dokumentasi lengkap, dan hak intelektual.",
		bgImage: "/source_code_indonesia.webp"
	},
	{
		icon: Palette,
		title: "Desain Premium",
		desc: "UI/UX global di dukung desainer berpengalaman kelas internasional",
		bgImage: "/uiux_premium.webp"
	}
];
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
		],
		bgImage: "/pos_concept.webp"
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
		],
		bgImage: "/academic_concept.webp"
	},
	{
		icon: LayoutTemplate,
		title: "Company & Landing Page",
		desc: "Website profesional yang dirancang khusus untuk meningkatkan kredibilitas bisnis Anda, dengan animasi premium dan optimasi SEO tingkat tinggi.",
		tags: ["Web", "SEO"],
		features: [
			"Animasi Premium",
			"SEO Optimized",
			"Responsive"
		],
		bgImage: "/media_concept.webp"
	},
	{
		icon: CalendarCheck,
		title: "Aplikasi Booking & Antrean",
		desc: "Sistem reservasi online yang meminimalkan antrean fisik. Cocok untuk klinik, salon, atau layanan jasa lainnya dengan notifikasi real-time.",
		tags: ["Mobile", "Web"],
		features: [
			"Reservasi Online",
			"Sistem Antrean Digital",
			"Jadwal Real-time"
		],
		bgImage: "/booking_app.webp"
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
		],
		bgImage: "/erp_concept.webp"
	},
	{
		icon: Server,
		title: "Pembuatan Server Bisnis",
		desc: "Pembuatan struktur server cloud maupun on-premise yang aman dan handal untuk menyimpan serta mengelola database perusahaan",
		tags: [
			"Server",
			"Database",
			"VPS"
		],
		features: [
			"Security Setup",
			"Backup Otomatis",
			"Load Balancing"
		],
		bgImage: "/server_bg2.webp"
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
		],
		bgImage: "/desain.webp"
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
		],
		bgImage: "/001.webp"
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
		],
		bgImage: "/medical_concept.webp"
	}
];
var testimonials = [
	{
		name: "Sbagiamu Coffee",
		role: "Pengusaha",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Mantaplah pokoknya. Bikin aplikasi kasir eksekusi rapi, garapanya cepat, cocok nih sesuai konsep bisa mengelola banyak cabang..." })
	},
	{
		name: "Sinter Pamong",
		role: "Pengelola Sekolah",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
			"Desainnya bagus, harganya jg termasuk murah sih! Overall saya puas lihat hasilnya, ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			" Next saya ajukan ke kepala sekolah lagi"
		] })
	},
	{
		name: "KPKN Grobogan",
		role: "Staff PK3",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
			"Lagi iseng cari2 orang yang bisa buat sistem antrean",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"ee malah ketemu mas ini.. ternyata diluar ekpetasi.",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"Joss gandos top markotop garapanmu mas..."
		] })
	},
	{
		name: "JMB Company",
		role: "Pengusaha",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
			"Orangnya teliti,Sabar,Dan bisa di andalkan ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"Bintang 5 lah buat developer ini",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"Terima kasih"
		] })
	},
	{
		name: "Klinik Desa",
		role: "Pengusaha",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
			"Dapat rekomendasi dari temenku",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"gak nyangka sebagus itu",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"jangan ragu pesan aplikasi sama mas ini..."
		] })
	},
	{
		name: "Kandang Biru",
		role: "Pengusaha",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
			"Lumayan lah daripada Langganan bulanan",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"Aplikasinya User-friendly banget ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"biasanya Aplikasi pada ribet ini mah enggak!"
		] }),
		rating: 4
	}
];
var AnimatedCounter = ({ end, suffix = "", decimals = 0 }) => {
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let startTimestamp = null;
		const duration = 4500;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			setCount(progress * end);
			if (progress < 1) requestAnimationFrame(step);
			else setCount(end);
		};
		requestAnimationFrame(step);
	}, [end]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [count.toFixed(decimals), suffix] });
};
var TypingHighlight = () => {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [hasStarted, setHasStarted] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	const text1 = "Kami merancang, membangun ";
	const text2 = "Aplikasi & Server";
	const text3 = "Mobile, Web Apps, IOS, Android, Desktop Apps dan Website Modern";
	const text4 = "siap mengangkat bisnis Anda ke level berikutnya";
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !hasStarted) setHasStarted(true);
		}, { threshold: .3 });
		if (containerRef.current) observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, [hasStarted]);
	(0, import_react.useEffect)(() => {
		if (!hasStarted) return;
		let timer;
		const startTimeout = setTimeout(() => {
			timer = setInterval(() => {
				setIndex((prev) => {
					if (prev >= 153) {
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
	}, [153, hasStarted]);
	const getSub = (text, start) => {
		const len = index - start;
		if (len <= 0) return "";
		return text.substring(0, len);
	};
	const end1 = 26;
	const end2 = 43;
	const end3 = 106;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "w-full max-w-4xl mx-auto text-center reveal-up reveal",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm md:text-xl font-semibold text-foreground/90 min-h-[1.75rem]",
				children: [
					getSub(text1, 0),
					index > end1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient font-bold",
						children: getSub(text2, end1)
					}),
					index < end2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "animate-pulse",
						children: "|"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-base md:text-2xl font-bold text-foreground my-2 min-h-[2rem]",
				children: [getSub(text3, end2), index >= end2 && index < end3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "animate-pulse",
					children: "|"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm md:text-xl font-semibold text-foreground/90 min-h-[1.75rem]",
				children: [getSub(text4, end3), index >= end3 && index < 153 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "animate-pulse",
					children: "|"
				})]
			})
		]
	});
};
function Index() {
	useReveal();
	const slides = [
		"/slide-1.webp",
		"/slide-2.webp",
		"/slide-3.webp",
		"/slide-4.webp"
	];
	const [currentSlide, setCurrentSlide] = (0, import_react.useState)(0);
	const [currentTesti, setCurrentTesti] = (0, import_react.useState)(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react.useState)(false);
	const [isLiveDemoOpen, setIsLiveDemoOpen] = (0, import_react.useState)(false);
	const [activeSection, setActiveSection] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const portofolioSection = document.getElementById("portofolio");
			if (portofolioSection) {
				if (portofolioSection.getBoundingClientRect().top <= 300) setActiveSection("portofolio");
				else setActiveSection("home");
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const isTestimonialPaused = (0, import_react.useRef)(false);
	(0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4e3);
		const timerTesti = setInterval(() => {
			if (!isTestimonialPaused.current) setCurrentTesti((prev) => (prev + 1) % testimonials.length);
		}, 4e3);
		return () => {
			clearInterval(timer);
			clearInterval(timerTesti);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const navEntries = window.performance.getEntriesByType("navigation");
		if (navEntries.length > 0 && navEntries[0].type === "reload") {
			if (window.location.hash) window.history.replaceState(null, "", window.location.pathname);
			window.scrollTo(0, 0);
		} else if (window.location.hash) {
			const id = window.location.hash.substring(1);
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) el.scrollIntoView({ behavior: "smooth" });
			}, 300);
		} else window.scrollTo(0, 0);
	}, []);
	const goToSlide = (index) => setCurrentSlide(index);
	const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-border/40 bg-background/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center lg:w-1/3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden lg:flex items-center justify-center gap-8 lg:w-1/3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: `text-sm font-bold transition-colors ${activeSection === "home" ? "text-gradient hover:opacity-80" : "text-foreground/80 hover:text-primary"}`,
									children: "Beranda"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#portofolio",
									className: `text-sm font-bold transition-colors ${activeSection === "portofolio" ? "text-gradient hover:opacity-80" : "text-foreground/80 hover:text-primary"}`,
									children: "Konsep"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog",
									className: "text-sm font-bold text-foreground/80 hover:text-primary transition-colors",
									children: "Wawasan"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end lg:w-1/3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-primary !hidden lg:!flex text-sm !py-2 !px-12",
								children: ["Konsultasi ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "lg:hidden p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer",
								onClick: () => setIsMobileMenuOpen(true),
								"aria-label": "Buka menu navigasi",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-6 h-6" })
							})]
						})
					]
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
							"aria-label": "Tutup menu navigasi",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold text-gradient uppercase tracking-widest mb-8",
							children: "Menu Navigasi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex flex-col gap-5 text-center w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									onClick: () => setIsMobileMenuOpen(false),
									className: `font-bold text-lg transition-all duration-300 hover:scale-105 ${activeSection === "home" ? "text-gradient hover:opacity-80" : "text-foreground/80 hover:text-primary"}`,
									children: "Beranda"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#portofolio",
									onClick: () => setIsMobileMenuOpen(false),
									className: `font-bold text-lg transition-all duration-300 hover:scale-105 ${activeSection === "portofolio" ? "text-gradient hover:opacity-80" : "text-foreground/80 hover:text-primary"}`,
									children: "Konsep"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog",
									onClick: () => setIsMobileMenuOpen(false),
									className: "font-bold text-lg text-foreground/80 transition-all duration-300 hover:text-primary hover:scale-105",
									children: "Wawasan"
								}),
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative pt-24 pb-20 px-6 grid-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal-ltr reveal py-6 md:py-12 md:pl-16 lg:pl-24 md:pr-0 lg:pr-8 h-full flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-4xl md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] mb-6 text-center lg:text-left",
								children: [
									"Wujudkan ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Aplikasi"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block mt-2 text-[0.64em]",
										children: "Untuk Bisnis Modern Anda"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full max-w-lg mx-auto lg:mx-0 mt-6 mb-10 md:mt-8 md:mb-12 flex flex-col sm:flex-row gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setIsLiveDemoOpen(true),
									className: "btn-primary flex-1 justify-center cursor-pointer",
									children: ["Live Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#layanan",
									className: "btn-ghost flex-1 justify-center",
									children: "Lihat Layanan"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3 md:gap-4 w-full max-w-lg mx-auto lg:mx-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass-card rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xl md:text-2xl font-display font-bold text-gradient",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
												end: 120,
												suffix: "+"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1",
											children: "Project"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass-card rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xl md:text-2xl font-display font-bold text-gradient",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
												end: 80,
												suffix: "+"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1",
											children: "Klien"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass-card rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xl md:text-2xl font-display font-bold text-gradient translate-x-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
												end: 4.9,
												decimals: 1,
												suffix: "★"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1",
											children: "Rating"
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal p-2 md:p-8 flex flex-col items-center justify-center w-full h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full aspect-[16/9] mx-auto mt-8 md:mt-12 group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-full h-full overflow-hidden rounded-2xl border border-border/50",
								children: slides.map((slide, index) => {
									let positionClass = "translate-x-full opacity-0 z-0";
									if (index === currentSlide) positionClass = "translate-x-0 opacity-100 z-10";
									else if (index === (currentSlide - 1 + slides.length) % slides.length) positionClass = "-translate-x-full opacity-0 z-0";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: slide,
										alt: `Portofolio Aplikasi EL Project Studio Digital - Desain Premium ${index + 1}`,
										className: `absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${positionClass}`
									}, slide);
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between w-full max-w-xs mt-6 mb-8 md:mb-0 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: prevSlide,
									className: "w-10 h-10 shrink-0 rounded-full bg-background/60 backdrop-blur-md border border-border/40 flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer shadow-sm",
									"aria-label": "Slide sebelumnya",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5 rotate-180" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center gap-2",
									children: slides.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => goToSlide(index),
										className: `rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? "w-6 h-2 bg-primary shadow-[0_0_8px_var(--color-primary)]" : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60 md:bg-foreground/30 md:hover:bg-foreground/60"}`
									}, index))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: nextSlide,
									className: "w-10 h-10 shrink-0 rounded-full bg-background/60 backdrop-blur-md border border-border/40 flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer shadow-sm",
									"aria-label": "Slide selanjutnya",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5" })
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 relative z-10 mt-16 md:mt-24 pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingHighlight, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-8 border-y border-border/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex w-max marquee-track whitespace-nowrap text-2xl font-display font-semibold text-muted-foreground/60",
						children: [...Array(2)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-6 md:gap-16 pr-6 md:pr-16",
							children: [
								"Typescript",
								"·",
								"React",
								"·",
								"SwiftUI",
								"·",
								"Next.js",
								"·",
								"Flutter",
								"·",
								"Node.js",
								"·",
								"Figma",
								"·",
								"AWS",
								"·",
								"Firebase",
								"·",
								"GitHub",
								"·",
								"Supabase",
								"·",
								"Canva",
								"·",
								"Python",
								"·",
								"Flask",
								"·",
								"Docker",
								"·",
								"SQLite",
								"·",
								"Railway",
								"·",
								"Vercel",
								"·"
							].map((t, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t }, j))
						}, i))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "layanan",
				className: "pt-12 pb-12 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mt-6 md:mt-8 mb-10 md:mb-16 reveal-up reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl md:text-5xl font-bold mb-4",
							children: [
								"Layanan ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Unggulan"
								}),
								" Kami"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm md:text-xl font-semibold text-foreground/90 max-w-3xl mx-auto",
							children: [
								"Kami menyediakan solusi digital front-to-end ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "md:hidden" }),
								" untuk kebutuhan bisnis Anda."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative group glass-card rounded-2xl px-4 py-6 sm:p-6 md:p-8 flex flex-col justify-between items-start overflow-hidden min-h-[360px] md:min-h-[320px] ${i % 2 ? "reveal" : "reveal-ltr reveal"}`,
							style: { animationDelay: `${i * 100}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 z-0 bg-black",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.bgImage,
									alt: s.title,
									className: "w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700 pointer-events-none" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full relative z-10 flex flex-col h-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-end items-start w-full mb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-4xl font-extrabold text-foreground/10 font-display select-none group-hover:text-foreground/30 transition-colors drop-shadow-md",
											children: `0${i + 1}`
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "my-auto flex flex-col items-center text-center w-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl md:text-2xl font-bold text-foreground font-display mb-3 flex items-center justify-center gap-2 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.title })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "w-full text-[12px] sm:text-[13px] md:text-sm tracking-tight leading-relaxed text-foreground font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,1)] mb-5",
											children: s.desc
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-center mt-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] uppercase font-bold text-foreground/80 tracking-wider bg-background/50 backdrop-blur-md border border-border/30 px-2.5 py-1 rounded-md drop-shadow-md",
											children: s.tag
										})
									})
								]
							})]
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "kenapa",
				className: "pt-12 pb-12 px-6 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative group reveal-ltr reveal glass-card p-6 md:p-12 rounded-3xl flex flex-col justify-center h-full overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 z-0 bg-black",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/why_us_bg.webp",
								alt: "Mengapa Memilih Kami",
								className: "w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-700 pointer-events-none" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 max-w-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-[34px] md:text-[39px] leading-tight font-bold mb-6 text-foreground drop-shadow-lg",
								children: [
									"Lebih dari sekadar ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "developer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"kami partner pertumbuhan Anda."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs md:text-sm text-foreground font-semibold mb-8 drop-shadow-md",
								children: [
									"Kami memahami bahwa aplikasi yang hebat bukan hanya soal kode saja,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:inline" }),
									"tapi soal detail, fungsi, serta eksekusi penggunaan user friendly."
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-5",
						children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card rounded-2xl p-6 reveal h-full flex flex-col relative group overflow-hidden",
							style: { animationDelay: `${i * 80}ms` },
							children: [f.bgImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 z-0 bg-black",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: f.bgImage,
									alt: f.title,
									className: "w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 pointer-events-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-700 pointer-events-none" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex flex-col h-full justify-center my-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: `text-base font-bold mb-2 ${f.bgImage ? "text-foreground drop-shadow-lg" : ""}`,
									children: f.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-[13px] md:text-sm tracking-tight leading-relaxed ${f.bgImage ? "text-foreground/90 font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,1)]" : "text-muted-foreground"}`,
									children: f.desc
								})]
							})]
						}, f.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "portofolio",
				className: "scroll-mt-20 mt-4 md:mt-10 pt-12 pb-24 px-6 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center mb-10 md:mb-16 reveal-up reveal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-4xl md:text-5xl font-bold mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "md:hidden",
								children: ["Konsep ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Aplikasi"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden md:inline",
								children: [
									"Konsep ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Aplikasi"
									}),
									" & Sistem"
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: concepts.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card rounded-2xl p-8 reveal flex flex-col h-full relative group overflow-hidden",
							style: { animationDelay: `${i % 3 * 100}ms` },
							children: [c.bgImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 z-0 bg-black",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.bgImage,
									alt: c.title,
									className: "w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 pointer-events-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-700 pointer-events-none" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex flex-col h-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold leading-relaxed text-foreground mb-6 flex-grow drop-shadow-[0_4px_6px_rgba(0,0,0,1)]",
										children: c.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: c.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-semibold px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white uppercase tracking-wider shadow-sm",
												children: tag
											}, tag))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "border-t border-border/40 pt-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-2",
												children: c.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-2 text-xs text-foreground/90 font-semibold",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-primary" }), f]
												}, f))
											})
										})]
									})
								]
							})]
						}, c.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center mt-10 md:mt-16 reveal-up reveal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/blog",
							className: "btn-primary w-fit",
							children: ["Lihat Wawasan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "testimoni",
				className: "pt-12 pb-12 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center mb-10 md:mb-16 reveal-up reveal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-4xl md:text-5xl font-bold",
								children: [
									"Dipercaya oleh ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Owner"
									}),
									" & Perusahaan"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full max-w-lg md:max-w-none mx-auto h-[220px] md:h-[220px]",
							onMouseEnter: () => isTestimonialPaused.current = true,
							onMouseLeave: () => isTestimonialPaused.current = false,
							onTouchStart: () => isTestimonialPaused.current = true,
							onTouchEnd: () => isTestimonialPaused.current = false,
							onTouchCancel: () => isTestimonialPaused.current = false,
							children: testimonials.map((t, i) => {
								const diff = (i - currentTesti + testimonials.length) % testimonials.length;
								let mobileClass = "translate-x-[50%] opacity-0 z-0 pointer-events-none";
								if (diff === 0) mobileClass = "translate-x-0 opacity-100 z-10 pointer-events-auto";
								else if (diff === testimonials.length - 1) mobileClass = "-translate-x-[50%] opacity-0 z-0 pointer-events-none";
								let desktopClass = "md:translate-x-[calc(200%_+_48px)] md:opacity-0 md:z-0 md:pointer-events-none";
								if (diff === 0) desktopClass = "md:translate-x-0 md:opacity-100 md:z-10 md:pointer-events-auto";
								else if (diff === 1) desktopClass = "md:translate-x-[calc(100%_+_24px)] md:opacity-100 md:z-10 md:pointer-events-auto";
								else if (diff === 2) desktopClass = "md:translate-x-[calc(200%_+_48px)] md:opacity-100 md:z-10 md:pointer-events-auto";
								else if (diff === testimonials.length - 1) desktopClass = "md:-translate-x-[calc(100%_+_24px)] md:opacity-0 md:z-0 md:pointer-events-none";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `absolute inset-y-0 left-0 glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-center transition-all duration-700 ease-in-out w-full md:w-[calc(33.333%_-_16px)] ${mobileClass} ${desktopClass}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-1 mb-4",
											children: [...Array(5)].map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `w-4 h-4 ${j < (t.rating || 5) ? "fill-primary text-primary" : "text-muted-foreground/30"}` }, `star-${i}-${j}`))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs md:text-sm text-foreground/90 mb-6 flex-grow",
											children: t.text
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-auto",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm md:text-base font-semibold text-purple-500",
												children: t.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs md:text-sm text-muted-foreground font-bold",
												children: t.role
											})]
										})
									]
								}, `${t.name}-${i}`);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center gap-2 mt-8",
							children: testimonials.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setCurrentTesti(i),
								className: `w-2 h-2 rounded-full transition-all duration-300 ${i === currentTesti ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`
							}, `dot-${i}`))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "kontak",
				className: "pt-12 pb-12 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto glass-card rounded-3xl px-6 py-12 md:p-16 text-center relative overflow-hidden reveal-up reveal group border border-border/50 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 -z-10 bg-black",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/colorwall.webp",
							alt: "ColorWall background",
							className: "w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-700 pointer-events-none" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl md:text-4xl font-bold mb-4 drop-shadow-md",
								children: ["Siap membangun ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "sesuatu yang hebat?"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm md:text-xl font-semibold text-foreground/90 mb-8 max-w-2xl mx-auto drop-shadow-sm",
								children: [
									"Ceritakan ide Anda",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden md:inline",
										children: " — "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "md:hidden" }),
									"Konsultasi gratis",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden md:inline",
										children: " — "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "md:hidden" }),
									"Kami balas secepatnya"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-4 justify-center relative z-20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://mail.google.com/mail/?view=cm&fs=1&to=elproject.dev@gmail.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn-primary shadow-[0_0_15px_var(--color-primary)]",
									children: ["elproject@studio.id ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn-ghost bg-background/50 backdrop-blur-sm border-white/10 hover:bg-white/10",
									children: "Chat WhatsApp"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "sr-only",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto text-sm text-muted-foreground/80 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold text-foreground/90 mb-2 drop-shadow-sm",
							children: "Jasa Pembuatan Aplikasi Yogyakarta & Website Profesional"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "leading-relaxed",
							children: [
								"Di era digital saat ini, memiliki platform digital yang andal adalah keharusan. EL Project hadir sebagai ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Software House Yogyakarta" }),
								" yang menyediakan ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "jasa pembuatan aplikasi" }),
								" terbaik untuk kebutuhan bisnis Anda. Mulai dari ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "aplikasi kasir (POS)" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sistem ERP" }),
								", hingga ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "aplikasi booking dan antrean" }),
								". Tim kami terdiri dari developer berpengalaman di Jogja yang siap memberikan solusi pengembangan ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "aplikasi mobile Android dan iOS" }),
								" yang responsif, cepat, dan ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "user-friendly" }),
								"."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold text-foreground/90 mb-2 drop-shadow-sm",
								children: "Mengapa Memilih Jasa Pembuatan Aplikasi Kami di Jogja?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "leading-relaxed",
								children: [
									"Sebagai mitra teknologi terpercaya, layanan ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "jasa pembuatan aplikasi mobile" }),
									" kami mencakup UI/UX premium, integrasi CMS, optimasi server, hingga perawatan berkelanjutan. Baik Anda mencari ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "jasa pembuatan website" }),
									" perusahaan, ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sistem manajemen terpadu" }),
									", maupun ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "aplikasi kasir" }),
									" untuk mengelola banyak cabang, kami adalah ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "jasa pembuatan aplikasi Yogyakarta" }),
									" yang siap menjadi partner Anda."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Layanan kami dirancang untuk membantu bisnis Anda berkembang dengan teknologi yang efisien dan modern. Berbasis di Yogyakarta, tim kami menawarkan ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "jasa developer aplikasi" }),
								" dengan pengalaman puluhan proyek. Kami siap menghadirkan solusi terbaik yang disesuaikan dengan kebutuhan spesifik bisnis skala kecil (UMKM) hingga enterprise."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Kami menawarkan berbagai macam layanan, termasuk ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "jasa pembuatan aplikasi kasir (POS)" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sistem ERP" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "aplikasi booking dan antrean" }),
								", serta ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "jasa pembuatan aplikasi Android dan iOS" }),
								". Sebagai ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "software house Jogja" }),
								", setiap proyek dikerjakan dengan standar kualitas tertinggi untuk memastikan performa optimal."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Sebagai penyedia ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "jasa pembuatan aplikasi custom" }),
								" dan ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "jasa pembuatan website perusahaan" }),
								" terkemuka, EL Project dikenal luas sebagai pakar terpercaya untuk ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "layanan jasa pembuatan aplikasi di Yogyakarta (Jogja)" }),
								". Kami juga melayani klien di seluruh pelosok Nusantara: Solo, Semarang, Jakarta, Surabaya, Bali, Medan, Makassar, Balikpapan, dan kota lainnya."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Tingkatkan performa bisnis Anda dengan layanan unggulan kami: pembuatan aplikasi ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sistem antrean" }),
								" dan layanan jasa pembuatan aplikasi ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "absensi terintegrasi" }),
								"."
							] })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold text-foreground/90 mb-2 drop-shadow-sm",
							children: "Layanan Jasa Pembuatan Aplikasi Seluruh Indonesia"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "leading-relaxed",
							children: [
								"Meskipun kami berpusat pada ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "jasa pembuatan aplikasi Yogyakarta" }),
								", EL Project melayani klien di ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "seluruh Indonesia" }),
								". Di mana pun bisnis Anda berlokasi, tim ahli kami menangani proyek pembuatan aplikasi secara profesional dengan garansi dukungan teknis berkelanjutan."
							]
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/40 py-8 px-6 text-center text-[10px] md:text-xs text-muted-foreground transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] cursor-default",
				children: "© 2026 EL PROJECT DEVELOPMENT BUILDER WEB APPS © 2026"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveDemoModal, {
				isOpen: isLiveDemoOpen,
				onClose: () => setIsLiveDemoOpen(false)
			})
		]
	});
}
//#endregion
export { Index as component };
