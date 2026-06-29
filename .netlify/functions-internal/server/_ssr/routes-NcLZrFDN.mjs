import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-NcLZrFDN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAYSTACK_PUBLIC_KEY = "pk_live_03864c1d92dca18c35dcb19deb12076e7e92af63";
var PRESETS = [
	{
		label: "1 Child",
		sub: "₦5,000",
		value: "5000"
	},
	{
		label: "4 Children",
		sub: "₦20,000",
		value: "20000"
	},
	{
		label: "1 Class",
		sub: "₦200,000",
		value: "200000"
	}
];
var KIT_ITEMS = [
	"1 Packaging Backpack",
	"6 Exercise Books (40-leaves)",
	"1 Mathematical Set",
	"1 Motivational Storybook",
	"Writing Pens & Pencils",
	"Sharpener & Eraser"
];
function DonationPage() {
	const [page, setPage] = (0, import_react.useState)("home");
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		amount: "5000"
	});
	(0, import_react.useEffect)(() => {
		if (new URLSearchParams(window.location.search).get("status") === "success") setPage("success");
	}, []);
	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData((p) => ({
			...p,
			[name]: value
		}));
	};
	const handlePay = (e) => {
		e.preventDefault();
		if (!formData.email || !formData.amount) {
			alert("Please provide an email and donation amount.");
			return;
		}
		if (!window.PaystackPop) {
			alert("Payment library is still loading. Please try again in a moment.");
			return;
		}
		window.PaystackPop.setup({
			key: PAYSTACK_PUBLIC_KEY,
			email: formData.email,
			amount: parseInt(formData.amount, 10) * 100,
			currency: "NGN",
			metadata: { custom_fields: [{
				display_name: "Sponsor Name",
				variable_name: "sponsor_name",
				value: formData.name || "Anonymous Donor"
			}] },
			callback: (response) => {
				window.location.href = `${window.location.origin}?status=success&reference=${response.reference}`;
			},
			onClose: () => {}
		}).openIframe();
	};
	if (page === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessView, { onBack: () => {
		window.history.replaceState({}, document.title, window.location.pathname);
		setPage("home");
	} });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans",
		style: { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border/60 bg-card/60 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-bold tracking-tight text-foreground",
						children: "EDUCATE A CHILD INITIATIVE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: "FCT NYSC CDS Project"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-foreground sm:block",
						children: "Deployment · July 20, 2026"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-[1.15fr_1fr] lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), " LEA Primary School · Lugbe, Abuja"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl",
									children: "Equip 231 Pupils in Lugbe, Abuja For Academic Success."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xl text-base leading-relaxed text-muted-foreground",
									children: "The \"Educate a Child\" Initiative is a localized community development intervention engineered to strip away financial hurdles facing public school pupils transitioning into higher primary academic sessions. On July 20, 2026, we are deploying standardized Education Kits to LEA Primary School, Lugbe."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								headline: "231 Pupils",
								body: "Primary 3 and 4 transitioning beneficiaries."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								headline: "₦5,000 / Kit",
								body: "Standardized cost to fully sponsor one child."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
								children: "What's inside an Education Kit?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid gap-2.5 sm:grid-cols-2",
								children: KIT_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-sm text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" }), item]
								}, item))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-secondary/60 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold text-foreground",
								children: "📦 Executive Appreciation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: "Qualifying corporate or individual sponsors will be contacted via email to coordinate delivery of a customized Premium Crystal Award Plaque and formal Certificate of Commendation."
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:sticky lg:top-8 lg:self-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-7 shadow-xl shadow-primary/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold tracking-tight text-foreground",
								children: "Sponsor a Child"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Select or input your desired sponsorship configuration below."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handlePay,
								className: "mt-6 space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Select Unit Tier"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 grid grid-cols-3 gap-2",
										children: PRESETS.map((p) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setFormData((f) => ({
													...f,
													amount: p.value
												})),
												className: `rounded-xl border px-2 py-3 text-left transition ${formData.amount === p.value ? "border-primary bg-primary/5 text-foreground shadow-sm" : "border-border bg-card hover:border-primary/40 hover:bg-secondary/60"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold",
													children: p.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: p.sub
												})]
											}, p.value);
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Custom Amount (₦)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											name: "amount",
											min: "500",
											value: formData.amount,
											onChange,
											className: "w-full rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm font-medium focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full Name / Company Name",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "name",
											placeholder: "Optional",
											value: formData.name,
											onChange,
											className: "w-full rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email Address",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											name: "email",
											required: true,
											placeholder: "you@domain.com",
											value: formData.email,
											onChange,
											className: "w-full rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-95",
										children: ["Sponsor with Paystack", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "h-4 w-4",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: "2.5",
												d: "M14 5l7 7m0 0l-7 7m7-7H3"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-[11px] text-muted-foreground",
										children: "Secured by Paystack · Your details are never stored on our servers."
									})
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/60 bg-card/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" FCT NYSC CDS · Educate a Child Initiative. All sponsorships go directly to kit production and deployment."
					]
				})
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2",
		children
	})] });
}
function StatCard({ headline, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-2xl font-bold tracking-tight text-foreground",
			children: headline
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: body
		})]
	});
}
function SuccessView({ onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-6 py-12",
		style: { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-xl shadow-primary/10 sm:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "h-7 w-7 text-primary",
						fill: "none",
						stroke: "currentColor",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: "2.5",
							d: "M5 13l4 4L19 7"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl",
					children: "Thank you for your sponsorship!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: "Your generous contribution to the \"Educate a Child\" Initiative has been successfully processed. You are directly enabling an uninterrupted academic session for public primary pupils in Lugbe, Abuja."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl border border-border bg-secondary/60 p-5 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold text-foreground",
						children: "📦 Executive Appreciation Tracking"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: "Our project team will cross-reference your payment metadata shortly. Qualifying corporate or individual sponsors will be contacted via email to coordinate the production and delivery of their customized Premium Crystal Award Plaque and formal Certificate of Commendation."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onBack,
					className: "mt-7 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-95",
					children: "Return to Homepage"
				})
			]
		})
	});
}
//#endregion
export { DonationPage as component };
