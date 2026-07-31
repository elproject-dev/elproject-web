import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronRight, d as Menu, g as ClockArrowUp, h as CodeXml, i as Shield, n as Star, o as Server, p as Globe, s as Search, t as X, u as Palette, v as Check, y as ChartLine } from "../_libs/lucide-react.mjs";
import { t as LuPaintbrushVertical } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-6nWt2zr9.js
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
var services = [
	{
		icon: Globe,
		title: "Web Development",
		desc: "Pembuatan website modern, responsif, dan SEO-friendly",
		tag: "React · Next.js · WordPress"
	},
	{
		icon: Server,
		title: "Build Server",
		desc: "pembuatan server pribadi untuk kebutuhan data bisnis",
		tag: "Database · Network · Security"
	},
	{
		icon: CodeXml,
		title: "Development Apps",
		desc: "Pembuatan aplikasi modern untuk semua bisnis digital",
		tag: "Android · Windows · macOS · Linux"
	},
	{
		icon: Search,
		title: "SEO Optimization",
		desc: "Tingkatkan peringkat website Anda di mesin pencarian",
		tag: "On-Page · Off-Page · Technical"
	},
	{
		icon: LuPaintbrushVertical,
		title: "Graphic Design",
		desc: "Desain visual yang menarik untuk memperkuat branding.",
		tag: "UI/UX · Branding · Illustration · Canva · Figma"
	},
	{
		icon: ChartLine,
		title: "Business Consulting",
		desc: "Konsultasi bisnis terpercaya untuk identifikasi peluang usaha",
		tag: "Strategy · Operations · Management"
	}
];
var features = [
	{
		icon: ClockArrowUp,
		title: "Pengembangan Cepat",
		desc: "Sprint agile 1 minggu dengan demo rutin agar progress selalu terlihat dan Real-Time."
	},
	{
		icon: Shield,
		title: "Kualitas Terjamin",
		desc: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"QA otomatis, code review ketat, ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:inline" }),
			"Garansi bug 90 hari pasca rilis."
		] })
	},
	{
		icon: CodeXml,
		title: "Source Code Anda",
		desc: "Anda memiliki 100% source code, dokumentasi lengkap, dan hak intelektual."
	},
	{
		icon: Palette,
		title: "Desain Premium",
		desc: "UI/UX kelas dunia oleh tim desainer berpengalaman lintas industri."
	}
];
var plans = [
	{
		name: "Starter",
		price: "1 Jt",
		desc: "Untuk validasi ide & MVP cepat",
		features: [
			"1 platform (Web atau Mobile)",
			"Hingga 5 halaman / screen",
			"Desain UI standar",
			"Garansi 60 hari",
			"Support database"
		]
	},
	{
		name: "Pro",
		price: "5 Jt",
		desc: "Paling populer untuk bisnis berkembang",
		features: [
			"Web + Mobile App",
			"Hingga 20 screen kustom",
			"UI/UX premium + animasi",
			"Integrasi API & database",
			"Garansi 90 hari",
			"Support prioritas",
			"Support Maintenance 1 tahun"
		],
		featured: true
	},
	{
		name: "Enterprise",
		price: "Custom",
		desc: "Solusi end-to-end skala besar",
		features: [
			"Multi-platform (iOS/Android/Web)",
			"Arsitektur scalable",
			"Dedicated team",
			"SLA 99.9%",
			"Maintenance 1 tahun",
			"On-site training",
			"Mode Admin Control System"
		]
	}
];
var testimonials = [
	{
		name: "Sbagiamu Coffee",
		role: "Pengusaha",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Mantaplah pokoknya. Bikin aplikasi kasir eksekusi rapi, garapanya cepat, cocok nih sesuai konsep bisa mengelola banyak cabang..." })
	},
	{
		name: "Sinter Pamong",
		role: "Pengelola Sekolah",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Desainnya bagus, harganya jg termasuk murah sih! Overall saya puas lihat hasilnya, ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			" Next saya ajukan ke kepala sekolah lagi"
		] })
	},
	{
		name: "KPKN Grobogan",
		role: "Staff PK3",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Lagi iseng cari2 orang yang bisa buat sistem antrean",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"ee malah ketemu mas ini.. ternyata diluar ekpetasi.",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"Joss gandos top markotop garapanmu mas..."
		] })
	},
	{
		name: "Kantong Mas",
		role: "Pengusaha",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Orangnya teliti,Sabar,Dan bisa di andalkan ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"Bintang 5 lah buat developer ini",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"Terima kasih"
		] })
	},
	{
		name: "CV.Aulia Usaha",
		role: "Pengusaha",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
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
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
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
	const text3 = "Mobile, Web Apps, iOS, Android, Desktop Apps dan Website Modern";
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
				className: "text-xs md:text-lg text-muted-foreground min-h-[1.5rem]",
				children: [
					getSub(text1, 0),
					index > end1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary font-semibold",
						children: getSub(text2, end1)
					}),
					index < end2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "animate-pulse",
						children: "|"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm md:text-xl font-semibold text-foreground my-2 min-h-[1.75rem]",
				children: [getSub(text3, end2), index >= end2 && index < end3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "animate-pulse",
					children: "|"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs md:text-lg text-muted-foreground min-h-[1.5rem]",
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
		"/slide-1.png",
		"/slide-2.png",
		"/slide-3.png",
		"/slide-4.png"
	];
	const [currentSlide, setCurrentSlide] = (0, import_react.useState)(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react.useState)(false);
	const testimonialScrollRef = (0, import_react.useRef)(null);
	const pricingScrollRef = (0, import_react.useRef)(null);
	const isSliderPaused = (0, import_react.useRef)(false);
	const lastInteractionTime = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4e3);
		return () => clearInterval(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		const slide = (ref) => {
			if (isSliderPaused.current || Date.now() - lastInteractionTime.current < 4e3) return;
			if (ref.current) {
				const { scrollLeft, scrollWidth, clientWidth, children } = ref.current;
				const scrollAmount = children[0] ? children[0].clientWidth + 24 : clientWidth * .85;
				if (scrollLeft + clientWidth >= scrollWidth - 10) ref.current.scrollTo({
					left: 0,
					behavior: "auto"
				});
				else ref.current.scrollBy({
					left: scrollAmount,
					behavior: "smooth"
				});
			}
		};
		const timerPricing = setInterval(() => slide(pricingScrollRef), 3e3);
		const timerTestimonial = setInterval(() => slide(testimonialScrollRef), 3800);
		return () => {
			clearInterval(timerPricing);
			clearInterval(timerTestimonial);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (window.location.hash) window.history.replaceState(null, "", window.location.pathname);
		window.scrollTo(0, 0);
	}, []);
	const goToSlide = (index) => setCurrentSlide(index);
	const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-border/40 bg-background/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "group font-display text-xl font-bold tracking-wider flex items-center relative pb-1",
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
							className: "btn-primary !hidden lg:!flex text-sm !py-2 !px-12",
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
										href: "#layanan",
										label: "Layanan"
									},
									{
										href: "#kenapa",
										label: "Kenapa Kami"
									},
									{
										href: "#harga",
										label: "Harga"
									},
									{
										href: "#testimoni",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative pt-24 pb-20 px-6 grid-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal-ltr reveal py-6 md:py-12 md:pl-12 md:pr-0 lg:pr-0 h-full flex flex-col justify-center",
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/live-demo",
									className: "btn-primary flex-1 justify-center",
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reveal p-2 md:p-8 flex items-center justify-center w-full h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative float-glow w-full aspect-[16/9] mx-auto mt-8 md:mt-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative w-full h-full overflow-hidden rounded-2xl border border-border/50 shadow-2xl group",
								children: [
									slides.map((slide, index) => {
										let positionClass = "translate-x-full opacity-0 z-0";
										if (index === currentSlide) positionClass = "translate-x-0 opacity-100 z-10";
										else if (index === (currentSlide - 1 + slides.length) % slides.length) positionClass = "-translate-x-full opacity-0 z-0";
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: slide,
											alt: `Project slide ${index + 1}`,
											className: `absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${positionClass}`
										}, slide);
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: prevSlide,
										className: "absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-background/60 backdrop-blur-md border border-border/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 rotate-180" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: nextSlide,
										className: "absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-background/60 backdrop-blur-md border border-border/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2",
										children: slides.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => goToSlide(index),
											className: `rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? "w-6 h-2 bg-primary shadow-[0_0_8px_var(--color-primary)]" : "w-2 h-2 bg-foreground/30 hover:bg-foreground/60"}`
										}, index))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-4 -z-10 rounded-3xl opacity-50",
								style: { background: "var(--gradient-glow)" }
							})]
						})
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
								"Javascript",
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
						className: "text-center mb-10 md:mb-16 reveal-up reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-gradient uppercase tracking-widest mb-3",
								children: "Layanan Kami"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl md:text-5xl font-bold mb-4",
								children: [
									"Layanan ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Unggulan"
									}),
									" Kami"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-base md:text-lg text-muted-foreground max-w-2xl mx-auto",
								children: [
									"Kami menyediakan solusi digital front-to-end ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "md:hidden" }),
									" untuk kebutuhan bisnis Anda."
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `glass-card rounded-2xl p-6 ${i % 2 ? "reveal" : "reveal-ltr reveal"}`,
							style: { animationDelay: `${i * 100}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "w-8 h-8 text-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold mb-2",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted-foreground mb-4",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium text-primary/80",
									children: s.tag
								})
							]
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
						className: "reveal-ltr reveal glass-card p-6 md:p-12 rounded-3xl flex flex-col justify-center h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-gradient uppercase tracking-widest mb-3",
								children: "Mengapa Memilih Kami"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-[34px] md:text-[39px] leading-tight font-bold mb-6",
								children: [
									"Lebih dari sekadar ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "developer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"kami partner pertumbuhan Anda."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs md:text-sm text-muted-foreground mb-8",
								children: [
									"Kami memahami bahwa aplikasi yang hebat bukan hanya soal kode saja,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"tapi soal eksekusi, strategi,serta detail aplikasi"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/showcase",
								className: "btn-primary",
								children: ["Lihat Semua", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-5",
						children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card rounded-2xl p-6 reveal h-full flex flex-col",
							style: { animationDelay: `${i * 80}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "w-8 h-8 text-primary mb-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold mb-1",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted-foreground",
									children: f.desc
								})
							]
						}, f.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "harga",
				className: "pt-12 pb-24 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-10 md:mb-16 reveal-up reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-gradient uppercase tracking-widest mb-3",
							children: "Paket Harga"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-4xl md:text-5xl font-bold mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "md:hidden",
								children: "Pilihan Paket"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline",
								children: "Pilihan Paket"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: pricingScrollRef,
						className: "flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-4 -mt-4 touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
						onMouseEnter: () => isSliderPaused.current = true,
						onMouseLeave: () => {
							isSliderPaused.current = false;
							lastInteractionTime.current = Date.now();
						},
						onTouchStart: () => {
							isSliderPaused.current = true;
							lastInteractionTime.current = Date.now();
						},
						onTouchMove: () => lastInteractionTime.current = Date.now(),
						onTouchEnd: () => {
							isSliderPaused.current = false;
							lastInteractionTime.current = Date.now();
						},
						onTouchCancel: () => {
							isSliderPaused.current = false;
							lastInteractionTime.current = Date.now();
						},
						children: [
							...plans,
							...plans,
							...plans,
							...plans
						].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `glass-card rounded-2xl p-8 relative flex flex-col items-center text-center w-[85vw] md:w-[calc(33.333%-16px)] shrink-0 snap-center ${p.featured ? "ring-2 ring-primary/60" : ""} ${i === 0 ? "reveal-ltr reveal" : "reveal"}`,
							style: { animationDelay: `${i % plans.length * 120}ms` },
							children: [
								p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap",
									style: {
										background: "var(--gradient-primary)",
										color: "var(--primary-foreground)"
									},
									children: "Paling Populer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold mb-1",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground mb-6",
									children: p.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-4xl font-display font-bold text-gradient",
										children: ["Rp ", p.price]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground text-sm",
										children: " /proyek"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-3 mb-8 w-fit text-left",
									children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: f
										})]
									}, f))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/6283867180887?text=halo,saya%20tertarik%20ingin%20membuat%20aplikasi%0Apaket%20yg%20saya%20butuhkan%20adalah%20paket%20${p.name.toLowerCase()}%0A%0Asaya%20tertarik%20setelah%20melihat%20web%20ini%0A%0A%0Ahttps://elproject.studio`,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn-primary w-full justify-center mt-auto",
									children: "Pilih Paket"
								})
							]
						}, `${p.name}-${i}`))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "testimoni",
				className: "pt-12 pb-12 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-10 md:mb-16 reveal-up reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-gradient uppercase tracking-widest mb-3",
							children: "Testimoni"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl md:text-5xl font-bold",
							children: "Dipercaya oleh Owner & Perusahaan"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: testimonialScrollRef,
						className: "flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-4 touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
						onMouseEnter: () => isSliderPaused.current = true,
						onMouseLeave: () => {
							isSliderPaused.current = false;
							lastInteractionTime.current = Date.now();
						},
						onTouchStart: () => {
							isSliderPaused.current = true;
							lastInteractionTime.current = Date.now();
						},
						onTouchMove: () => lastInteractionTime.current = Date.now(),
						onTouchEnd: () => {
							isSliderPaused.current = false;
							lastInteractionTime.current = Date.now();
						},
						onTouchCancel: () => {
							isSliderPaused.current = false;
							lastInteractionTime.current = Date.now();
						},
						children: [
							...testimonials,
							...testimonials,
							...testimonials,
							...testimonials
						].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `glass-card rounded-2xl p-6 reveal w-[85vw] md:w-[calc(33.333%-16px)] shrink-0 snap-center`,
							style: { animationDelay: `${i % testimonials.length * 100}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1 mb-4",
									children: [...Array(5)].map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `w-4 h-4 ${j < (t.rating || 5) ? "fill-primary text-primary" : "text-muted-foreground/30"}` }, `star-${i}-${j}`))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm md:text-base text-foreground/90 mb-6",
									children: t.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: t.role
								})] })
							]
						}, `${t.name}-${i}`))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "kontak",
				className: "pt-12 pb-12 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto glass-card rounded-3xl px-6 py-12 md:p-16 text-center relative overflow-hidden reveal-up reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 -z-10 opacity-60",
							style: { background: "var(--gradient-glow)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl md:text-4xl font-bold mb-4",
							children: ["Siap membangun ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "sesuatu yang hebat?"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground mb-8 max-w-2xl mx-auto",
							children: [
								"Ceritakan ide Anda",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden md:inline",
									children: " — "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "md:hidden" }),
								"konsultasi 100% gratis",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden md:inline",
									children: " — "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "md:hidden" }),
								"Kami balas dalam 24 jam."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://mail.google.com/mail/?view=cm&fs=1&to=elproject.dev@gmail.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-primary",
								children: ["elproject@studio.id ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/6283867180887?text=halo,saya%20ingin%20menanyakan%20pembuatan%20aplikasi,%0Asepertinya%20saya%20tertarik%20setelah%20melihat%20web%20ini.%0A%0A%0Ahttps://www.elproject.studio",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-ghost",
								children: "Chat WhatsApp"
							})]
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
export { Index as component };
