import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Educate a Child Initiative — Sponsor a Pupil in Lugbe, Abuja" },
      {
        name: "description",
        content:
          "Sponsor a standardized ₦5,000 Education Kit for one of 231 public primary pupils in Lugbe, Abuja. A FCT NYSC CDS Project.",
      },
      { property: "og:title", content: "Educate a Child Initiative — Sponsor a Pupil" },
      {
        property: "og:description",
        content:
          "Equip 231 pupils for academic success. Sponsor a child's Education Kit today.",
      },
    ],
  }),
  component: DonationPage,
});

type PaystackHandler = { openIframe: () => void };
type PaystackOptions = {
  key: string;
  email: string;
  amount: number;
  currency: string;
  metadata?: Record<string, unknown>;
  callback: (response: { reference: string }) => void;
  onClose: () => void;
};
declare global {
  interface Window {
    PaystackPop?: { setup: (opts: PaystackOptions) => PaystackHandler };
  }
}

const PAYSTACK_PUBLIC_KEY = "pk_live_03864c1d92dca18c35dcb19deb12076e7e92af63";

const PRESETS = [
  { label: "1 Child", sub: "₦5,000", value: "5000" },
  { label: "4 Children", sub: "₦20,000", value: "20000" },
  { label: "1 Class", sub: "₦200,000", value: "200000" },
];

const KIT_ITEMS = [
  "1 Packaging Backpack",
  "6 Exercise Books (40-leaves)",
  "1 Mathematical Set",
  "1 Motivational Storybook",
  "Writing Pens & Pencils",
  "Sharpener & Eraser",
];

function DonationPage() {
  const [page, setPage] = useState<"home" | "success">("home");
  const [formData, setFormData] = useState({ name: "", email: "", amount: "5000" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("status") === "success") setPage("success");
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handlePay = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.amount) {
      alert("Please provide an email and donation amount.");
      return;
    }
    if (!window.PaystackPop) {
      alert("Payment library is still loading. Please try again in a moment.");
      return;
    }
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      amount: parseInt(formData.amount, 10) * 100,
      currency: "NGN",
      metadata: {
        custom_fields: [
          {
            display_name: "Sponsor Name",
            variable_name: "sponsor_name",
            value: formData.name || "Anonymous Donor",
          },
        ],
      },
      callback: (response) => {
        window.location.href = `${window.location.origin}?status=success&reference=${response.reference}`;
      },
      onClose: () => {
        // user closed modal
      },
    });
    handler.openIframe();
  };

  if (page === "success") return <SuccessView onBack={() => {
    window.history.replaceState({}, document.title, window.location.pathname);
    setPage("home");
  }} />;

  return (
    <div className="min-h-screen bg-background font-sans" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <header className="border-b border-border/60 bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-base font-bold tracking-tight text-foreground">EDUCATE A CHILD INITIATIVE</p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">FCT NYSC CDS Project</p>
          </div>
          <div className="hidden rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-foreground sm:block">
            Deployment · July 20, 2026
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-[1.15fr_1fr] lg:py-20">
        {/* Left column */}
        <section className="space-y-10">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> LEA Primary School · Lugbe, Abuja
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Equip 231 Pupils in Lugbe, Abuja For Academic Success.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              The "Educate a Child" Initiative is a localized community development intervention engineered to strip away financial hurdles facing public school pupils transitioning into higher primary academic sessions. On July 20, 2026, we are deploying standardized Education Kits to LEA Primary School, Lugbe.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard headline="231 Pupils" body="Primary 3 and 4 transitioning beneficiaries." />
            <StatCard headline="₦5,000 / Kit" body="Standardized cost to fully sponsor one child." />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              What's inside an Education Kit?
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {KIT_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-secondary/60 p-6">
            <h3 className="text-sm font-semibold text-foreground">📦 Executive Appreciation</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Qualifying corporate or individual sponsors will be contacted via email to coordinate delivery of a customized Premium Crystal Award Plaque and formal Certificate of Commendation.
            </p>
          </div>
        </section>

        {/* Right column: checkout */}
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-xl shadow-primary/5">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Sponsor a Child</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Select or input your desired sponsorship configuration below.
            </p>

            <form onSubmit={handlePay} className="mt-6 space-y-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Select Unit Tier
                </label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {PRESETS.map((p) => {
                    const active = formData.amount === p.value;
                    return (
                      <button
                        type="button"
                        key={p.value}
                        onClick={() => setFormData((f) => ({ ...f, amount: p.value }))}
                        className={`rounded-xl border px-2 py-3 text-left transition ${
                          active
                            ? "border-primary bg-primary/5 text-foreground shadow-sm"
                            : "border-border bg-card hover:border-primary/40 hover:bg-secondary/60"
                        }`}
                      >
                        <p className="text-sm font-semibold">{p.label}</p>
                        <p className="text-xs text-muted-foreground">{p.sub}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Field label="Custom Amount (₦)">
                <input
                  type="number"
                  name="amount"
                  min="500"
                  value={formData.amount}
                  onChange={onChange}
                  className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm font-medium focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <Field label="Full Name / Company Name">
                <input
                  type="text"
                  name="name"
                  placeholder="Optional"
                  value={formData.name}
                  onChange={onChange}
                  className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <Field label="Email Address">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={onChange}
                  className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-95"
              >
                Sponsor with Paystack
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <p className="text-center text-[11px] text-muted-foreground">
                Secured by Paystack · Your details are never stored on our servers.
              </p>
            </form>
          </div>
        </aside>
      </main>

      <footer className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} FCT NYSC CDS · Educate a Child Initiative. All sponsorships go directly to kit production and deployment.
        </div>
      </footer>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function StatCard({ headline, body }: { headline: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <p className="text-2xl font-bold tracking-tight text-foreground">{headline}</p>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function SuccessView({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <div className="w-full max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-xl shadow-primary/10 sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          Thank you for your sponsorship!
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Your generous contribution to the "Educate a Child" Initiative has been successfully processed. You are directly enabling an uninterrupted academic session for public primary pupils in Lugbe, Abuja.
        </p>

        <div className="mt-6 rounded-2xl border border-border bg-secondary/60 p-5 text-left">
          <h2 className="text-sm font-semibold text-foreground">📦 Executive Appreciation Tracking</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Our project team will cross-reference your payment metadata shortly. Qualifying corporate or individual sponsors will be contacted via email to coordinate the production and delivery of their customized Premium Crystal Award Plaque and formal Certificate of Commendation.
          </p>
        </div>

        <button
          onClick={onBack}
          className="mt-7 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-95"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
}
