import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Leaf, c as Cake, i as MapPin, o as Heart, r as Phone, s as GlassWater, t as UtensilsCrossed } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BAfdToPk.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("press inline-flex items-center justify-center gap-2 rounded-full font-semibold", {
	variants: {
		variant: {
			gold: "bg-gold text-ink hover:bg-ember",
			chocolate: "bg-chocolate text-foam hover:bg-ink",
			ghost: "bg-foam text-chocolate ring-1 ring-line hover:ring-chocolate",
			foam: "bg-foam text-ink"
		},
		size: {
			md: "min-h-12 px-5 text-base",
			lg: "min-h-14 px-6 text-lg"
		},
		full: {
			true: "w-full",
			false: ""
		}
	},
	defaultVariants: {
		variant: "gold",
		size: "md",
		full: false
	}
});
function ButtonLink({ className, variant, size, full, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: cn(buttonVariants({
			variant,
			size,
			full
		}), className),
		...props
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.5 3.5A11 11 0 0 0 2.1 17.4L1 23l5.7-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.4.7.7-3.3-.2-.3A9 9 0 1 1 12 21zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8 8 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.2-.4a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 12 12 0 0 0 4.6 4.1 3.7 3.7 0 0 0 1.7.1 2.8 2.8 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.3c-.1-.2-.3-.2-.6-.3z" })
	});
}
var WHATSAPP_NUMBER = "233544263827";
var WHATSAPP_DISPLAY = "054 426 3827";
var phones = [{
	display: "024 893 2454",
	href: "tel:+233248932454"
}, {
	display: "024 375 9575",
	href: "tel:+233243759575"
}];
function whatsappHref(item) {
	const text = item ? `Hello YEHLIN BBB! I'd like to order ${item}.` : "Hello YEHLIN BBB! I'd like to place an order.";
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
var categories = [
	{
		id: "bakes",
		index: "01",
		label: "Bakes",
		title: "From the oven",
		blurb: "Celebration cakes, tray bakes, and the snacks you reach for on the way.",
		items: [
			{
				name: "Custom Birthday & Wedding Cakes",
				blurb: "Layered, dressed, and made for the day you’re celebrating.",
				image: "/images/cake.jpg",
				alt: "Layered chocolate and vanilla celebration cake with a glossy drip"
			},
			{
				name: "Cupcakes",
				blurb: "Soft crumb and swirled frosting, lovely by the box.",
				image: "/images/cupcakes.jpg",
				alt: "Vanilla cupcakes with tall swirled frosting on a cake stand"
			},
			{
				name: "Waffles",
				blurb: "Golden edges, a tender middle, butter melting in.",
				image: "/images/waffles.jpg",
				alt: "Crisp golden waffle with melting butter and honey"
			},
			{
				name: "Doughnuts",
				blurb: "Glazed, warm, and very hard to share.",
				image: "/images/doughnuts.jpg",
				alt: "Stack of glazed and chocolate doughnuts"
			},
			{
				name: "Meat Bread",
				blurb: "Soft bake stuffed with seasoned meat. A proper Sunyani bite.",
				image: "/images/meat-bread.jpg",
				alt: "Golden meat bread torn open to show a savory meat filling"
			},
			{
				name: "Cookies",
				blurb: "Buttery centres with a just-right snap.",
				image: "/images/cookies.jpg",
				alt: "Stack of thick chocolate chunk cookies"
			},
			{
				name: "Spring Rolls",
				blurb: "Crispy, golden, and ready for snacking.",
				image: "/images/spring-rolls.jpg",
				alt: "Crispy spring rolls with one cut open and a chili dip"
			}
		]
	},
	{
		id: "bites",
		index: "02",
		label: "Bites",
		title: "Weekend eats & home meals",
		blurb: "Weekend plates are pre-order only. Home meals are cooked fresh and delivered to your door.",
		items: [{
			name: "Jollof Rice",
			blurb: "Smoky, party-red, and worth planning the weekend around.",
			image: "/images/jollof.jpg",
			alt: "Ghanaian jollof rice with roasted chicken and fried plantain",
			badge: "Pre-order"
		}, {
			name: "Fried Rice",
			blurb: "Wok-hot rice, vegetables, and that weekend energy.",
			image: null,
			alt: "",
			badge: "Pre-order",
			tone: "ember",
			mark: "Weekend rice"
		}]
	},
	{
		id: "brews",
		index: "03",
		label: "Brews",
		title: "Cold glasses",
		blurb: "Pressed, steeped, and poured for right now.",
		wide: true,
		items: [
			{
				name: "Fresh Pineapple Juice",
				blurb: "Bright, cold, and squeezed for today.",
				image: "/images/pineapple.jpg",
				alt: "Tall glass of fresh pineapple juice with a pineapple wedge"
			},
			{
				name: "Sobolo",
				blurb: "Hibiscus, ginger, and a ruby chill.",
				image: "/images/sobolo.jpg",
				alt: "Glass of deep red sobolo hibiscus drink"
			},
			{
				name: "Ginger-Tiger Nut Milk",
				blurb: "Creamy, spiced, and deeply comforting.",
				image: null,
				alt: "",
				tone: "milk",
				mark: "Tiger nut"
			},
			{
				name: "Fresh Yogurt",
				blurb: "Cool, tangy, and spoon-thick.",
				image: "/images/yogurt.jpg",
				alt: "Jar of thick fresh yogurt with a spoon"
			}
		]
	}
];
var ribbon = "Bakes · Bites · Brews · Sunyani · Freshly made · Tasty treats for every mood · ";
var highlights = [
	{
		icon: UtensilsCrossed,
		title: "Good food, great drinks, happy moments",
		body: "Cakes for the celebration, a cold glass for the afternoon, a plate when the weekend shows up."
	},
	{
		icon: Heart,
		title: "Freshly made with love",
		body: "Small batches, real ingredients, and the kind of care you can taste in the first bite."
	},
	{
		icon: Leaf,
		title: "Freshly prepared. Quality ingredients.",
		body: "Your satisfaction matters. If something isn’t right, tell us — we want you happy."
	}
];
function Dish({ item }) {
	const tone = item.tone === "ember" ? "swatch-ember" : item.tone === "milk" ? "swatch-milk" : "";
	const cropTop = item.name === "Fresh Yogurt" || item.name === "Fresh Pineapple Juice";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "plate dish",
		children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: item.image,
			alt: item.alt,
			className: cropTop ? "dish-photo object-top" : "dish-photo",
			loading: "lazy",
			decoding: "async"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `dish-photo swatch ${tone}`,
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.mark })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dish-copy",
			children: [
				item.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "badge",
					children: item.badge
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-xl leading-tight text-ink",
					children: item.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-snug text-cocoa",
					children: item.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "order-link",
					href: whatsappHref(item.name),
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": `Order ${item.name} on WhatsApp`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "Order on WhatsApp"]
				})
			]
		})]
	});
}
function HomePage() {
	const orderHref = whatsappHref();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "skip-link",
				href: "#menu",
				children: "Skip to menu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-cream/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "font-display text-xl leading-none whitespace-nowrap text-ink",
							children: ["YEHLIN ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold-deep",
								children: "BBB"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex items-center gap-1 text-sm font-semibold text-chocolate sm:gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "inline-flex min-h-11 items-center px-2",
									href: "#menu",
									children: "Menu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "inline-flex min-h-11 items-center px-2",
									href: "#why",
									children: "Why us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "inline-flex min-h-11 items-center px-2",
									href: "#order",
									children: "Order"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
							href: orderHref,
							target: "_blank",
							rel: "noopener noreferrer",
							size: "md",
							className: "hidden md:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 sm:pt-12 lg:grid-cols-2 lg:gap-14 lg:pb-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rise inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gold-deep uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Sunyani"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "rise d1 mt-3 font-display text-6xl leading-none text-ink sm:text-7xl",
							children: ["YEHLIN", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-3xl tracking-widest text-gold-deep sm:text-4xl",
								children: "BBB"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise d2 mt-4 text-lg font-semibold text-chocolate sm:text-xl",
							children: "Bakes, Bites & Brews"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise d2 mt-3 font-display text-2xl text-chocolate italic sm:text-3xl",
							children: "“Tasty Treats for Every Mood!”"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise d3 mt-4 max-w-md text-base leading-relaxed text-cocoa",
							children: "Cakes for the big days, bites for the weekend, and cold drinks for right now."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise d4 mt-7 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
								href: orderHref,
								target: "_blank",
								rel: "noopener noreferrer",
								size: "lg",
								className: "w-full sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" }), "Order on WhatsApp"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								href: "#menu",
								variant: "ghost",
								size: "lg",
								className: "w-full sm:w-auto",
								children: "View Menu"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-cocoa",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4 text-chocolate",
								"aria-hidden": "true"
							}), phones.map((phone) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: phone.href,
								className: "inline-flex min-h-11 items-center font-semibold text-chocolate",
								children: phone.display
							}, phone.href))]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hero.jpg",
							alt: "Chocolate celebration cake, cupcakes, pineapple juice and sobolo",
							className: "hero-frame",
							width: 1200,
							height: 1600
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "seal absolute -bottom-4 left-4 bg-foam shadow-card sm:left-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Est." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "BBB" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sunyani" })
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ribbon",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ribbon-track",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "ribbon-set",
							children: ribbon.repeat(4)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "ribbon-set",
							children: ribbon.repeat(4)
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "menu",
					className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold tracking-widest text-gold-deep uppercase",
									children: "Our menu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
									children: "Three moods. One table."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base leading-relaxed text-cocoa",
									children: "Bakes from the oven, bites for the weekend, and brews poured cold. Tap any dish to order on WhatsApp."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "jump -mx-4 mt-6 flex gap-2 overflow-x-auto px-4 py-3",
							children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${category.id}`,
								className: "press inline-flex min-h-11 shrink-0 items-center rounded-full bg-chocolate px-4 text-sm font-semibold text-foam",
								children: category.label
							}, category.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-14",
							children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: category.id,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5 flex items-end justify-between gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-sm font-semibold tracking-widest text-gold-deep uppercase",
													children: [
														category.index,
														" — ",
														category.label
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-1 font-display text-3xl text-ink sm:text-4xl",
													children: category.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 max-w-xl text-sm leading-relaxed text-cocoa sm:text-base",
													children: category.blurb
												})
											] }),
											category.id === "bakes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cake, {
												className: "hidden size-8 text-gold-deep sm:block",
												"aria-hidden": "true"
											}) : null,
											category.id === "bites" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, {
												className: "hidden size-8 text-gold-deep sm:block",
												"aria-hidden": "true"
											}) : null,
											category.id === "brews" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassWater, {
												className: "hidden size-8 text-gold-deep sm:block",
												"aria-hidden": "true"
											}) : null
										]
									}),
									category.id === "bites" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "note mb-4 px-4 py-4 sm:px-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xl text-ink",
											children: "Home meals"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-relaxed text-cocoa sm:text-base",
											children: "Cooked fresh · Delivered to your door. Message us what you’re craving."
										})]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: category.id === "bites" ? "grid gap-3 sm:grid-cols-2" : category.wide ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-4" : "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
										children: category.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dish, { item }, item.name))
									})
								]
							}, category.id))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/spread.jpg",
						alt: "A table of cake, cupcakes, waffles, doughnuts, cookies, spring rolls, juice and yogurt",
						className: "aspect-video w-full rounded-card object-cover",
						loading: "lazy",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-3 text-center text-sm font-semibold tracking-wide text-cocoa",
						children: "Freshly prepared · Quality ingredients · Your satisfaction matters"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "why",
					className: "mt-14 bg-ink text-foam sm:mt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-widest text-gold uppercase",
								children: "Why choose us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 max-w-xl font-display text-4xl sm:text-5xl",
								children: "Good food. Great drinks. Happy moments."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-4 md:grid-cols-3",
								children: highlights.map((item) => {
									const Icon = item.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-card border border-foam/15 bg-chocolate p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "size-6 text-gold",
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-4 font-display text-2xl leading-tight",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-relaxed text-foam/80",
												children: item.body
											})
										]
									}, item.title);
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "order",
					className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid overflow-hidden rounded-card bg-chocolate text-foam lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold tracking-widest text-gold uppercase",
									children: "Order"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-4xl sm:text-5xl",
									children: "Hungry? We’re a message away."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-md text-base leading-relaxed text-foam/80",
									children: "WhatsApp is the fastest way to order cakes, weekend plates, and drinks. Pre-order for weekend meals recommended."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-4",
										"aria-hidden": "true"
									}), "Sunyani"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 bg-ink p-6 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
									href: orderHref,
									target: "_blank",
									rel: "noopener noreferrer",
									size: "lg",
									full: true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" }),
										"WhatsApp ",
										WHATSAPP_DISPLAY
									]
								}),
								phones.map((phone) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
									href: phone.href,
									variant: "foam",
									size: "lg",
									full: true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "size-5",
											"aria-hidden": "true"
										}),
										"Call ",
										phone.display
									]
								}, phone.href)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pt-1 text-sm leading-relaxed text-foam/75",
									children: "Pre-order for weekend meals recommended — jollof and fried rice go quickly."
								})
							]
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line bg-foam",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl text-ink",
							children: ["YEHLIN ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold-deep",
								children: "BBB"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-cocoa",
							children: "Bakes, Bites & Brews · Sunyani"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm font-display text-lg text-chocolate italic",
							children: "Tasty treats for every mood."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm text-cocoa",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "inline-flex min-h-11 items-center font-semibold text-chocolate",
							href: orderHref,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["WhatsApp ", WHATSAPP_DISPLAY]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col",
							children: phones.map((phone) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: phone.href,
								className: "inline-flex min-h-11 items-center font-semibold text-chocolate",
								children: phone.display
							}, phone.href))
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "border-t border-line px-4 py-4 text-center text-xs font-semibold tracking-wide text-cocoa sm:text-sm",
					children: "Freshly prepared · Quality ingredients · Your satisfaction matters"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dock fixed inset-x-0 bottom-0 z-40 border-t border-line bg-foam/95 p-3 backdrop-blur md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
						href: orderHref,
						target: "_blank",
						rel: "noopener noreferrer",
						size: "lg",
						full: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" }), "WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
						href: phones[0].href,
						variant: "chocolate",
						size: "lg",
						full: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-5",
							"aria-hidden": "true"
						}), "Call"]
					})]
				})
			})
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
